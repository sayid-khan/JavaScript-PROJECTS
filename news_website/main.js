//0e7504bf0db745c59da132db72aa21b1
// putting target="_blank" in href opens the site in another tab
// initialize the news api parameters
console.log("this is my news");
let source = "bbc-news";
// let source = 'the-times-of-india'
let apiKey = "0e7504bf0db745c59da132db72aa21b1";

// grab the news container
let newsAccordian = document.getElementById("newsAccordian");

// create a ajax get request
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,
  true
);
// what to do when response is ready
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    let newsHtml = "";
    articles.forEach(function (element, index) {
      let news = `
                    <div class="card">
                        <div class="card-header" id="heading${index}">
                            <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                            <b>Breaking News ${index + 1}:</b> ${
        element["title"]
      }
                            </button>
                            </h2>
                        </div>
                    
                        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordian">
                            <div class="card-body">${
                              element["content"]
                            }. <a href="${
        element["url"]
      }" target="_blank">Read More Here</a></div>
                        </div>
                    </div>`;
      newsHtml += news;
    });
    newsAccordian.innerHTML = newsHtml;
  } else {
    console.log("some error occured");
  }
};
xhr.send();
