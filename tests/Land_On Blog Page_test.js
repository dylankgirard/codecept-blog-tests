Feature('Go To Blog Page');

Scenario('Open the blog page', ({ I }) => {
	I.amOnPage('https://girard-blog.netlify.app/');
	I.click('Blog');
	I.see('Blog', 'h1');
});
