
$(document).ready(function () {
 
  $('#homePage').click(function () {
    $(this).load('1.html .ayah')
    for(let i = 113; i<=114 ; i++){
      $('body').append($('<div class="surah-'+i+'">').load(i+'.html .ayah'))
    }
  });

  $('#result').click(function () {
    var surah = []
    jsonData = null;
    s=1

    $('.surah-'+s).each(function(){
      var  data = []
      a=0
      
      $('.ayah').each(function(){
        var item = $(this)
        a++;
        console.log("a="+a)
        data.push({
          ayah_no: a,
          indo_text: $('span', item).text()
        });    
        console.log(data)
      });
      console.log("final a = "+a)
      surah.push({
        surah_no:s,
        text:data
      });      
      s++; 
      console.log("s= "+s)   
     console.log(surah)
    });
    document.body.innerHTML=""
    jsonData = JSON.stringify(surah)
    document.body.innerHTML = jsonData

    });
});
