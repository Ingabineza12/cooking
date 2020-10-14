
/// workshop images

$(document).ready(function(){
    $("#1, #one").click(function(){
        $(".hidden1").toggle();
        $("#1").toggle();
    });
   });
   
   $(document).ready(function(){
       $("#2, #two").click(function(){
           $(".hidden2").toggle();
           $("#2").toggle();
   
       });
   });
   $(document).ready(function(){
       $("#3, #three").click(function(){
           $(".hidden3").toggle();
           $("#3").toggle();
   
       });
   });
   $(document).ready(function(){
    $("#4, #four").click(function(){
        $(".hidden4").toggle();
        $("#4").toggle();
    });
   });
   $(document).ready(function(){
    $("#5, #five").click(function(){
        $(".hidden5").toggle();
        $("#5").toggle();
    });
   });
   $(document).ready(function(){
    $("#6, #six").click(function(){
        $(".hidden6").toggle();
        $("#6").toggle();
    });
   });
   $(document).ready(function(){
    $("#7, #seven").click(function(){
        $(".hidden7").toggle();
        $("#7").toggle();
    });
   });
   $(document).ready(function(){
    $("#8, #eight").click(function(){
        $(".hidden8").toggle();
        $("#8").toggle();
    });
   });
   $(document).ready(function(){
    $("#9, #nine").click(function(){
        $(".hidden9").toggle();
        $("#9").toggle();
    });
   });

// submit button on contact
$(document).ready(function () {
    $("#comment").submit(function (event) {
      event.preventDefault();
      if ($("input").val() === " ") {
        alert('enter a valid data')
        return;
      }
      alert('Thank you for contacting us!')
      this.reset();
    });
  });

