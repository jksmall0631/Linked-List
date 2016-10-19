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
  // '<input class="bookmark-read-button" type="button" name="Read" value="Read">' +
  '<button class="bookmark-delete-button" type="button" name="Delete">Delete</button>' +
  // '<input class="bookmark-delete-button" type="button" name="Delete" value="Delete">' +
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




// function readButton(){
//   this.button = $('.bookmark-read-button');
//   this.button.toggleClass('.read');
// }

// deleteFunction();
// function deleteFunction(){
  // this.button = $('#bookmark-delete-button');

  // $('.bookmarks').on('click',$('.bookmark-delete-button'), function(){
  //   deleteFunction();
  // });

  // $('.bookmark-delete-button').on('click', function(){
  //   deleteFunction();
  // });
