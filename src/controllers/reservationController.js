const reservationService = require('../services/reservationService');

exports.createReservation = async (req, res) => {
    try {
        const result = await reservationService.createReservation(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
