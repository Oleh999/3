const {provider} = require('../../dataBase');


module.exports = async ( req, res, next) => {

    try {

        const { password,email } = req.body;

    const query = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;
        const [checkLoginUser] = await provider.promise().query(query);

        if (!checkLoginUser.length){
            throw new Error(`Incorrect values`);
        }

        req.user = checkLoginUser;
        next();

    } catch (e) {

        res.status(400).json(e.message);

    }
};

