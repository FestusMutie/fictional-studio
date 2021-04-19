$(document).ready(function(){
//code to show and hide the design image
$(".design_image").click(function(){
$(this).hide()
$(".design").show()
});
$(".design").click(function(){
    $(this).hide()
    $(".design_image").show()
});
//code to show and hide development icon
$(".dev_image").click(function(){
$(this).hide()
$(".development").show()
$(".development").click(function(){
$(this).hide()
$("dev_image").show()
});
});
//code to hide and show product icon
$(".product_image").click(function(){
$(this).hide()
$(".product").show()
$(".product").click(function(){
$(this).hide()
$(".product_image").show()
});
});
//hover function code
$().hover(function(){

});
});