import express from 'express';

const app = express(0);

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(3000, () => {
    console.log('Sever started on http://localhost:3000');
});