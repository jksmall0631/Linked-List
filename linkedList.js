$('#enter-button').on('click', function(){
  var websiteTitleValue = $('#website-title').val();
  var websiteUrlField = $('#website-url').val();
  $('.bookmarks').append('<div>websiteTitleValue</div>');
  $('.bookmarks').append('<div>websiteUrlField</div>');
});

// function displayBookmarkInfo(){
//   $('.bookmark-title').text(websiteTitleValue);
//   $('.bookmark-url').text(websiteUrlField);
// }

//read on click
