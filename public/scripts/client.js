/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const renderTweets = (tweets) => {
  tweets.forEach((tweet) => {
    let $tweet = createTweetElement(tweet);
    $("#tweets-container").prepend($tweet);
  });
};

const createTweetElement = function (tweet) {

  const escape = function (str) {
    let div = document.createElement("div" );
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const safeHTML = `<p>${escape(tweet.content.text)}</p>`;

  let $article = `
              <section class="new-section">
                <article class="article.tweet">
                        <header class="article-header"> 
                          <div class="faceName">
                            <img width='70' src=${tweet.user.avatars}>
                            <h3 class="nam"> ${tweet.user.name}</h3>
                          </div>
                          <p>${tweet.user.handle}</p>
                        </header>
                        <div class="new-text">
                            ${safeHTML}
                        </div>
                        <footer class="footer">
                            <p>${timeago.format(tweet.created_at)}</p>
                            <div id="treeicon">
                              <i class="fa-solid fa-flag"></i>
                              <i class="fa-solid fa-retweet"></i>
                              <i class="fa-solid fa-heart"></i>
                            </div>
                        </footer>
                </article>
              </section>
              `;
  return $article;
};

$(document).ready(function () {
  const loadtweets = () => {
    $.ajax("http://localhost:8080/tweets", { method: "GET" }).then(function (
      dataUser
    ) {
      $("#tweets-container").append(renderTweets(dataUser));
    });
  };

  $("#formtotype").on("submit", function (event) {
    event.preventDefault(); //supost not submit and not reload the page

    if ($(this).find("textarea").val().length < 1) {
      alert("no content to submit!");
      return;
    }
    if ($(this).find("textarea").val().length > 140) {
      alert("maximum character exceeded!");
      return;
    }
    $.ajax({
      method: "POST",
      url: "http://localhost:8080/tweets",
      type: "application/json",
      data: $(this).serialize(),
      success: function () {
        $("textarea").val("");
        $.get("http://localhost:8080/tweets", (data) => {
          const newTweet = [data.slice(-1).pop()];
          renderTweets(newTweet);
        });
      },
      error: (error) => {
        console.error(error);
      },
    });
  });
  loadtweets();
});


// <script>alert('TESTEEEEEEEEEEE');</script>