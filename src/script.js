$(function () {
    function sendData($form) {
      let data = $(this).serialize();
      return $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: data,
      });
    }
    
    $("form").validate();
    
    $("form").submit(function (e) {
        e.preventDefault();
    
        sendData($(this)).done(function(){
          $("#container_form").html("<div id='message' style='background-color:linear-gradient(rgb(26, 26, 26) 0%, rgb(0, 0, 0) 100%); text-align:center; color:#FFFFFF;'></div>");
          $("#container_form").css({
            'height': '85%',
            'display': 'flex',
            'justify-content': 'center',
            'align-items': 'center'
          });
          $("#message")
            .html("<h2>Form Submitted Succesfully</h2>")
            .append("<p>We will be in touch soon.</p>")
            .hide()
            .fadeIn(1500);
        });
    });
  });