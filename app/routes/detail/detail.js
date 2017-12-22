//

module.exports.default = (router) => {
    router.get('/detail/:id', (req, res) => {
        let data = {
            csrfToken: req.csrfToken()
        };
        let vueOptions = {
            head: {
                title: 'Express-Vue MVC Starter Kit'
            }
        };

        req.app.db.collection('events').doc(req.params.id).get().then(function(doc) {
            data['detail'] = doc.data();
            res.renderVue('detail/detail', data, vueOptions);
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    });
};
