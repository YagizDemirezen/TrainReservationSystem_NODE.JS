function planReservation(reservationData) {
    const passengers = reservationData.RezervasyonYapilacakKisiSayisi;
    const allowSplit = reservationData.KisilerFarkliVagonlaraYerlestirilebilir;
    const trainCars = reservationData.Tren.Vagonlar;

    // %70 yolcu kuralına uygun boş koltuk sayısı hesaplanması
    const trainCarInfos = trainCars.map(car => {
        const maxAllowed = Math.floor(car.Kapasite * 0.7);
        const freeSeats = Math.max(maxAllowed - car.DoluKoltukAdet, 0);
        return { 
            Ad: car.Ad, 
            freeSeats 
        };
    });

    // tek vagon varsa
    if (!allowSplit) {
        const availableCar = trainCarInfos.find(car => car.freeSeats >= passengers);
        if (!availableCar) {
            return { 
                RezervasyonYapilabilir: false, 
                YerlesimAyrinti: [] 
            };
        }
        return {
            RezervasyonYapilabilir: true,
            YerlesimAyrinti: [{ 
                VagonAdi: availableCar.Ad,
                KisiSayisi: passengers 
            }]
        };
    }

    // Yolcular farklı vagonlara yerleştirilebilirse
    let kalan = passengers;
    let yerlesim = [];

    for (let TrainCar of trainCarInfos) {
        if (kalan <= 0) break;
        if (TrainCar.freeSeats > 0) {
            const maxPassengers = Math.min(TrainCar.freeSeats, kalan);
            yerlesim.push({ 
                VagonAdi: TrainCar.Ad,
                KisiSayisi: maxPassengers
            });
            kalan -= maxPassengers;
        }
    }

    if (kalan > 0) {
        return { 
            RezervasyonYapilabilir: false,
            YerlesimAyrinti: [] 
        };
    }

    return { 
        RezervasyonYapilabilir: true,
        YerlesimAyrinti: yerlesim 
    };
}

module.exports = { planReservation };
