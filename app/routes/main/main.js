// 

module.exports.default = (router) => {
    router.get('/', (req, res) => {
        if (!req.session.user) {
            res.redirect('/login');
            return;
        }

        const data = {
            title: 'Hello World',
            events: []
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
};
