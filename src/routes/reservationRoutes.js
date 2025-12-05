const express = require('express');
const reservationRouter = express.Router();
const reservationController = require('../controllers/reservationController');

reservationRouter.get('/', (req, res) => {
    res.send(`
        <html>
            <body style="background-color:#222; color:#fff; text-align:center; font-family:sans-serif; padding:20px;">
                <h1>Rezervasyon API Endpointi çalışıyor!</h1>
                <p>POST istekleri için <code style="color: red;">http://localhost:3000/api/reservations</code> veya <code style="color: red;">https://trainreservationsystem-node-js.onrender.com/api/reservations</code> adresini kullanın.</p>
                <p>Örnek istek gövdesi:</p>
                <pre style="background:#333; color:#fff; padding:10px; border-radius:5px; text-align:left;">
        {
            "Tren": {
                "Ad": "Başkent Ekspres",
                "Vagonlar": [
                    { "Ad": "Vagon1", "Kapasite": 100, "DoluKoltukAdet": 50 },
                    { "Ad": "Vagon2", "Kapasite": 100, "DoluKoltukAdet": 50 }
                ]
            },
            "RezervasyonYapilacakKisiSayisi": 20,
            "KisilerFarkliVagonlaraYerlestirilebilir": true
        }
                </pre>
                <h2 style="
                margin-top:100px;
                font-family: 'Arial', sans-serif;
                font-size:1.4em;
                font-weight:400;
                color:#eee;
                text-shadow: 1px 1px 2px #000;

            ">
                Bu proje, <b style="color:#0af; font-weight:700;">Yağız Demirezen</b> tarafından geliştirilmiş
                <span style="color:#ff0; font-weight:700;">ADA YAZILIM</span> iş başvurusu sorusudur.
            </h2>
            </body>
        </html>
        `);
});

reservationRouter.post('/', reservationController.createReservation);

module.exports = reservationRouter;