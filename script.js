$(document).ready(function () {
  $('#homePage').click(function () {
    $(this).load('1.html .ayah')
  });

  $('#result').click(function () {
  var data = []
  jsonData = null;
  $('.ayah').each(function(){
    var item = $(this)
    data.push({
      id: item.data('id'),
      ayah: $('span', item).text()
    });
  });
  jsonData = JSON.stringify(data)
  console.log(jsonData)
  });
});
