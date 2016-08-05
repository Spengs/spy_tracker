$(document).ready(function(){
console.log("working")
$(".addspy").on("click", newSpy);
$("body").on("click", removeSpy);
$("body").on("click", spyStatusRed);
// $("body").on("click", spyStatusYellow);
});

var spyArray = [];


function newSpy(){
  $('body').append("<div class ='spy' style='background-color: yellow'>" + (spyArray.length += 1) + "<button class='status'>Status</button><button class='deletespy'>Delete</button></div>");
  $('body').children().last();
};

function spyStatusRed(){
  $(".status").on("click", function(){
    if($(this).parent().css("background-color","yellow")){
      $(this).parent().css("background-color","red");
    }
});
}
// function spyStatusYellow(){
//   $(".status").on("click", function(){
//     if($(this).parent().css("background-color","red")){
//       $(this).parent().css("background-color","yellow");
//     }
//   });
//   }

function removeSpy(){
  $(".deletespy").on("click", function(){
    $(this).parent().remove();
  });
}
