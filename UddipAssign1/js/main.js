/*
Uddip Amin
991518202
*/

$(document).ready(function(){
//index.html
  //Submiting form saves values to local storage
  $("#quote").click(function(){
    localStorage.setItem('name', $("#name").val());
    localStorage.setItem('email', $("#email").val());
    localStorage.setItem('width', $("#width").val());
    localStorage.setItem('length', $("#length").val());
    localStorage.setItem('colour', $("#colour").val());
    localStorage.setItem('paint', $("#paint").val());
  })

//summary.html
  //Inserting contact information
  $(".contactInformation").append("<p><b><u>Name</u>:</b> "+localStorage.getItem('name')+"</p>");
  $(".contactInformation").append("<p><b><u>Email</u>:</b> "+localStorage.getItem('email')+"</p>");

  //Calculating and displaying length, width and area
  let area = localStorage.getItem('length')*localStorage.getItem('width');
  $(".room").append("<p><b><u>Width</u>:</b> "+localStorage.getItem('width')+" m</p>");
  $(".room").append("<p><b><u>Length</u>:</b> "+localStorage.getItem('length')+" m</p>");
  $(".room").append("<p><b><u>Area</u>:</b> "+area+" m&sup2</p>");

  //Inserting and displaying chosen colour
  $(".room").append("<p><b><u>Colour Choosen</u>:</b></p>");
  $(".room").append("<div></div>");
  $("div:not([class])").addClass("colour");
  $(".colour").css("background-color", localStorage.getItem('colour'));

  //Calculate and display number of paint cans needed
  let numCans = Math.ceil(area/4);
  $(".room").append("<p>1 Can = ~4 m&sup2</p>");
  $(".room").append("<p><b><u>Number of Cans</u>:</b> "+numCans+" cans</p>");

  //Calculate and display total quote
  let tax = 0.13;
  let subtotal,total;
  if (localStorage.getItem('paint')=="standard") {
    subtotal = numCans * 24.99;
    total = subtotal + (subtotal *tax);
    $(".room").append("<p><b><u>Paint Type</u>:</b> Standard Paint ($24.99)</p>");
  } else {
    subtotal = numCans * 39.99;
    total = subtotal + (subtotal *tax);
    $(".room").append("<p><b><u>Paint Type</u>:</b> Premium Paint (39.99)</p>");
  }

  $(".room").append("<br><label for=\"total\"><b>Quote</b> </label>");
  $(".room").append("<p><b><u>Subtotal</u>:</b> $"+subtotal.toFixed(2)+" + 13%(HST)</p>");
  $(".room").append("<p><b><u>Total</u>:</b> $"+total.toFixed(2)+"</p>");
});
