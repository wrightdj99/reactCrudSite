//JS File that actually handles connectivity to database.

var dbProps = require("./db_properties");

var mySql = require("mysql");

module.exports = {
    getConnection: () => {
    return mySql.createConnection({
        host: dbProps.host,
        user: dbProps.user,
        password: dbProps.password,
        database: dbProps.dbName
    });
}
}