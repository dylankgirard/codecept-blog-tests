# Codecept.js Tests for girard-blog

### Description

This is a basic test suite designed to assure core user flow for my Gatsby blog website. It uses the Codecept.js testing framework for assertions, integrated with Puppeteer (Chrome Driver).

### Running Tests

To see the tests in action, take the following steps:

1. Clone this repository to the directory of your choice

`
git clone git@github.com:dylankgirard/codecept-blog-tests.git
`

2. In order to run the tests, you may need to install several dependencies (Codecept.js and Puppeteer)

`
npm install codeceptjs puppeteer --save
`

3. With these installed, running tests is fairly simple. To run all the tests, execute this command:

`
npx codeceptjs run --step
`

4. Watch as Chrome Driver goes to the pages associated with the tests, and check the command log to see if the tests pass or fail.

### More Info

For more information about this testing technology, check out [Codeceptjs.io](https://codecept.io/).

Happy testing!