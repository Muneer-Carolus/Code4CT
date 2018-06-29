

// JavaScript for my imageSlider
var slideIndex = 0;
carousel ();

function carousel() {
    var i;
    var x = document.getElementsByClassName("sliders");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex -1].style.display = "block"; 
    setTimeout(carousel, 3000); // Change image every 3 seconds
}
// Using JQuery for Count Up timer
 $('.counter').each(function (){
  var $this =$(this),
  countTo =$this.attr('data-count');

  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },
  {
    duration:10000,
    easing:'linear',
    step: function(){
      $this.text(Math.floor(this.countNum)+ '+');
    },
    complete: function(){
      $this.text(this.countNum+ '+');
    }
  });
});


///////////////////

//  my shopping cart
// adding and subtracting from cart
$(function(){
  $("#add1").click(function(){
    $("<h3 style='color:black;' id='button1'>Intro to Coding: Web Pages R250</h3>").appendTo("#course1");
  });
});

$(function(){
  $('#remove1').click(function(){
      $('#button1').remove();
  });
});

$(function(){
  $("#add2").click(function(){
    $("<h3 style='color:black;' id='button2'>Intro to Coding: Music R250</h3>").appendTo("#course2");
  });
});

$(function(){
$('#remove2').click(function(){
    $('#button2').remove();
});
});

$("#add3").click(function(){
  $("<h3 style='color:black;' id='button3'>Intro to Coding: Animation R250</h3>").appendTo("#course3");
});

$(function(){
$('#remove3').click(function(){
    $('#button3').remove();
});
});

$("#add4").click(function(){
  $("<h3 style='color:black;' id='button4'>Beginner JavaScript R1800</h3>").appendTo("#course4");
});

$(function(){
$('#remove4').click(function(){
    $('#button4').remove();
});
});

$("#add5").click(function(){
  $("<h3 style='color:black;' id='button5'>Beginner Front End Web Developmentt R1800</h3>").appendTo("#course5");
});

$(function(){
$('#remove5').click(function(){
    $('#button5').remove();
});
});

$("#add6").click(function(){
  $("<h3 style='color:black;' id='button6'>Beginner Python R1800</h3>").appendTo("#course6");
});

$(function(){
$('#remove6').click(function(){
    $('#button6').remove();
});
});
///////////////////////
// JQuery for adding totals
var total = 0;

 $(function(){
   $("#add1").click(function(){
     total = Number(total) + Number(250);
     if(total < 0 ) {
       $('#total').text("Total:R " + total);
       // true
     } else {

       $('#total').text("Total:R " + total);
     }
   });
   $('#total').text("Total:R " + total);
 });

 $(function(){

   $("#remove1").click(function(){
     total = Number(total) - Number(250);
     if(total < 0 ) {
       $('#total').text("Total:R " + total);
       // true
     } else {
 
       $('#total').text("Total:R " + total);
     }

   });

 });

 $(function(){
  $("#add2").click(function(){
    total = Number(total) + Number(250);
    if(total < 0 ) {
      $('#total').text("Total:R " + total);
      // true
    } else {
   
      $('#total').text("Total:R " + total);
    }
  });
  $('#total').text("Total:R " + total);
});

$(function(){

  $("#remove2").click(function(){
    total = Number(total) - Number(250);
    if(total < 0 ) {
      $('#total').text("Total:R " + total);
      // true
    } else {
   
      $('#total').text("Total:R " + total);
    }

  });

});
$(function(){
  $("#add3").click(function(){
    total = Number(total) + Number(250);
    if(total < 0 ) {
      $('#total').text("Total:R " + total);
      // true
    } else {
    
      $('#total').text("Total:R " + total);
    }
  });
  $('#total').text("Total:R " + total);
});

$(function(){

  $("#remove3").click(function(){
    total = Number(total) - Number(250);
    if(total < 0 ) {
      $('#total').text("Total:R " + total);
      // true
    } else {
   
      $('#total').text("Total:R " + total);
    }

  });

});

$(function(){
  $("#add4").click(function(){
    total = Number(total) + Number(1800);
    if(total < 0 ) {
      $('#total').text("Total:R " + total);
      // true
    } else {
   
      $('#total').text("Total:R " + total);
    }
  });
  $('#total').text("Total:R " + total);
});

$(function(){

  $("#remove4").click(function(){
    total = Number(total) - Number(1800);
    if(total < 0 ) {
      $('#total').text("Total:R " + total);
      // true
    } else {
 
      $('#total').text("Total:R " + total);
    }

  });

});
$(function(){
  $("#add5").click(function(){
    total = Number(total) + Number(1800);
    if(total < 0 ) {
      $('#total').text("Total:R " + total);
      // true
    } else {
     
      $('#total').text("Total:R " + total);
    }
  });
  $('#total').text("Total:R " + total);
});

$(function(){

  $("#remove5").click(function(){
    total = Number(total) - Number(1800);
    if(total < 0 ) {
      $('#total').text("Total:R " + total);
      // true
    } else {
     
      $('#total').text("Total:R " + total);
    }

  });

});
$(function(){
  $("#add6").click(function(){
    total = Number(total) + Number(1800);
    if(total < 0 ) {
      $('#total').text("Total:R " + total);
      // true
    } else {

      $('#total').text("Total:R " + total);
    }
  });
  $('#total').text("Total:R " + total);
});

$(function(){

  $("#remove6").click(function(){
    total = Number(total) - Number(1800);
    if(total < 0 ) {
      $('#total').text("Total:R " + total);
      // true
    } else {

      $('#total').text("Total:R " + total);
    }

  });

});
 