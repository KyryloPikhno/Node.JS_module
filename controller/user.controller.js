const {userService} = require("../services");


module.exports = {
    getAllUsers: async (req, res, next) => {
        try {
            const users = await userService.findByParams()

            res.json(users);
        } catch (e) {
            next(e);
        }
    },

    getUserById: (req, res, next) => {
        try {
            res.json(req.user);
        } catch (e) {
            next(e)
        }
    },

    updateUser: async (req, res, next) => {
        try {
            const newUserInfo = req.body;
            const userId = req.params.userId;

            await userService.updateOne(userId, newUserInfo)

            res.json('Updated')
        } catch (e) {
            next(e);
        }
    },

    createUser: async (req, res, next) => {
        try {
            await userService.create(req.body)

            res.json('Ok')
        } catch (e) {
            next(e);
        }
    },

    deleteUserById: async (req, res, next) => {
        try {
            await userService.deleteOne(req.params.userId)

            res.status(204).send('Ok')
        } catch (e) {
            next(e);
        }
    }
};