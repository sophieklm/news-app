(function(exports){

function Controller(view = new View()) {
  this.view = view;
}

Controller.prototype.populatePage = function(guardianResponse) {
  element = document.getElementById("headlines");
  element.innerHTML = this.view.getHTML(guardianResponse);
};

exports.Controller = Controller;
})(this);
