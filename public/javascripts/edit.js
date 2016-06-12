$(document).ready(function() {
 $('#moduleQuantity').click(function(){
     $(this).hide();
     $('#hiddenForm1').show();
 });
 $('#cancel1').click(function(){
     $('#hiddenForm1').hide();
     $('#moduleQuantity').show();
 });
 });
 $(document).ready(function() {

 $('#moduleUsage').click(function(){
     $(this).hide();
     $('#hiddenForm').show();
 });
 $('#cancel').click(function(){
     $('#hiddenForm').hide();
     $('#moduleUsage').show();
 });
});
 $(document).ready(function() {

 $('#acompanyName').click(function(){
     $(this).hide();
     $('#hiddenForm2').show();
 });
 $('#cancel2').click(function(){
     $('#hiddenForm2').hide();
     $('#acompanyName').show();
 });
});
 $(document).ready(function() {

 $('#quantityOwned').click(function(){
     $(this).hide();
     $('#hiddenForm3').show();
 });
 $('#cancel3').click(function(){
     $('#hiddenForm3').hide();
     $('#quantityOwned').show();
 });
});
