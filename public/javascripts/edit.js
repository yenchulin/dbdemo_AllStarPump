$(document).ready(function() {
    $.fn.editable.defaults.ajaxOptions = {
        type: "POST"
    };
    $.fn.editable.defaults.mode = 'inline';
    $('#moduleQuantity').editable({
        success: function(response, newValue) {

            if (response.status == 'error') return response.msg; //msg will be shown in editable form
        }
    });
    $('#acompanyName').editable({
        success: function(response, newValue) {
            if (response.status == 'error') return response.msg; //msg will be shown in editable form
        }
    });
    $('#quantityOwned').editable({
        success: function(response, newValue) {
            if (response.status == 'error') return response.msg; //msg will be shown in editable form
        }
    });


});
<script>
var tag = 0;
$(function(){
  $("#del").click(function(){
      $("#module tbody tr:last").remove();
  });
})
</script>
