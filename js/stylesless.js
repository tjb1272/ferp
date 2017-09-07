//change color of form as information input
$('#inputFullName, #text, #Email').on({
  keypress: function() {
    $(this).addClass('highlight');
    },
  });
$('.myloc').on({
  click: function() {
    $(this).addClass('highlight');
    },
  });
  //change color and say hello/goodbye on mouse over/out
$( "#imgrobo1-thumbnail, #imgrobo2-thumbnail, #imgrobo3-thumbnail, #robotwaving-thumbnail, #coffeeofthemonth-thumbnail" ).mouseover(function(){
  $( this ).addClass( "robo_styles" );
    $( this ).find( "span" ).text( "Hello" );
  });
$( "#imgrobo1-thumbnail, #imgrobo2-thumbnail, #imgrobo3-thumbnail, #robotwaving-thumbnail, #coffeeofthemonth-thumbnail" ).mouseout(function(){
  $( this ).addClass( "robo_styles" );
    $( this ).find( "span" ).text( "Goodbye" );
  });
  // remove alert
alert=function (){
  };

  $('.navbar-collapse').on('click', function() {
    $(".slider").toggleClass("sliderMove");  
}); 


  // $('#myCollapsible').collapse({
  //   toggle: false
  // })
//
// function myFunction(str){
//   var request=new XMLHttpRequest();
//   request.onreadystatechange=function()
//   {
//     if (request.readyState==4 && request.status==200)
//     {
//       document.getElementbyId("results").innerHTML=request.responseText;
//     }
//   }
//   request.open("GET","Search.php?str="=str,true);
//   request.send();
// }
//
//

  // function myFunction() {
  //     var input, filter, ul, li, a, i;
  //     input = document.getElementById("myInput");
  //     filter = input.value.toUpperCase();
  //     ul = document.getElementById("list");
  //     li = ul.getElementsByTagName("li");
  //     for (i = 0; i < li.length; i++) {
  //         if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
  //             li[i].style.display = "";
  //         } else {
  //             li[i].style.display = "none";
  //
  //         }
  //     }
  // }
      // $("#myFuntion()").filter("mySearch");
      //   // Retrieve the input field text and reset the count to zero
      //   var i = $("#mySearch").val();
      //   var filter = $(this).val(), count = 0;
      //    // Loop through the comment list
      //   $("#mySearch").each(function(){
      //
      //       // If the list item does not contain the text phrase fade it out
      //       if ($(this).text().search(new RegExp(filter, "i")) < 0) {
      //           $(this).fadeOut();
      //
      //       // Show the list item if the phrase matches and increase the count by 1
      //       } else {
      //           $(this).show();
      //           count++;
      //
      //
      //     });
      //   });




  //search
    // function myFunction() {
    //     var input, filter, ul, li, a, i;
    //     input = document.getElementById('#mySearch');
    //     filter = input.value.toUpperCase();
    //     ul = document.getElementById("list");
    //     li = ul.getElementsByTagName('li');
    //     for (i = 0; i < li.length; i++) {
    //         a = li[i].getElementsByTagName("a")[0];
    //         if (li.innerHTML.toUpperCase().indexOf(filter) > -1) {
    //             li[i].style.display = "";
    //         } else {
    //             li[i].style.display = "none";
    //         }
    //     }
    // }
// // search with not submit button (direct to robots page)
//   $(document).ready(function() {
//    $("#mySearch").keyup(function (e) {
//     var kc = e.keyCode || e.which;
//     if (kc == 13) {
//      $("#mySearch").addClass("button-search");
//      if("button-search" == "ret") {
//        window.location.href = "http://localhost:8080/robots.html" + this.serialize();
//            }
//          });
//        });
//   function myFunction() {
//     // Declare variables
//     var input, filter, table, tr, td, i;
//   input = document.getElementById("myInput");
//   filter = input.value.toUpperCase();
//   table = document.getElementById("myTable");
//   li = list.getElementsByTagName("li");
//
//   // Loop through all table rows, and hide those who don't match the search query
//   for (i = 0; i < li.length; i++) {
//     ul = li[i].getElementsByTagName("li")[0];
//     if (li) {
//       if (li.innerHTML.toUpperCase().indexOf(filter) > -1) {
//         li[i].style.display = "";
//       } else {
//         li[i].style.display = "none";
//       }
//     }
//   }
// }


//   $(this).on('keyup','.mySearch', function (e) {
//     if ($(this).text().search(new RegExp(filter, "i")) < 0) {
//        $(this).fadeOut();
//   $(document).ready(function(){
//       $("mySearch").keyup(function(){
//           var filter = $(this).val(), count = 0;
//           $("#list li").each(function(){
//                 if ($(this).text().search(new RegExp(filter, "i")) < 0) {
//                   $(this).fadeOut();
//               } else {
//                   $(this).show();
//                   count++;
//         }
//       });
//     });
//   });
// });


//
//   //search without submit button
// $(document).ready(function() {
//  $(".searchbox").keyup(function (e) {
//   var kc = e.keyCode || e.which;
//     if (kc == 13) {
//      $(".searchbox").addClass("button-search");
//     if ("button-search" == "ret");
//     $(this).text().search(new RegExp(.mySearch))
//       window.location.href = "http://localhost:8080/robots.html" + $(this).serialize()
//     }
//   });
// });
// //
//       if ($(this).text().search(new RegExp(filter, "i")) < 0) {
//           $(this).fadeOut();
//       }
// });
//   });
//
//
//   $(document).ready(function(){
//       $("#filter").keyup(function(){
//         // Retrieve the input field text and reset the count to zero
//         var filter = $(this).val(), count = 0;
//          // Loop through the comment list
//         $(".searchbox").each(function(){
//
//             // If the list item does not contain the text phrase fade it out
//             if ($(this).text().search(new RegExp(filter, "i")) < 0) {
//                 $(this).fadeOut();
//
//             // Show the list item if the phrase matches and increase the count by 1
//             } else {
//                 $(this).show();
//                 count++;
//             }
//         });
//
//         // Update the count
//         var numberItems = count;
//         $("#filter-count").text("Number of Comments = "+count);
//     });
// });
