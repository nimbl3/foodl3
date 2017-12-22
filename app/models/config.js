// 
const path = require('path');

class Config {
    constructor() {
        this.env = process.env.NODE_ENV || 'development';
        this.root = path.normalize(__dirname + '/..');
        this.rootPath = process.env.ROOT_PATH || '/';
        this.app = {
            name: 'Express-Vue-MVC-Starter'
        };
        this.port = parseInt(process.env.PORT) || 9000;
        this.firebase = {
            apiKey: process.env.FIREBASE_API_KEY,
            authDomain: process.env.FIREBASE_AUTH_DOMAIN,
            databaseURL: process.env.FIREBASE_DB_URL,
            projectId: process.env.FIREBASE_PROJECT_ID
        };
        this.slack = {
            clientId: process.env.SLACK_CLIENT_ID,
            clientSecret: process.env.SLACK_CLIENT_SECRET
        };
    }
}
module.exports = Config;
