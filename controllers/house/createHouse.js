const {provider} = require('../../dataBase');

module.exports = async (req,res) => {

    const {city,area,price,street} = req.body;

    const query = `INSERT INTO houses  (city,area,price,street) VALUES(${city},${area},${price},${street})`;

    await provider.promise().query(query);

    res.render('createHouse');

};