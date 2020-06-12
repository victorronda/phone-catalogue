const { Router } = require('express');
const router = Router();
const DB = require('../phones.json');

const phonesDB = DB.map(phone => ({
    id: phone.id,
    name: phone.name,
    manufacturer: phone.manufacturer,
    description: phone.description,
    color: phone.color,
    price: phone.price,
    imageFileName: `http://localhost:4000/images/${phone.imageFileName}`,
    screen: phone.screen,
    processor: phone.processor,
    ram: phone.ram
}))

router.get('/', (req, res) => {
    res.status(200).json(phonesDB);
});  

module.exports = router;