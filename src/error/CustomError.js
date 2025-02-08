export class propRequiredError extends Error {
  constructor(property) {
    super(`Error: Missing required prop "${property}". Please provide a value.`)
    this.name = "MissingSpacingError"
  }
}

export class propTypeError extends Error {
  constructor(property, type) {
    super(`Error: Prop "${property}" must be a ${type}.`)
    this.name = "TypeError"
  }
}

export class propValueError extends Error {
  constructor(property, value) {
    super(`Error: Prop "${property}" must be ${value}.`)
    this.name = "ValueError"
  }
}
