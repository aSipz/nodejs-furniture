config = {
    development: {
        PORT: 3030,
        SECRET: 'verySecretSecret',
        DB_URI: 'mongodb+srv://angel:ARQGwKviE7ImnraZ@cluster0.lqrboul.mongodb.net/test'
        
    },
    production: {
        PORT: 3030,
        SECRET: 'evenMoreSecretSecret',
        DB_URI: 'mongodb+srv://angel:ARQGwKviE7ImnraZ@cluster0.lqrboul.mongodb.net/test'
    }
};

module.exports = config[process.env.NODE_ENV || 'development'];