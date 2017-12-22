//
const querystring = require('querystring');
const slackOAuthUrl = 'https://slack.com/oauth/authorize';

module.exports.default = (router) => {
    router.get('/login', (req, res) => {
        if (req.session.user) {
            res.redirect('/');
        }

        let params = {
            scope: 'identity.basic,identity.email,identity.team,identity.avatar',
            client_id: process.env.SLACK_CLIENT_ID
        };

        let loginUrl = [slackOAuthUrl, querystring.stringify(params)].join('?');
        res.renderVue('login/login', { loginUrl: loginUrl });
    });
};
