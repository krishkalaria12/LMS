import AppError from "../utils/appError.js"

const register = (req,res, next) => {
    const {fullName, email, password} = req.body

    if (!fullName || !email || !password) {
        return next(new AppError("All fields are required", 400));
    }
}
const login = (req,res) => {

}
const getProfile = (req,res) => {

}
const logout = (req,res) => {

}

export {
    register,
    login,
    logout,
    getProfile
}