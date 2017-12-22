//

module.exports.default = (router) => {
    router.get('/logout', (req, res) => {
        req.session = null;
        res.redirect('/');
    });
};
