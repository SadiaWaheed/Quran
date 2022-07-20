
$(document).ready(function () {
 
 $('#homePage').click(function () {
  $(this).load('1.html .1-ayah')
for(let i =2; i<=114; i++){
    $('body').append($('<div class="surah">').load(i+'.html .'+i+'-ayah'))
    
  }
});

$('#result').click(function () {
  var surah = []
  jsonData = null;
  s=1

  $('.surah').each(function(){
    var  data = []
    a=1
    
    $('.'+s+'-ayah').each(function(){
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
