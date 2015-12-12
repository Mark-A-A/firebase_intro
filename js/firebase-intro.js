$(document).ready(function(){
var myDataRef = new Firebase('https://bq6eqcu6ev0.firebaseio-demo.com/');
// Creating the Firebase Reference to the root of the Firebase database
  
  $('#messageInput').keypress(function (e) {
    
    if (e.keyCode == 13) {
      var name = $('#nameInput').val();
      var text = $('#messageInput').val();
      //[ADD SET() HERE]
      //Send chat message:
      //    myDataRef.set('User ' + name + ' says ' + text);
      
      //writing objects
      //myDataRef.set({name: name, text: text});

      //Creating lists of data
       myDataRef.push({name: name, text: text});
      $('#messageInput').val('');
    
    }; //End of if statement


  });

  //notifying when chat messages are received - Event Listener
    myDataRef.on('child_added', function(snapshot) {
      //We'll fill this in later.
      var message = snapshot.val();
      displayChatMessage(message.name, message.text);
    });

    function displayChatMessage(name, text) {
        $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
        $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
      };



});