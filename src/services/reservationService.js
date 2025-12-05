const { planReservation } = require("../utils/reservationPlanner");

async function createReservation(reservationData) {
    const availability = await planReservation(reservationData);

    if (!availability.RezervasyonYapilabilir) {
        return {
            RezervasyonYapilabilir: false,
            YerlesimAyrinti: []
        };
    }

    return {
        RezervasyonYapilabilir: true,
        YerlesimAyrinti: availability.YerlesimAyrinti
    };
}

module.exports = { createReservation };
