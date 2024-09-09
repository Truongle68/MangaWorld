require('dotenv').config()
const express = require('express')
const router = express.Router()
const axios = require('axios')
const {OAuth2Client} = require('google-auth-library')

async function getUserData(access_token){
    const {data} = await axios.get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token${access_token}`)
    console.log('data: ',data)
}

router.get('/',async(req,res) => {
    const code = req.query.code
    try {
        const redirectUrl = 'http://localhost:3500/oauth'
        const oAuth2Client = new OAuth2Client(
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET,
            redirectUrl
        )
        const res = await oAuth2Client.getToken(code)
        await oAuth2Client.setCredentials(res.tokens)
        console.log("Token acquired")
        const user = oAuth2Client.credentials()
        console.log('credentials: ',user)
        await getUserData(user.access_token)
    } catch (error) {
        console.log('Error!')
    }
})