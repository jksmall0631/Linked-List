var websiteTitleField = $('#website-title').value;
var websiteUrlField = $('#website-url').value;

$('#enter-button').on('click', function(){
  createCard();
  displayBookmarkInfo();
});

function displayBookmarkInfo(){
  var websiteTitleValue = $('#website-title').val();
  var websiteUrlField = $('#website-url').val();
  $('.bookmark-title').text(websiteTitleValue);
  $('.bookmark-url').text(websiteUrlField);
}

function createCard(){
$('.bookmarks').append('<div class="bookmark-card">' +
                        '<h1 class="bookmark-title"></h1>' +
                        '<a href="#"><h2 class="bookmark-url"></h2></a>' +
                        '<input id="bookmark-read-button" type="button" name="Read" value="Read">' +
                        '<input id="bookmark-delete-button" type="button" name="Delete" value="Delete">' +
                        '</div>'
);
}
