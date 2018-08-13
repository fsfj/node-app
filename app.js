console.log('Hello asd');
const express = require('express');
const hbs = require('hbs');
const app = new express();

hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

app.set('view engine','hbs');

app.get('/', (req, res) => {
    res.render('home.hbs',{
        pageTitle: 'Home Page'
    });
});

app.get('/about', (req, res) => { 
    res.render('about.hbs', { 
        name: 'FF30',
        pageTitle: 'About Page'
    });
});

app.get('/project', (req, res) => {
    res.render('project.hbs',{
        pageTitle: 'Project Page'
    });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`);
});