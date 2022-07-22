const HttpResponse = require("../helpers/http-response")

module.exports = class LoginRouter {
  route (httpRequest) {
    if(!httpRequest || !httpRequest.body){
      return HttpResponse.serverError()
    }
    const { email, password } = httpRequest.body
    if (!password) return HttpResponse.badRequest('password')
    if (!email) return HttpResponse.badRequest('email')

    if (email && password) {
      return HttpResponse.success()
    }
  }
}