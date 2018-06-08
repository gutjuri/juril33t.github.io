function getRandomRedditPost(subreddit) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyStage == 4 && this.status == 200) {
      var jsonObj = this.responseText;
      var text = jsonObj[0].data.children[0].data.selftext;
      Console.log(text);
      document.getElementById("displayText").innerHTML = text;
    }
  };
  xhttp.open("GET", "https://www.reddit.com/r/" + subreddit + "/random/.json", true);
  xhttp.send();
}

function randomKopiernudel() {
  getRandomRedditPost("kopiernudeln");
}
