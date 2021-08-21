$( document ).ready( function() {
  var tboxOffset = $( '.top_box' ).offset();
  $( window ).scroll( function() {
    if ( $( document ).scrollTop() > jbOffset.top ) {
      $( '.top_box' ).addClass( 'tbFixed' );
    }
    else {
      $( '.top_box' ).removeClass( 'tbFixed' );
    }
  });
} );