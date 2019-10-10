const {provider} = require('../../database');

module.exports = async (req, res) => {
    try {

        const {house_id,city,area,price,street} = req.body;

        const query = `UPDATE houses SET city = ${city}, area = ${area},price = ${price},street = ${street} WHERE id = ${house_id} `;

        await provider.promise().query(query);

        res.redirect(`createHouse/${house_id}`);

    } catch (e) {
        res.status(400).json(e.message);
    }
};
