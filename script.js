$(document).ready(function () {
  $('#homePage').click(function () {
    $(this).load('1.html .ayah')
      $('.ayah').each(function(){
        document.body.innerHTML = $(this).text()
      })
  });
});
