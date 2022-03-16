// Sending text messages to all the users(clients)
function sendText() {
    // Construct a msg object containing the data the server needs to process the message from the chat client.
    var msg = {
      type: "message",
      text: document.getElementById("text").value,
      id:   clientID,
      date: Date.now()
    };
  
    // convert the message or values to json formatted strings
    exampleSocket.send(JSON.stringify(msg));
  
    // Blanking the text input field to be ready to receive the next line of text from the user.
    document.getElementById("text").value = "";
  }
  
  
  