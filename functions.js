const = DELAY 500;


$(document) .ready(function() {


  var wow = new Wow ();
  wow.init();

   $("#popup_close img") .on("click",function() {
      $("#parent_popup") .hide(DELAY);
  });



  $(".button, #menu a.order") .on("click", function() {
   $("#parent_popup") .show (DELAY);
return false;
  });

$("input[type='text']") .inputmask({"mask":"+7 (999) 999-9999 "});

$("form") .on ("submit",function() {
  var phone = $ ("input[type='text']") .val();
  var regex = / \ +7 \ (\d{3}\) \d {3}\-\d{4}/;
  if (phone.search(regax) == -1 {
   alert ("Укажите правильный номер телефона !");
   return false;
}
return true;
}
});