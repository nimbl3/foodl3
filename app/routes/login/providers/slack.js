const request = require('request');
const querystring = require('querystring');
const slackOAuthUrl = 'https://slack.com/api/oauth.access';

module.exports.default = (router) => {
    router.get('/slack_authenticate', (req, res) => {
        let params = {
            client_id: process.env.SLACK_CLIENT_ID,
            client_secret: process.env.SLACK_CLIENT_SECRET,
            code: req.query.code
        };

        request([slackOAuthUrl, querystring.stringify(params)].join('?'), (error, response, body) => {
            let responseBody = JSON.parse(body);

            if (error !== null || !responseBody.ok) {
                // TODO: Should render error 500
                res.renderVue('error', { title: 'Error', debug: false });
                return;
            }

            res.redirect('/');
        });

    });
};
