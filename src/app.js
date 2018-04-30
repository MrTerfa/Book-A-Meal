import {express} from 'express';
import {bodyParser} from 'body-parser';
import {path} from 'path';

const app = express();

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//set Static Path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res) => {
	res.send("Hello to Book a meal");
})
app.get('/meals', (req, res) => {
	res.send(meals);
});

app.post('/meals', (req,res) => {
	const meal = {
		id : meals.length + 1,
		name : req.body.name
	};
	meals.push(meal);
	res.send(meal);
});

app.put('/meals/:mealid', (req,res) => {
	req.post()
});
app.delete('/meals/:mealid',(req,res) => {
	req.delete()
});


app.post('/menu/',(req,res) => {
	req.post()
});
app.get('/menu/',(req,res) => {
	req.post()
});

app.post('/orders',(req,res) => {
	req.post()
});
app.put('/orders/:orderid', (req,res) => {
	req.post()
});
app.get('/orders',(req,res) => {
	req.post()
});


//PORT 
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`App is listening on ${port}`))
