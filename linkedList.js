$('#enter-button').on('click', function(){

  displayBookmarkInfo();
  $('.bookmarks').append('<div>bla</div>');

});

function displayBookmarkInfo(){
  var websiteTitleValue = $('#website-title').val();
  var websiteUrlField = $('#website-url').val();
  $('.bookmark-title').text(websiteTitleValue);
  $('.bookmark-url').text(websiteUrlField);
}

//read on click
