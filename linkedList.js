$('#enter-button').on('click', function(){
  createCard();
  countBookmarkCards();
  countUnreadCards();
});



function createCard(){
var websiteTitleValue = $('#website-title').val();
var websiteUrlField = $('#website-url').val();

$('.bookmarks').append('<div class="bookmark-card">' +
  '<h1 class="bookmark-title">' + websiteTitleValue + '</h1>' +
  '<a href="#"><h2 class="bookmark-url">' + websiteUrlField + '</h2></a>' +
  '<button class="bookmark-read-button" type="button" name="Read">Read</button>' +
  '<button class="bookmark-delete-button" type="button" name="Delete">Delete</button>' +
  '</div>'
);

$('.bookmark-delete-button').on('click', function(){
  $(this).parent().remove();
  countBookmarkCards();
});

$('.bookmark-read-button').off('click').on('click', function(){
  $(this).toggleClass("red");
  $(this).parent().toggleClass("background-color");
  countReadCards();
  countUnreadCards();
});
}

function countBookmarkCards() {
  var bookmarkCount = $('.bookmark-card').length;
  $('.bookmark-card-count').html('<p>' + bookmarkCount + '</p>');
}

function countReadCards() {
  return $('.red').length;
}

function countUnreadCards() {
  console.log($('.bookmark-card').length - $('.red').length);
}
