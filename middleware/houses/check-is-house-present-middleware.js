const {provider} = require('../../dataBase');

module.exports = async ( req, res, next) => {

    try {

        const { house_id } =req.params;
        const query = `SELECT * FROM houses Where id = ${house_id}`;
        const [checkIsHousePresent] = await provider.promise().query(query);

        if (!checkIsHousePresent.length){
            throw new Error(`House with ${house_id} is not present`);
        }

        req.house = checkIsHousePresent;
        next();

    } catch (e) {

        res.status(400).json(e.message);

    }
};

