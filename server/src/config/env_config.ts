export default () => ({
    server:{
        user:process.env.PORT
    },
    mongo_db:{
        mongo_db:process.env.MONGO_DB
    },
    google:{
        secretKey:process.env.GOOGLE_CLIENT_SECRET,
        clientId:process.env.GOOGLE_CLIENT_ID
    }
})
