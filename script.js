
$(document).ready(function () {
 
 $('#homePage').click(function () {
  $(this).load('112.html .112-ayah')
for(let i =113; i<=114; i++){
    $('body').append($('<div class="surah">').load(i+'.html .'+i+'-ayah'))
    
  }
});

$('#result').click(function () {
  var surah = []
  jsonData = null;
  s=112

  $('.surah').each(function(){
    var  data = []
    a=1
    
    $('.ayah-'+s).each(function(){
      var item = $(this)
      data.push({
        ayah_no: a,
        indo_text: $('span', item).text()
      });  
      a++;
      console.log("a="+a)
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
