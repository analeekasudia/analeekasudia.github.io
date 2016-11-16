'use strict' // limits your ability to do something like 'x = 1'. You would have to say 'var x = 1'
$(document).ready(function() {

	// The below is LOCAL because within the 'document' brackets. If outside of the brackets, it's global.
	// var x = 1
	// If the below is within the 'document' brackets, it's actually be GLOBAL.
	// x = 1

	var messageAppReference = firebase.database();

	$('message-form').submit(function(e) { // 'e' is short for 'event'
		e.preventDefault();
		var message = $('#message').val();
		$('#message').val('');

		var messagesReference = messageAppReference.ref('message');
		// At this point, you need to send the message to the Firebase database.
		messagesReference.push({
			// you can call these whatever you want
			msg: message,
			votes: 1
		});
	}); // end message-form

	function getMessages() {
	    messageAppReference.ref('messages').on('value', function(res) {
	    	$('.message-board').empty();
	    	res.forEach(function(msg) {
	    		console.log("this is the actual obj: ", msg)
	    		var id = msg.key;
	    		var msg = msg.val();
	    		var messageText = message.msg;
	    		var votes = msg.votes;
	    		// create a new li
	    		var li = $('<li>');
	    		var upVote = $('<i class="fa fa-thumbs-up pull-right"></i>');
	    		upVote.on('click', function() {
	    			updateMessage(id, votes++) // create updateMessage function, pass it an 'id', and it will increase the 'votes' by 1
	    		})
	    		var downVote = $('<i class="fa fa-thumbs-down pull-right"></i>');
	    		downVote.on('click', function() {
	    			updateMessage(id, votes--)
	    		})
	    		var remove = $('<i class="fa fa-trash pull-right"></i>')
	    		// populate that li with the content
	    		li.html(messageText);
	    		// shorten with li.append(upVote, downVote, remove)
	    		li.append(upVote);
	    		li.append(downVote);
	    		li.append(remove);
	    		li.append('<div class="pull-right">' + votes + '</div>'); // Bootstrap.js has a 'pull-right' class that floats an element to the right. It'll append numbers to the right
	    		// append the li
	    		$('message-board').append(li);
	    	});   
		});
	}
	function updateMessage(id, votes) {
		var messageReference = messageAppReference.ref('messages/' + id); // grab/add ID within the messages table, hence forward slash
		messageReference.update({votes:votes})
	}
	getMessages();

});