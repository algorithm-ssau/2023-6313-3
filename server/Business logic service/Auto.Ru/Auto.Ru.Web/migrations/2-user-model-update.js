'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "password" from table "users"
 * addColumn "password_hash" to table "users"
 *
 **/

var info = {
    "revision": 2,
    "name": "user-model-update",
    "created": "2023-04-09T14:26:53.526Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "removeColumn",
        params: ["users", "password"]
    },
    {
        fn: "addColumn",
        params: [
            "users",
            "password_hash",
            {
                "type": Sequelize.STRING,
                "field": "password_hash",
                "allowNull": false
            }
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
