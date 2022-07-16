$(document).ready(function () {
  $('#homePage').click(function () {
      for(let i = 1; 1< 115; i++){
        $(this).load(i+'.html');
      }    
      
   });
});