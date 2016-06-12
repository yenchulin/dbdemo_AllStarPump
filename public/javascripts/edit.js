$(document).ready(function() {
    $.fn.editable.defaults.ajaxOptions = {
        type: "POST"
    };
    $.fn.editable.defaults.mode = 'inline';
    $('#moduleQuantity').editable({
        type :　'text',
        url :　'/moduleUpdate',
        success: function(response, newValue) {
          console.log(newValue);
        },
        error : function(err){
          console.log(err);
        }});
    $('#acompanyName').editable();
    $('#quantityOwned').editable();
});
