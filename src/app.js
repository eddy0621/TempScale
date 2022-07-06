const Express = require('express');
const app = Express();
const hbs = require('hbs');
const port = process.env.PORT || 8000;
const path = require('path')

const static_path = (path.join(__dirname,"../public"));
const template_path = (path.join(__dirname,"../templates/views"))
const partials_path = (path.join(__dirname,"../templates/partials"))

app.set('view engine','hbs')
app.set('views',template_path);
hbs.registerPartials(partials_path);

app.use(Express.static(static_path));

app.get('/',(req,res)=>{
    res.render('index.hbs')
})

app.get('/about',(req,res)=>{
    res.render('about.hbs')
})

app.get('/weather',(req,res)=>{
    res.render('weather.hbs')
})

app.get('*',(req,res)=>{
    res.render('404error.hbs')
})

app.listen(8000,()=>{
    console.log(`listening to the localhost:${port}`)
})
