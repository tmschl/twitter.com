// gets tweets and display them
var draw = function(){
  //clear the tweet page
  $newTweets = clear();

  //
  for(var i = window.streams.home.length - 1; i >= 0; i-- ){
    tweet = window.streams.home[i]
    var timePosted = moment(tweet.created_at).fromNow();
    var id = tweet.user;
    var tweetHtml = tweetToHtml();
    tweetHtml.click(function (event){
    	var element = $(event.target);
    	var username = element.attr('data-user');
    	userTimelines(username);
    });
    $newTweets.append(tweetHtml);
  }
}

var tweetToHtml = function () {
  var timePosted = moment(tweet.created_at).fromNow();
  var converted = $("<div id='tweet-wrapper'><span id='avatar'></span><a href='#' id='user-style' data-user='" + tweet.user + "'>"+ tweet.user + "  </a>" + ": " + "<span id='msg-style'>" + tweet.message + "<br><div id='time-sent'>"+ timePosted +'</div>'+ "</div> <br>")
  return converted;
}

var drawForUser = function(userStream){

  //clear the tweet page
  $newTweets = clear();

  for(var i = userStream.length - 1; i >= 0; i-- ){
    tweet = userStream[i]
    var timePosted = moment(tweet.created_at).fromNow();
    var tweetHtml = tweetToHtml();
    $newTweets.append(tweetHtml);    
  }
}

var userTimelines = function(userId) {
	clear();
	var userTweets = window.streams.users[userId]
	drawForUser(userTweets);
}

var clear = function() {
	var clearTweets = $("#newTweets");
	clearTweets.html("");
  return clearTweets;
}

var onReady = function() {
	$('#more-tweets').click(draw);
	$('#clear-tweets').click(clear);
	$('a').click(userTimelines);
	setTimeout(draw, 500);
};

$('document').ready(onReady);