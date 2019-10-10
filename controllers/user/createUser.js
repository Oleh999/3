const {provider} = require('../../dataBase');

module.exports = async (req,res) => {
    const {name,email,password} = req.body;

    const query = `INSERT INTO users ( name, email ,password) VALUES (${name},${email},${password})`;

    await provider.promise().query(query);

    res.render('login');

};
