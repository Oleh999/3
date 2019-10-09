const {provider} = require('../../database');

module.exports = async (req, res) => {
    try {
        // const {  } = req.params;
        const {user_id,name,email,password} = req.body;

        const query = `UPDATE users SET name = ?, email = ?,password = ? WHERE id = ${user_id} `;

        await provider.promise().query(query, [email, name, password]);

        res.redirect(`users/${user_id}`);

    } catch (e) {
        res.status(400).json(e.message);
    }
};
