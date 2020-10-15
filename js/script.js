
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





  

  var foodPrice =[900,600,400,1000,800,1100,700,500,1200]
var deliverPrices=[0,100];
$(document).ready(function(){
 $('form#myform').submit(function(event){
     event.preventDefault();
     
     var foodKind=$('#food').val();
    
     var plateQty=parseInt($('#quantity').val());
   
     var platePick=$('#delivery').val();
     

     var price=foodPrice[foodKind-1];

     var DeliveryCost=deliverPrices[platePick-1];

     newOrder=new Order(foodKind);
     newTotal=new Total(price,plateQty,DeliveryCost);

     if (platePick===1){
         alert(" order is "+newOrder.fullOrder() + " click ok to see your bill ");
         alert(" bill is "+newTotal.finalTotal() + "your food is ready,pick it");
     }
     else{
         if(platePick===2){
             prompt("enter location where you want your food to be delivered");
             alert("your order has been received and it will be delivered,click ok to see full information of your order");
             alert(" order is " +newOrder.fullOrder() + "click ok to see your bill");
             alert(" bill is " +newTotal.finalTotal() + "your food will be delivered in 30minutes");
         }
     }
 }) ;  
});
function Order(food){
    this.food=food;
   
}
Order.prototype.fullOrder=function(){
    return this.food + " this is the kind of your food " ;

};
function Total(price,quantity,delivery){
    this.price=price;
    this.quantity=quantity;
    this.delivery=delivery;

}
Total.prototype.finalTotal=function(){
    return this.price*this.quantity+this.delivery;
};