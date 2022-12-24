(document.onkeydown = function(e) {
  if (e.keyCode == 191) {
    document.getElementById("userID").focus();
  }
});

(document.onkeydown = function(e) {
  if (e.keyCode == 27) {
    document.getElementById("userID").blur();
  }
});
