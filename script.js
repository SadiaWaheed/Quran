$(document).ready(function () {
  $('#homePage').click(function () {
    var data = $(this).load('1.html .ayah');      
    var jsonStr = JSON.stringify({html:data})
    document.body.innerHTML = jsonStr
  });
});
