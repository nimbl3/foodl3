//
const querystring = require('querystring');
const config = require('../config');
const slackOAuthUrl = 'https://slack.com/oauth/authorize';

module.exports.default = (router) => {
  router.get('/login', (req, res) => {
    if (req.session.user) {
      res.redirect('/');
    }

    let params = {
      scope: 'identity.basic,identity.email,identity.team,identity.avatar',
      client_id: config.slack.clientId
    };

    let loginUrl = [slackOAuthUrl, querystring.stringify(params)].join('?');
    res.renderVue('../views/login/index', {loginUrl: loginUrl});
  });
};
