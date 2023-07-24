class Forbidden extends Error {
  constructor(message) {
    super(message);
    this.name = 'HTTP 403 Forbidden';
    this.statusCode = 403;
  }
}

module.exports = Forbidden;
