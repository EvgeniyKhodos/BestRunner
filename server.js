let express = require('express');
let bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let trainings = [
    {
        id: 0,
        date: '19.03.2020',
        type: 'skiing',
        distance: 5,
        comment: 'My first training'
    },
    {
        id: 1,
        date: '20.03.2020',
        type: 'run',
        distance: 5,
        comment: 'My second training'
    },
    {
        id: 2,
        date: '21.03.2020',
        type: 'walking',
        distance: 5,
        comment: 'Great'
    },
    {
        id: 3,
        date: '22.03.2020',
        type: 'bicycle',
        distance: 5,
        comment: 'Yes!'
    },
]

app.get('/', function (req, res) {
    res.send('Hello API');
})

app.get('/trainings', function (req, res) {
    res.send(trainings);
})

app.get('/trainings/:id', function (req, res) {
    let training = trainings.find(function (training) {
        return training.id === Number(req.params.id)
    })
    res.send(training);
})

app.post('/trainings', function (req, res) {
    let training = {
        id: 4,
        date: Date.now(),
        type: 'walking',
        comment: req.body.comment
    };
    trainings.push(training);
    res.send(training);
})

app.put('/trainings/:id', function (req, res) {
    let training = trainings.find(function (training) {
        return training.id === Number(req.params.id)
    })
    training.comment = req.body.comment;
    res.send(training);
})

app.listen(3012, function () {
    console.log('API app started');
})