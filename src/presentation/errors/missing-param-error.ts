export class MissigParamError extends Error {
    constructor (paramName : string) {
        super(`Missing Param : ${paramName}`)
        this.name = 'MissingParamError'
    }
}