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
  countUnreadCards();
});

$('.bookmark-read-button').off('click').on('click', function(){
  $(this).toggleClass("red");
  $(this).parent().toggleClass("background-color");
  countReadCards();
  countUnreadCards();
});
}

$('#website-url').on('input', function(){
  if(($('#website-title').val() !== "") && ($('#website-url').val() !== "")){
    document.getElementById('enter-button').disabled = false;
  }
  else{
    document.getElementById('enter-button').disabled = true;
  }
});

$('#website-title').on('input', function(){
  if(($('#website-title').val() !== "") && ($('#website-url').val() !== "")){
    document.getElementById('enter-button').disabled = false;
  }
  else{
    document.getElementById('enter-button').disabled = true;
  }
});

$('#clear-read-bookmarks').on('click', function(){
  $('.red').parent().remove();
  countBookmarkCards();
  countUnreadCards();
  countReadCards();
});

function countBookmarkCards() {
  var bookmarkCount = $('.bookmark-card').length;
  $('.bookmark-card-count').html('<p>' + bookmarkCount + '</p>');
}

function countReadCards() {
  var readCount = $('.red').length;
  $('.bookmark-read-count').html('<p>' + readCount + '</p>');
}

function countUnreadCards() {
  var unreadCount = $('.bookmark-card').length - $('.red').length;
  $('.bookmark-unread-count').html('<p>' + unreadCount + '</p>');
}
