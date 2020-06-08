const { Router } = require('express');
const router = Router();

const phonesDB = require('../phones.json')

router.get('/', (req, res) => {
    res.status(200).json(phonesDB);
});  

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const singlePhone = phonesDB.filter(phone => phone.id === Number(id));
    res.status(200).json(singlePhone);
});

module.exports = router;