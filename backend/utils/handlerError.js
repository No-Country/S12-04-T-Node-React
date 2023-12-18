const handleError = (res, message = 'An error has occurred', code = 403) => {
  res.status(code)
  res.send({ errors: { msg: message } })
}

module.exports = { handleError }
