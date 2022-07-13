/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
            },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const renderTweets = function(tweets) {
  let $output = ''

  for (const post of tweets) {
    $output += createTweetElement(post)
  }
  return  $output
}

const createTweetElement = function(tweet) {
  let $article = `
              <section class="new-section">
                <article class="article.tweet">
                        <header class="article-header"> 
                          <div class="faceName">
                            <img src=${tweet.user.avatars}>
                            <h3 class="nam"> ${tweet.user.name}</h3>
                          </div>
                          <p>${tweet.user.handle}</p>
                        </header>
                        <div>
                          <textnew class="new-text">
                            ${tweet.content.text}
                          </textnew>
                        </div>
                        <footer class="footer">
                            <p>${tweet.created_at}</p>
                            <div id="treeicon">
                              <i class="fa-solid fa-flag"></i>
                              <i class="fa-solid fa-retweet"></i>
                              <i class="fa-solid fa-heart"></i>
                            </div>
                        </footer>
                </article>
              </section>
              `
  return $article;
}

$(document).ready(function() { 
$('#tweets-container').append(renderTweets(data))
});


