const express = require('express')
const session = require('express-session')
const path = require('path')
const app = express()
const passport = require('passport')
const PORT = 3030
const db = require('./database/index').db

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(session({
    secret: 'bugs',
    resave: false,
    saveUninitialized: false,
    cookie: { path: '/', httpOnly: true, secure: false, maxAge: 1000 * 60 * 60 * 24 }
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(express.static(path.join(__dirname, '..', '/public')))

app.use('*', (req, res, next) => {
    console.log(req.session.id)
    console.log(req.session)
    console.log(req.user)
    next()
})

app.use('/auth', require('./auth'))
app.use('/api', require('./api'))

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
})

const initializeDB = () => {
    console.log('synchronizing database')
    // require('./database/seed')()
    db.sync({
        // force: true,
        logging: false
    })
    
}

const server = app.listen(PORT, () => {
    initializeDB()
    console.log(`Starting server on port ${PORT}`)
})