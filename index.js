const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')
const cookieSession = require('cookie-session')
const passport = require('passport')
const { initialize } = require('passport')
require('./models/User')
require('./services/passport')
mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("connected to db")
})

const app = express()

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)
app.use(passport.initialize())
app.use(passport.session())
require('./routes/authRoutes')(app) //= authRoutes(app)


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log("server is up")
});