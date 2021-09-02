Feature('Submit A Message');

Scenario('go to the Contact page and submit a message', ({ I }) => {
	I.amOnPage('https://girard-blog.netlify.app/');
	I.click('Contact');
	I.fillField('email', 'miles@davis.com');
	I.fillField('name', 'Miles');
	I.fillField('message', 'Do you know who I am?');
	I.click('submit');
	I.see('Thank you!', 'h1');
});
