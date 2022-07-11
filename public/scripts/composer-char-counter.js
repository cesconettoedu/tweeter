$(document).ready(function() {
  
  $("#tweet-text").on("input", function(){

    const maxChars = 140;

    
    const inputLength = $(this).val().length;
    const restNum = maxChars - inputLength
    const $quantityNum = $('.counter');
   
    $quantityNum.text(restNum);

    if (restNum < 0) {
      $quantityNum.css('color', 'red');
    } else {
      $quantityNum.css('color', '#545149');
    }

  })

});
