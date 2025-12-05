const express = require('express');
const app = express();
const reservationsRouter = require('./src/routes/reservationRoutes');
app.get('/', (req, res) => {
    res.redirect('/api/reservations');
});
app.use(express.json());
app.use('/api/reservations', reservationsRouter);

module.exports = app;
