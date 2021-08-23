Feature('Go To About Page');

Scenario('open the about page', ({ I }) => {
	I.amOnPage('https://girard-blog.netlify.app/');
	I.click('About');
	I.see('About Me', 'h1');
});
