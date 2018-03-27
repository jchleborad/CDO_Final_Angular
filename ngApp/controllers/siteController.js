//DISABLE RIGHT-CLICK TO SAVE IMAGES
function disableRightClick() {
  alert(
    "SNAP!\n\nAll site images are ©2017 Create, Design, Organize! unless purchased."
  );
  return false;
}

//DISABLE RIGHT-CLICK TO SAVE LIGHTBOX IMAGE
$(document).ready(function () {
  $("img").bind("contextmenu", function (e) {
    alert("We're sorry, all site images are ©2017 Create, Design, Organize! and not available for direct download :)");
    return false;
  });
});

//SCROLL TO TOP OF PAGE
$(document).ready(function () {
  $("a[href=#top]").click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });
});

//SHOW PASSWORD ON LOGIN/REGISTER
function showPass() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  }
  else{
    x.type = "password";
  }
}

//PRINT IMAGE
function printImg(url) {
  var win = window.open("");
  win.document.write(
    '<img src="' + url + '" onload="window.print();window.close()" />'
  );
  win.focus();
}

//CLEAR LOCAL STORAGE
function unloadUser() {
  localStorage.removeItem('username');
}