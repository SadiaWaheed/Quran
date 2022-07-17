$(document).ready(function () {
  $('#homePage').click(function () {
    $(this).load('1.html .ayah')
  });
  var data = []
  jsonData = null;
  $('.ayah').each(function(){
    var item = $(this)
    
    data.push({
      ayah: item.data('id')
      name: $('span', item).text()
    });
  });
  jsonData = JSON.stringfy(data)
  console.log(JSON.stringfy(jsonData))
});
