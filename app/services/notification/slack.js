//
const request = require('request');

class SlackNotification {
    constructor(webhookUrl, message) {
        this.webhookUrl = webhookUrl;
        this.message = message;
    }

    notify() {
        let body = { text: this.message };
        request.post({
            url: this.webhookUrl,
            headers: { 'Content-type': 'application/json' },
            form: JSON.stringify(body)
        });
    }
}

module.exports = SlackNotification;
