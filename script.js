$(document).ready(function () {
  $('#homePage').click(function () {
    var data = $(this).load('1.html .ayah');      
    var json = JSON.stringify({html:data})
    console.log(json)
  });
});
