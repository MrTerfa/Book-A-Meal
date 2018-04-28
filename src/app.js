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
    res.send('Hello World');
})

app.listen(3000,() =>{console.log("App is running on port 3000!!!")});