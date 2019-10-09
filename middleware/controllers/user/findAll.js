const {provider} = require('../../dataBase');

module.exports = async (req,res)=>{

    try {
        let [query] = await provider.promise().query('SELECT * FROM users');
        console.log(query);
        res.json(query );
    }catch (e) {
        res.status(400).json(e.message);
    }

};