const {provider} = require('../../dataBase');

module.exports = async ( req, res, next) => {

    try {

        const { user_id } =req.params;
        // const checkIsUserPresent = users.find(user=> user.id === +user_id);
       const query = `SELECT * FROM users Where id = ${user_id}`;
        const [checkIsUserPresent] = await provider.promise().query(query);

        if (!checkIsUserPresent.length){
            throw new Error(`User with ${user_id} is not present`);
        }

        req.user = checkIsUserPresent;
        next();

    } catch (e) {

        res.status(400).json(e.message);

    }
};

