const {provider} = require('../../dataBase');

module.exports = async (req,res) => {

    const {city,area,price,street} = req.body;

    const query = `INSERT INTO houses (city,area,price,street) VALUES(?,?,?,?)`;

    await provider.promise().query(query,[city,area,price,street]);

    res.render('createHouse');

};
