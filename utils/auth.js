//for session login and stuff- copy and pasted from MVC mini project for example sake

// will only server as auth for login page 
const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;