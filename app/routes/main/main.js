// 

module.exports.default = (router) => {
    router.get('/', (req, res) => {
        const data = {
            title: 'Hello World',
            events: []
        };
        const vueOptions = {
            head: {
                title: 'Express-Vue MVC Starter Kit'
            }
        };

        req.app.locals.db.collection('events').get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                data.events.push(doc.data());
            });
            res.renderVue('main/main', data, vueOptions);
        });
    });
};
