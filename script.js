$(document).ready(function () {
  $('#homePage').click(function () {
    $(this).load('1.html')
  });

  $('#result').click(function () {
  var data = []
  jsonData = null;
  $('.ayah').each(function(){
    var item = $(this)
    console.log(item.data('id'))
    data.push({
      ayah: item.data('id'),
      name: $('span', item).text()
    });
  });
  jsonData = JSON.stringify(data)
  console.log(JSON.stringify(jsonData))
  });
});
