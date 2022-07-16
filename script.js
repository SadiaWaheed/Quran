$(document).ready(function () {
  $('#homePage').click(function () {
      for(let i = 1; i< 115; i++){
        $(this).load(i+'.html .ayah');
      }    
      
   });
});
