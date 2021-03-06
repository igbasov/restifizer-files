'use strict';
var
  RestifizerFileFieldController = require("./lib/restifizer-files");


function RestifizerFiles(app, options) {
  this.app = app;
  this.restifizerOptions = options || {};
}

RestifizerFiles.prototype.createController = function (Controller) {
  return new Controller(this.restifizerOptions);
};

RestifizerFiles.prototype.addController = function (Controller) {
  this.bind(this.createController(Controller));
  return this;
};

RestifizerFiles.prototype.bind = function (controller) {
  controller.bind(this.app);
  return this;
};

RestifizerFiles.Controller = RestifizerFileFieldController;

module.exports = RestifizerFiles;
