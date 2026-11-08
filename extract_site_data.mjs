import fs from 'fs';

// Let's inspect membership
const membershipHtml = fs.readFileSync('scraped_pages/membership.html', 'utf8');
console.log('--- MEMBERSHIP CONTENT ---');
const memSnippet = membershipHtml.substring(membershipHtml.indexOf('class="ina-sec'), membershipHtml.lastIndexOf('</section>') + 10);
console.log(memSnippet ? memSnippet.substring(0, 1500) : 'Not found by class');

// Let's inspect activities
const activitiesHtml = fs.readFileSync('scraped_pages/activities.html', 'utf8');
console.log('--- ACTIVITIES CONTENT ---');
const actSnippet = activitiesHtml.substring(activitiesHtml.indexOf('What INAS UK has done') - 100, activitiesHtml.indexOf('What INAS UK has done') + 2000);
console.log(actSnippet);

// Let's inspect news
const newsHtml = fs.readFileSync('scraped_pages/news.html', 'utf8');
console.log('--- NEWS CONTENT ---');
const newsSnippet = newsHtml.substring(newsHtml.indexOf('Upcoming events &amp; programmes') - 100, newsHtml.indexOf('Upcoming events &amp; programmes') + 2000);
console.log(newsSnippet);
