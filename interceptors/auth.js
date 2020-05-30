/**
 * @Author Udara Premadasa
 * @module User.Authenticate
 */

const Error = require('../util/error');

let authorize = (req, res, roles, callback) => {
    if (typeof req.auth != "undefined") 
        callback(false, undefined);
    else
        callback(true, "Error");
};

module.exports = function(roles = []) {
    return [
        (req, res, next) => {
            authorize(req, res, roles, (err, exception) => {
                if (!err || roles.length === 0) next();
                else next(new Error(Error.UNAUTHORIZED, exception, 401));
            });
        }
    ];
};