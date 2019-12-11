const ApplicationPolicy = require("./application");

module.exports = class PostPolicy extends ApplicationPolicy {

  new() {
    return (this._isMember() || this._isAdmin());
  }

  create() {
    return this.new();
  }

  edit() { 
    return this.new() &&
    this.record && (this._isOwner() || this._isAdmin() || this._isMember());
  }

  update() {
    return this.edit();
  }

  destroy() {
    return this.update();
  }
}