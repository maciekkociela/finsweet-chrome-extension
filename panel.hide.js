var myTimer = setInterval(function () {
  $(".settingsPanel").after("<div id='loadTrigger'></div>");
  if ($("#loadTrigger").length) {
    whenWebflowIsLoaded();
  }
}, 300);

function whenWebflowIsLoaded() {
  clearInterval(myTimer);

  var keys = {};
  $(document).keydown(function (e) {
    keys[e.which] = true;
    // CMD + ] (not tested for Windows)
    if (keys[221] && keys[91]) {
      $(".wf-control").toggleClass("wf-show-panel");
    }
    // CMD + B (not tested for Windows)
    if (keys[66] && keys[91]) {
      $(".wf-control").toggleClass("wf-show-panel");
    }
  });

  $(document).keyup(function (e) {
    keys[66] = false;
    keys[91] = false;
    keys[221] = false;
    delete keys[e.which];
  });
}
