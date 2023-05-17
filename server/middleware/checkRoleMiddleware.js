const jwt = require('jsonwebtoken');

module.exports = function (role) {
    return function (req, res, next) {
        if (req.method === 'OPTIONS') {
            next();
        }
        try {
            const token = req.headers.authorization.split(' ')[1]; // split Bearer flrg4gl3ml
            if (!token) {
                return res.status(401).json({ message: 'Пользователь не авторизован' });
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            if (decoded.role !== role) {
                res.status(403).json({ message: 'Нет прав доступа' });
            }
            req.user = decoded;
            next();
        } catch (e) {
            res.status(403).json({ message: 'Пользователь не авторизован' });
        }
    };
};