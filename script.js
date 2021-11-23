

// computer messages
const talk = ['Hey! How are you?', 'Tell me about yourself.', 'I don\'t know what that means...', 'Awesome!', 'How do you feel about vegan meat?', 'What are you doing now?', 'You already know the answer.', 'Wanna hear a joke?', 'You\'re a genius!', 'Are you listening?'] 
   
// reaction to 'submit' event
$('#message-form').on('submit', function(event) {
       event.preventDefault();

       // store random computer reply
       let ranTalk = talk[Math.floor(Math.random()*talk.length)]
       const noTalk = 'I can\'t help you if you won\'t speak to me...'
       
       // gather user messsage value...
       var $userInput = $(this).find('[name=message]');
       var userMsg = $userInput.val()

        // clear the input field
        $(this).find('[name=message]').val('');

       //... check submission value is not null
       if(!userMsg) {
           alert(noTalk)
       } else {

       // ... proceed to generate user submission timestamp
       let d = new Date();
       let hours = d.getHours();
       let minutes = d.getMinutes();
       if(minutes < 10) {
           minutes = '0' + minutes
       }
       var timeStamp = $('<span id ="time"></span>')
           .text(hours + ':' + minutes);

       // add user message and timestamp to chat window
       var addUserMsg = $('<p>')
           .addClass('userMsg')
           .text(userMsg + '  ')
           .append(timeStamp)
           .hide()
           .appendTo('#chat-window')
           .fadeIn(function() {
               
            // add computer reply and timestamp to chat window
      let d2 = new Date();
       let hours2 = d.getHours();
       let minutes2 = d.getMinutes();
       if(minutes2 < 10) {
        minutes2 = '0' + minutes2
    }
       var timeStamp2 = $('<span id ="time"></span>')
           .text(hours2 + ':' + minutes2);

               var addReply = $('<p>')
           .addClass('reply')
           .text(ranTalk + '  ')
           .append(timeStamp2)
           .hide()
           .appendTo('#chat-window')
           .fadeIn();
           })    
            
       }   

        // autoscroll to the bottom
        $('#chat-window').animate({scrollTop: 100000000000}, 1000);

   })

  

