//

module.exports.default = (router) => {
    router.get('/login', (req, res) => {
        const data = {};
        const vueOptions = {
            head: {
                title: 'Foodl3'
            }
        };

        res.renderVue('login/login', data, vueOptions);
    });
};
