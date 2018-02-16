//

module.exports.default = (router) => {

  router.get('/user/:id', (req, res) => {
    req.app.db.collection('users').doc(req.params.id).get().then((userDoc) => {
      let user = Object.assign({ id: userDoc.id }, userDoc.data());
      res.json(user);
    });
  });
};
