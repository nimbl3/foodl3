//

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

        req.app.db.collection('events').get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                data.events.push(doc.data());
            });
            res.renderVue('main/main', data, vueOptions);
        });
    });

    router.post('/', (req, res) => {
      console.log(req.body)
      req.app.locals.db.collection('events').add(
        {
          name: req.body.name,
          description: req.body.description
        }
      )
      .then(function(querySnapshot) {
        res.redirect('/');
      });
    });
};
