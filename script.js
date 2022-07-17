
$(document).ready(function () {
  $('#homePage').click(function () {
    $(this).load('1.html .ayah')
    for(let i = 114; i<114 ; i++){
      $('body').append($('<div>').load(i+'.html .ayah'))
    }
  });

  $('#result').click(function () {
  var data = []
  jsonData = null;
  i=0
  $('.ayah').each(function(){
    var item = $(this)
    i++;
    data.push({
      ayah_no: i,
      indo_text: $('span', item).text()
    });
  });
  jsonData = JSON.stringify(data)
  console.log(jsonData)
  });
});
