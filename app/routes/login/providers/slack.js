//
const request = require('request');
const config = require('../../../config');
const slackOAuthAccessUrl = 'https://slack.com/api/oauth.access';

module.exports.default = (router) => {
    router.get('/slack_authenticate', (req, res) => {
        let params = {
            client_id: config.slack.clientId,
            client_secret: config.slack.clientSecret,
            code: req.query.code
        };

        request({ url: slackOAuthAccessUrl, qs: params }, (error, response, body) => {
            let responseBody = JSON.parse(body);

            if (error !== null || !responseBody.ok) {
                // TODO: Should render error 500
                res.renderVue('error', { title: 'Error', debug: false });
                return;
            }

            req.session.token = responseBody.access_token;
            req.session.user = responseBody.user;
            req.session.team = responseBody.team;
            res.redirect('/');
        });

    });
};
