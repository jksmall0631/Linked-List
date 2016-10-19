$('#enter-button').on('click', function(){
  createCard();
});

$('#bookmark-delete-button').on('click', function(){
  deleteFunction();
});

function createCard(){
  var websiteTitleValue = $('#website-title').val();
  var websiteUrlField = $('#website-url').val();
$('.bookmarks').append('<div class="bookmark-card">' +
  '<h1 class="bookmark-title">' + websiteTitleValue + '</h1>' +
  '<a href="#"><h2 class="bookmark-url">' + websiteUrlField + '</h2></a>' +
  '<input id="bookmark-read-button" type="button" name="Read" value="Read">' +
  '<input id="bookmark-delete-button" type="button" name="Delete" value="Delete">' +
  '</div>'
);
}

function readButton(){
  this.button = $('#bookmark-read-button');
  this.button.toggleClass('.read');
}

function deleteFunction(){
  $('bookmark-card').remove();
  // this.button = $('#bookmark-delete-button');
}
