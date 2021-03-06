//
const request = require('request');
const config = require('../../config');
const slackOAuthAccessUrl = 'https://slack.com/api/oauth.access';

module.exports.default = (router) => {
  router.get('/slack_authenticate', (req, res) => {
    let params = {
      client_id: config.slack.clientId,
      client_secret: config.slack.clientSecret,
      code: req.query.code
    };

    request({url: slackOAuthAccessUrl, qs: params}, (error, response, body) => {
      let responseBody = JSON.parse(body);

      if (error !== null || !responseBody.ok) {
        // TODO: Should render error 500
        res.renderVue('../screens/error.vue', {title: 'Error', debug: false});
        return;
      }

      let user = responseBody.user;
      let team = responseBody.team;
      user.imageUrl = user.image_512;

      // Set user session
      req.session.token = responseBody.access_token;
      req.session.user = user;
      req.session.team = team;

      // Save user info
      req.app.db.collection('users').doc(user.id).set({
        name: user.name,
        email: user.email,
        imageUrl: user.image_512,
        team: team.domain
      });

      res.redirect('/');
    });
  });
};
