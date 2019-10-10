const {provider} = require('../../database');

module.exports = async (req, res) => {
    try {
        const {user_id,name,email,password} = req.body;

        const query = `UPDATE users SET name = ?, email = ?,password = ? WHERE id = ? `;

        await provider.promise().query(query,[name,email,password,user_id]);

        res.redirect(`users/${user_id}`);

    } catch (e) {
        res.status(400).json(e.message);
    }
};


