// to attach authentication routes to the application
const { auth } = require('express-openid-connect');

const config = {
    required: false,
    auth0Logout: true,
    appSession: {
        secret: 'a long, randomly-generated string stored in env'
    },
    baseURL: 'http://localhost:3000',
    // baseURL: 'http://localhost:5000',
    clientID: '4kvRt5o3FeRYnutfa6mWICnf2ie9AZkg',
    issuerBaseURL: 'https://dev-sun3mq0i.auth0.com',
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
    res.send(req.isAuthenticated() ? 'Logged in' : 'Logged out')
});

// for routes that require authentication
const { requiresAuth } = require('express-openid-connect');

app.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.openid.user));
});