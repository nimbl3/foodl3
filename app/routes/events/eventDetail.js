//

module.exports.default = (router) => {
  router.get('/detail/:id', (req, res) => {
    let data = {
      csrfToken: req.csrfToken(),
      eventId: req.params.id,
      orders: [],
      currentUser: req.session.user
    };

    let getDetail = req.app.db.collection('events').doc(req.params.id).get();
    let getOrders = req.app.db.collection('events').doc(req.params.id).collection('orders').get();

    Promise.all([getDetail, getOrders]).then(values => {
      data.event = Object.assign({ id: values[0].id }, values[0].data());
      values[1].forEach(function (order) {
        data.orders.push(Object.assign({ id: order.id }, order.data()));
      });

      res.renderVue('../screens/eventDetail', data, {
        layout: {
          html: {
            start: '<!DOCTYPE html><html class="layout-two-column">',
            end: '</html>'
          },
        }
      });
    });
  });

  router.post('/event/:id/order/new', (req, res) => {
    let eventRef =  req.app.db.collection('events').doc(req.params.id);
    eventRef.collection('orders').add(
      {
        name: req.body.name,
        price: req.body.price,
        link: req.body.link,
      }
    )
      .then((orderRef) => {
        joinOrder(req.session.user, eventRef, orderRef).then(() => {
          res.redirect('/detail/' + req.params.id);
        });
      });
  });

  router.post('/order/:id/join', (req, res) => {
    let eventRef = req.app.db.collection('events').doc(req.body.event_id);
    let orderRef =  eventRef.collection('orders').doc(req.params.id);

    joinOrder(req.session.user, eventRef, orderRef).then(() => {
      res.redirect('/detail/' + req.body.event_id);
    });
  });
};

function joinOrder(currentUser, eventRef, orderRef) {
  let user = {
    name: currentUser.name,
    imageUrl: currentUser.imageUrl
  };

  let addUserToOrder = eventRef.collection('users').add(user);
  let addUserToEvent = orderRef.collection('users').add(user);

  return Promise.all([addUserToOrder, addUserToEvent]);
}
