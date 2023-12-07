const handleError = (res, message = "An error has occurred", code = 403) => {
    res.status(code)
    res.send({ error: message})
}

module.exports = { handleError }