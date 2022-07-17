$(document).ready(function () {
  $('#homePage').click(function () {
    $(this).load('1.html .ayah')
  });

  $('#result').click(function () {
  var data = []
  jsonData = null;
  i=-1
  $('.ayah').each(function(){
    var item = $(this)
    console.log(i)
    i++;
    data.push({
      id: i,
      ayah: $('span', item).text()
    });
  });
  jsonData = JSON.stringify(data)
  console.log(jsonData)
  });
});
