require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path')



const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home', {layout: 'index'});
});

app.listen(PORT, console.log("Server started on port: " + PORT))