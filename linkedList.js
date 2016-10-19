var websiteTitleField = $('#website-title').value;
var websiteUrlField = $('#website-url').value;

$('#enter-button').on('click', function(){
  displayBookmarkInfo();
  $('.bookmark-card').append('<div>bla</div>');
});

function displayBookmarkInfo(){
  var websiteTitleValue = $('#website-title').val();
  var websiteUrlField = $('#website-url').val();
  $('.bookmark-title').text(websiteTitleValue);
  $('.bookmark-url').text(websiteUrlField);
}



  // $('#enter-button').on("click", function() {
  //   var replace = $('h2').replaceWith(function() {
  //     return $(this).contents();
//
//   });
// });
