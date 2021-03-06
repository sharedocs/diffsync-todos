/// <reference path='typings/node/node.d.ts' />
/// <reference path='cust_typings/cradle/cradle.d.ts' />

import cradle = require('cradle');

cradle.setup({
    raw: false,
    cache: false,
    protocol: 'https',

    host: process.env.db_host,
    port: process.env.db_port,
    auth: {
        username: process.env.db_admin,
        password: process.env.db_password
    }
});

export = function(databaseName: string): cradle.Database {
    return (new cradle.Connection()).database(databaseName);
};
