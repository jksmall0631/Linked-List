$('#enter-button').on('click', function(){
  // displayBookmarkInfo();
  $(displayBookmarkInfo()).appendTo().html();
});

function displayBookmarkInfo(){
  var websiteTitleValue = $('#website-title').val();
  var websiteUrlField = $('#website-url').val();
  $('.bookmark-title').text(websiteTitleValue);
  $('.bookmark-url').text(websiteUrlField);
}

//read on click

//delete on click
