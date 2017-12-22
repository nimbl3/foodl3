//

module.exports.default = (router) => {
    router.get('/detail/:id', (req, res) => {
        let data = {
            csrfToken: req.csrfToken(),
            eventId: req.params.id,
            orders: []
        };
        let vueOptions = {
            head: {
                title: 'Express-Vue MVC Starter Kit'
            }
        };

        let getDetail = req.app.db.collection('events').doc(req.params.id).get();
        let getOrders = req.app.db.collection('events').doc(req.params.id).collection('orders').get();

        Promise.all([getDetail, getOrders]).then(values=> {
            data['detail'] = values[0].data();
            values[1].forEach(function(order) {
              data.orders.push(order.data());
            });

            res.renderVue('detail/detail', data, vueOptions);

        });
    });

    router.post('/order/:id', (req, res) => {
      console.log("----------------")
      console.log(req.session.user)
      console.log("----------------")
      req.app.db.collection('events').doc(req.params.id).collection('orders').add(
        {
          order: req.body.order,
          link: req.body.link,
          userName: req.session.user.name,
          userAvatar: req.session.user.image_512
        }
      )
      .then(function(querySnapshot) {
        res.redirect('/detail/'+req.params.id);
      });
    });
};
