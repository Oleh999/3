const {provider} = require('../../database');

module.exports = async (req, res) => {
    try {
        const {user_id,name,email,password} = req.body;

        const query = `UPDATE users SET name = ${name}, email = ${email},password = ${password} WHERE id = ${user_id} `;

        await provider.promise().query(query);

        res.redirect(`users/${user_id}`);

    } catch (e) {
        res.status(400).json(e.message);
    }
};

