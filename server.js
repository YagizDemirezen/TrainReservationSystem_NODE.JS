const app = require('./app')

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`\n\n\n\t\t🧾 TRAIN RESERVATION SERVICE by YAĞIZ DEMIREZEN 🧾\n\n\t\t🌐 ▶ Server is running on port ${port}`)
    console.log(`\t\t💻 ▶ API Endpoint: http://localhost:${port}/api/reservations`)
})