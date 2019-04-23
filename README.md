# Rss-feed-dynamic-news-animation
Fetching news from any RSS feed and to be displayed as a animated news content with headline and description along with image fetched from the RSS feed.

The HTML file is created using Animate CC where a basic design for the animation is built in HTML format.

Further, any kind of animation can be used such that it satisfy the need(in this case, display of dynamic news on LED display boards).

Using the api provided by https://rss2json.com/ and using it in rss-json.js , the RSS feed is converted to JSON and used by first.js for displaying the dynamic content updated in RSS as soon as a new news is available.

I've used random function in rss-feed.js to fetch the random news (1 out of 10 available in the RSS used)

This project can be extended to all sort of dynamic data display using RSS feed.
