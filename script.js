$(document).ready(function () {
  $('#homePage').click(function () {
    const ayahs = []
      for(let i = 1; i< 115; i++){
        ayahs[i] = $(this).load(i+'.html .ayah');
      }    
      console.log(ayahs)
   });
});
