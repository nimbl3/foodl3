//
const SlackNotification = require('../../services/notification/slack');
const url = require('url');

module.exports.default = (router) => {
  router.get('/', (req, res) => {
    if (!req.session.user) {
      res.redirect('/login');
      return;
    }

    const data = {
      title: 'Hello World',
      events: [],
      csrfToken: req.csrfToken()
    };
    const vueOptions = {
      head: {
        title: 'Express-Vue MVC Starter Kit'
      }
    };

    req.app.db.collection('events').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let event = doc.data();
        event['id'] = doc.id;
        data.events.push(event);
      });

      res.renderVue('../views/events/index', data, vueOptions);
    });
  });

  router.post('/event', (req, res) => {
    let event = {
      name: req.body.name,
      endDate: req.body.end_date,
      description: req.body.description,
      createdAt: req.app.currentTimestamp
    };

    req.app.db.collection('events').add(event).then((eventDoc) => {
      req.app.db
        .collection('teams').doc(req.session.team.domain)
        .collection('integrations').doc('slack')
        .get().then((doc) => {
          let eventUrl = url.format({
            protocol: req.protocol,
            host: req.get('host'),
            pathname: `/detail/${eventDoc.id}`
          });
          let message = `:zap::zap::zap: ${event.name} :zap::zap::zap: <${eventUrl}|See details>`;
          new SlackNotification(doc.data().webhookUrl, message).notify();
          res.redirect('/');
        });
    });
  });
};
