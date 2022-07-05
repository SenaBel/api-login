module.exports = {
    secret: process.env.NODE_ENV === "production" ? process.env.SECRET : "ASDF15FDSA51ASDF25FDSA25FADS12ASDF",
    api: process.env.NODE_ENV === "production" ? "https://api.login.ampliee.com" : "http://localhost:3000",
    tela: process.env.NODE_ENV === "production" ? "https://tela-login.ampliee.com" : "http://localhost:8000"
};