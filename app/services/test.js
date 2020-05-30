/**
 * @Author Udara Premadasa
 * @module Test.Service
 */

const Error = require('../../util/error');

const mysqlClient = require('../../mysql/client');


module.exports = {
    get(req, res, next) {
        if(typeof req.auth != "undefined")
            res.status(200).json({message: "Success"});
        else
            next(Error(Error.UNAUTHORIZED, undefined, 400));
    }
}