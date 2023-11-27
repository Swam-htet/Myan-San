// Middleware to check if the user has a specific role
function checkRole(role) {
    return (req, res, next) => {
        if (req.headers.role === role) {
            next();
        } else {
            res.status(403).json({message: 'Forbidden: Insufficient permissions'});
        }
    };
}

module.exports = checkRole;