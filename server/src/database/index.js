const mongoose = require('mongoose');

import config from "../config/database";

class Database {
    constructor() {
        this.connection = mongoose.connect(
            config.url,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        )
    }
}

module.exports = new Database();