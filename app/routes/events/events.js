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
      csrfToken: req.csrfToken(),
      currentUser: req.session.user
    };

    req.app.db.collection('events').get().then((events) => {
      let eventUsersPromises = [];
      events.forEach((event) => {
        data.events.push(Object.assign({ id: event.id }, event.data()));
        eventUsersPromises.push(event.ref.collection('users').get());
      });

      Promise.all(eventUsersPromises).then((values) => {
        values.forEach((eventUsers, index) => {
          data.events[index]['users'] = eventUsers.docs.map((user) => {
            return Object.assign({ id: user.id }, user.data());
          });
        });
        res.renderVue('../screens/events.vue', data);
      });
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
