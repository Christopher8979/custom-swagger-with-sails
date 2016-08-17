/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	test : function (req, res) {
		res.status(200).jsonp({'status' : 'test SuccessFull'});
	}

};
