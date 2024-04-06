const express = require('express'); 
const path = require('path');
const bcrypt = require('bcrypt');
const collection = require('/config');

const app = express();
// convert data into json format 
app.use(express.json())

app.use(express.urlencoded({exended: false}))


// use EJS as the view engine
app.set('view engine', 'ejs');

// static file
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('login');
})

app.get('/signup', (req, res) => {
    res.render('signup');
})

// regiter user 
app.post('/signup', async (req, res) => {
 
    const data = {
        name: req.body.username,
        password: req.body.password
    }

    // check if user already exists
    const existingUser = await collection.findOne({name: data.name}) 

    if (existingUser) {
        res.send('user already exists, chosse a diffrent name')
    } else {
    // hash password against hackers 
    const saltrounds = 10; //  number of salt round for bcrypt
    const hashedPassword = await bcrypt.hash(data.password, saltrounds)

    data.password = hashedPassword;

    const userdata = await collection.insertMany(data);
    console.log(userdata)

    }
})

// login user 
app.post('/login', async (req, res) => {
    try {
        const check = await collection.findOne({name: req.body.usernaame});
        if (!check) {
            res.send('user cannot be found')
        }
        
       // compare the hashed password from the plain text
        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password)
        if (isPasswordMatch) {
            res.render('home')
        } else {
            res.send('wrong password');
        }
    } catch {
        res.send('wrong details')
    }
})
const port = 5000;


app.listen(port, () => {
console.log(`server running on port ${port}`);
})