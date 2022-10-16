// Create token and save the token in cookies
const sendToken = (user, statusCode, res) => {

    const token = user.getJwtToken();

    res.status(statusCode).cookie('token', token, {
        expires: new Date(Date.now() + 24 * 7 * 30 * 356 * 12 * 1),
        httpOnly: true
    }).json({
        success: true,
        User: user,
        Token: token
    })

}

module.exports = sendToken;