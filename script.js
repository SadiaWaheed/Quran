window.onload = function(){
  $('#homePage').click(function () {
    $(this).load('1.html .ayah')
  });

}
$(document).ready(function () {
 

  $('#result').click(function () {
  var data = []
  jsonData = null;
  i=-1
  $('.ayah').each(function(){
    var item = $(this)
    i++;
    data.push({
      ayah_no: i,
      Indo_text: $('span', item).text()
    });
  });
  jsonData = JSON.stringify(data)
  console.log(jsonData)
  });
});
