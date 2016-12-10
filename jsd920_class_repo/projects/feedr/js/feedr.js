$(document).ready(function () {

	function getArticles() {
		var apiKey = '43b1af648f3248eba540ad8a38319837';

		// Instead of saving each API URL as a variable, do one 'source' variable of a JSON (data).
		var sources = {
			"Business": {
				"Economist": "the-economist",
				"Financial Times": "financial-times",
				"Fortune": "fortune",
				"Wall Street Journal": "the-wall-street-journal"
			},
			"General": {
				"Assocated Press": "associated-press",
				"GoogleNews": "google-news",
				"GuardianUK": "the-guardian-uk",
				"Hindu": "the-hindu",
				"Independent": "independent",
				"Newsweek": "newsweek",
				"NewYorkMagazine": "new-york-magazine",
				"NewYorkTimes": "the-new-york-times",
				"Reuters": "reuters",
				"Time": "time",
				"USA Today": "usa-today",
				"Washington Post": "the-washington-post"
			},
			"Science": {
				"National Geographic": "national-geographic",
				"New Scientist": "new-scientist"
			},
			"Sports": {
				"BBC Sport": "bbc-sport",
				"ESPN": "espn",
				"Football Italia": "football-italia",
				"FourFourTwo": "four-four-two",
				"NFL News": "nfl-news",
				"Sky Sports News": "sky-sports-news",
				"TalkSport": "talksport"
			},
			"Technology": {
				"Ars Technica": "ars-technica",
				"Hacker News": "hacker-news",
				"Recode": "recode",
				"Next Web": "the-next-web",
				"Verge": "the-verge"
			}
		} // end sources
	} // end getArticles

}