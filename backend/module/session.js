/**
 * Session handling with cookie.
 */
class Session {
    constructor(settings) {
        this.settings = settings || {};
        this.settings.name = this.settings.name || 'session.app';
    }

    middleware(req, res, next) {
        console.log(this);
        if (!req.cookies[this.settings.name]) {
            res.cookie(
                this.settings.name, 
                'jasédlfjasdél', 
                { 
                    expires: new Date(Date.now() + 900000), 
                    httpOnly: false 
                }
            );        
        }

        next();
    }
}

const factory = (settings) => {
    return new Session(settings);
};

module.exports = factory;