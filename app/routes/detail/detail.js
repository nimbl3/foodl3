//

module.exports.default = (router) => {
    router.get('/detail/:id', (req, res) => {
        const data = {
            id: req.params.id,
            events: [],
            csrfToken: req.csrfToken()
        };
        const vueOptions = {
            head: {
                title: 'Express-Vue MVC Starter Kit'
            }
        };
        console.log("-----------")
        console.log(req.params.id)
        console.log("-----------")
        res.redirect('/');
        // req.app.locals.db.collection('events').get().then(function(querySnapshot) {
        //     querySnapshot.forEach(function(doc) {
        //         data.events.push(doc.data());
        //     });
        //     res.renderVue('detail/detail', data, vueOptions);
        // });
    });
};
