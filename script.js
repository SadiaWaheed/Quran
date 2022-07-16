$(document).ready(function () {
  $('#homePage').click(function () {
    let ayahs = ""
      for(let i = 1; i< 115; i++){
        ayahs += $(this).load(i+'.html .ayah');
      }    
      
   });
});
