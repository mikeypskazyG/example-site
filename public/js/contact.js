(function(){
console.log("hello world")
  $('#btn-contact-submit').click(function(event){
    if (event)
      event.preventDefault()
    var visitor = {
      name: $('#btn-contact-name').val(),
      email: $('#btn-contact-email').val(),
      message:$('#btn-contact-message').val()
    }
    console.log('contact form submitted ' + JSON.stringify(visitor))
    $.ajax({
      url: '/api/subscriber',
      type: 'POST',
      data: visitor,
      success: function(response){
        console.log('SUBSCRIBER created: ' + JSON.stringify(response))
      },
      error: function(response){

      }
    })
  })

})()
//created - Przekaza II 2020-1221
