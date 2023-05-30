import express, { Request, Response } from 'express';
import { Calculator } from './f1';

const app = express();
const calculator = new Calculator();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req: Request, res: Response) => {
    res.render('index', { panelContents: calculator.getPanelContents() });
});

app.post('/', (req: Request, res: Response) => {
    const button = req.body.button;
    calculator.pressButton(button);
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Calculator web app is running on http://localhost:3000');
});