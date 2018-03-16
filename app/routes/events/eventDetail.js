//

module.exports.default = (router) => {
  router.get('/detail/:id', (req, res) => {
    let data = {
      csrfToken: req.csrfToken(),
      eventId: req.params.id,
      orders: [],
      users: [],
      currentUser: req.session.user
    };

    let eventId = req.params.id;

    let getDetail = req.app.db.collection('events').doc(eventId).get();
    let getOrders = req.app.db.collection('events').doc(eventId).collection('orders').get();
    let getUsers = req.app.db.collection('events').doc(eventId).collection('users').get();

    Promise.all([getDetail, getOrders, getUsers]).then(values => {
      // Event Detail
      data.event = Object.assign({ id: values[0].id }, values[0].data());
      // Event Users
      data.users = values[2].docs.map((user) => {
        return Object.assign({ id: user.id }, user.data());
      });

      // Event Orders
      let orderPromises = [];
      values[1].forEach((order) => {
        data.orders.push(Object.assign({ id: order.id }, order.data()));
        orderPromises.push(getOrderUsers(order));
      });

      Promise.all(orderPromises).then(values => {
        values.forEach((orderUsers, index) => {
          data.orders[index]['users'] =  orderUsers.docs.map(user => {
            return Object.assign({ id: user.id }, user.data());
          });
        });
        renderEventDetailPage(res, data);
      });
    });
  });

  router.post('/event/:id/order/new', (req, res) => {
    let eventRef =  req.app.db.collection('events').doc(req.params.id);
    eventRef.collection('orders').add(
      {
        name: req.body.name,
        price: Number(req.body.price),
        link: req.body.link,
        // TODO: Implement order amount
        amount: 1
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

  let addUserToOrder = eventRef.collection('users').doc(currentUser.id).set(user);
  let addUserToEvent = orderRef.collection('users').doc(currentUser.id).set(user);

  return Promise.all([addUserToOrder, addUserToEvent]);
}

function getOrderUsers(order) {
  return order.ref.collection('users').get();
}

function renderEventDetailPage(res, data) {
  res.renderVue('../screens/eventDetail.vue', data, {
    template: {
      html: {
        start: '<!DOCTYPE html><html class="layout-two-column">',
        end: '</html>'
      },
    }
  });
}
