module.exports = {
    ensureAuthenticated : function(req,res,next) {
        if(req.isAuthenticated()) {
            return next();
        }
        req.flash('error_msg' , 'not logged in CHAMP just a step away');
        res.redirect('/users/login');
    }
}