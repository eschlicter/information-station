const ApplicationPolicy = require("./application");

module.exports = class TopicPolicy extends ApplicationPolicy {

  new() {
    return this._isMember();
  }

  create() {
    return this.new();
  }

  // edit() {
  //   return this._isAdmin() ;
  // }

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