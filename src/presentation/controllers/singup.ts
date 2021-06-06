import { HttpResponse, HttpRequest } from "../protocols/http"
import { MissigParamError } from "../errors/missing-param-error"
import { badRequest } from "../helpers/http-helper"
import { Controller } from '../protocols/controller'

export class SignUpController implements Controller {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredField = ['name', 'email', 'password', 'passwordConfirmation']
    for(const field of requiredField) {
        if(!httpRequest.body[field]) {
            return badRequest(new MissigParamError(field));
        }
    }
  }
}
