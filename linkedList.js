$('#enter-button').on('click', function(){
  createCard();
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
});

$('.bookmark-read-button').off('click').on('click', function(){
  $(this).toggleClass("red");
  $(this).parent().toggleClass("background-color");
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

$('#clearReadBookmarks').on('click', function(){
  $('.red').parent().remove();
});
