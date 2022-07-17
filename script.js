
$(document).ready(function () {
  $('#homePage').click(function () {
    $(this).load('1.html .ayah')
    for(let i = 2; i<=114 ; i++){
      $('body').append($('<div class="surah">').load(i+'.html .ayah'))
    }
  });

  $('#result').click(function () {
  var data = []
  surah = []
  jsonData = null;
  s=0
  $('.surah').each(function(){
    s++;    
    a=0
    $('.ayah').each(function(){
      var item = $(this)
      a++;
      data.push({
        ayah_no: a,
        indo_text: $('span', item).text()
      });    
    });
    surah.push({
      surah_no:s,
      text:JSON.stringify(data)
    });
  });
  
  jsonData = JSON.stringify(surah)
  console.log(jsonData)
  });
});
