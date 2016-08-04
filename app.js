$(document).ready(function(){
console.log("working")
$(".addspy").on("click", newSpy);
$(".deleteSpy").on("click", removeSpy);//i just realized that this is referring to elements not yet on the DOM,
// and that I should have used body there, or the empty container i created with the intent of using for all
// these spies
});

var spyArray = [];



function newSpy(){
  $('body').append("<div class ='spy' style='background-color: yellow'>" + (spyArray.length += 1) + "<button class='status'>Status</button><button class='deletespy'>Delete</button></div>");
  $('body').children().last().data('id', spyArray[i]);
};

// function spyStatus(){
//   $(".status").on("click", function(){
//     if($(this).css("background-color","yellow"){
//       $(this).css("background-color","red");
//     }else{
//       $(this).css("background-color","yellow");
//     }
//     }
//   }

function removeSpy(){
  $(".deletespy").on("click", function(){
    console.log("do i work?");
  });

  // $(this).remove();
}
