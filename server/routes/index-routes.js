const { Router } = require('express');
const router = Router();
const DB = require('../phones.json');

const phonesDB = DB.map(phone => ({...phone, imageFileName: `http://localhost:4000/images/${phone.imageFileName}`}))

router.get('/', (req, res) => {
    res.status(200).json(phonesDB);
});  

module.exports = router;