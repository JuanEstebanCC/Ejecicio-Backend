const {Router} = require('express')
const path = require('path')
const router = Router();

router.get('/', (req,res) => {
   res.send('<h1> Mi primera API</h1>')
});

router.get("/saludo", (req, res) => {
  res.send('Prueba de Send');
});
module.exports = router;

//Post 
