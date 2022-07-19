
$(document).ready(function () {
  $('#homePage').click(function () {
    $(this).load('1.html .ayah')
    for(let i = 113; i<=114 ; i++){
      $('body').append($('<div class="surah">').load(i+'.html .ayah'))
    }
  });

  $('#result').click(function () {
    var data = []
    surah = []
    jsonData = null;
    s=0

    $('.surah').each(function(){
      a=0
      
      $('.ayah').each(function(){
        var item = $(this)
        a++;
        console.log(a)
        data.push({
          ayah_no: a,
          indo_text: $('span', item).text()
        });    
        console.log(data)
      });
      
      s++; 
      console.log(s)   
      surah.push({
        surah_no:s,
        text:data
      });
     console.log(surah)
    });
    document.body.innerHTML=""
    jsonData = JSON.stringify(surah)
    document.body.innerHTML = jsonData

    });
});
