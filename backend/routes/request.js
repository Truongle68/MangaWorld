require('dotenv').config()
const express = require('express')
const router = express.Router()
const {OAuth2Client} = require('google-auth-library')

// get User listening
router.post('/', async(req,res) => {
    res.header('Access-Control-Allow-Origin','http://localhost:3000')
    res.header('Referrer-Policy','no-referrer-when-downgrage')

    const redirectUrl = 'http://localhost:3500/oauth'

    const oAuth2Client = new OAuth2Client(
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRET,
        redirectUrl
    )

    const authorizeUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: 'https://googleapis.com/auth/userinfo.profile openid',
        prompt: 'consent'
    })

    res.json({url: authorizeUrl})

})

module.exports = router
