Feature('Go To Debugging Blog Post Page');

Scenario('open the debugging node.js post page', ({ I }) => {
	I.amOnPage('https://girard-blog.netlify.app/');
	I.click('Blog');
	I.click('Debugging Node.js', '.blog-module--posts--2zbPx');
	I.see('Debugging Node.js', 'h1');
});
