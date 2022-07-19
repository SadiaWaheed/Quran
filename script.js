
$(document).ready(function () {
 

  $('#result').click(function () {
    var surah = []
    jsonData = null;

    for(let i = 1; i <=114; i++){     
      $('body').load(i+'.html .ayah')

      $('.surah').each(function(){
        var  data = []
        a=1
        
        $('.ayah').each(function(){
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
          surah_no:i,
          text:data
        }); 
        console.log("i= "+i)   
       console.log(surah)
      });
    }
    
  
    
    document.body.innerHTML=""
    jsonData = JSON.stringify(surah)
    document.body.innerHTML = jsonData

    });
});
