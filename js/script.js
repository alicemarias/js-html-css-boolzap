$(document).ready(function() {
  // quando clicco su aeroplanino per inviare mex
  $('button.invio-mex').click(function() {
    sendMessage();
  });
  // funzione per creare e mandare messaggio
  function sendMessage() {
  var messaggio = $('input-messaggio input').val();
  if(messaggio != '') {
    //clono template del massaggio
    var messaggioNuovo = $('.conversazioni .mex').clone();
    // ci agiungo testo della input
    messaggioNuovo.children('.testo-messaggio').text(messaggio);
    // aggiungo classe inviato
    messaggioNuovo.addClass('inviato');

    // appendo nuovo messagio alla chat
    $('.finestra-chat').append(messaggioNuovo);
  }
  }
});
