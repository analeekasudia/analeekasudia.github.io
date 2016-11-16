// Sort by date
// Filter by pub
// Make search work
// Make popup/other summary

function diggToArticle(diggArticle) {
	var tagNames = diggArticle.content.tags.map(function(tag) {
		return tag.display
	})
	var article = {}
	article['headline'] = diggArticle.content.title_alt;
	article['img'] = diggArticle.content.media.images[3].url;
	article['score'] = diggArticle.diggs.count;
	article['summary'] = diggArticle.content.description;
	article['tag'] = tagNames.join(", ");
	article['url'] = diggArticle.content.original_url;
	return article;
}

function mashableToArticle(mashableArticle) {
	var article = {}
	article['headline'] = mashableArticle.title;
	article['img'] = mashableArticle.responsive_images[3].image;
	article['score'] = mashableArticle.shares.total;
	article['summary'] = mashableArticle.content.plain;
	article['tag'] = mashableArticle.channel_label;
	article['url'] = mashableArticle.link;
	return article;
}

function redditToArticle(redditArticle) {
	var article = {}
	article['headline'] = redditArticle.data.title;
	article['img'] = redditArticle.data.thumbnail;
	article['score'] = redditArticle.data.score;
	// article['summary'] = ; -- where is it??
	article['tag'] = redditArticle.data.subreddit
	article['url'] = redditArticle.data.url;
	return article;
}

function diggResultsToArray(diggResults) {
	return diggResults.data.feed.map(diggToArticle);
}

function mashableResultsToArray(mashableResults) {
	return mashableResults.new.map(mashableToArticle);
}

function redditResultsToArray(redditResults) {
	return redditResults.data.children.map(redditToArticle);
}

// format one article
function articleToHTML(article) {
	return '<article><img src="' + article.img + '" /><span><h3><a href="' + article.url + '">' + article.headline + '</a></h3><strong>' + article.tag + '</strong></span><em>' + article.score + '</em></article>'
}

$(document).ready(function () {
	function processArticle(transformer) {
		return function(result) {
			console.log("GOT RESULT: ", result);
			var articles = transformer(result);
			// Handlebars ??
			var htmlArray = articles.map(articleToHTML);
			var html = htmlArray.join(" ");
			var container = document.getElementById('main');
			container.innerHTML = container.innerHTML + html;
		}
	}
	function getArticles() {
		var diggUrl = 'https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json';
		var mashableUrl = 'https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json';
		var redditUrl = 'https://accesscontrolalloworiginall.herokuapp.com/https://www.reddit.com/top.json';
		$.get(diggUrl, processArticle(diggResultsToArray));
		$.get(mashableUrl, processArticle(mashableResultsToArray));
		$.get(redditUrl, processArticle(redditResultsToArray));
	}
	getArticles();
});

// var mashableUrl = 'https://newsapi.org/v1/articles?source=mashable&sortBy=top&apiKey=' + apiKey;
// var apiKey = '43b1af648f3248eba540ad8a38319837';
