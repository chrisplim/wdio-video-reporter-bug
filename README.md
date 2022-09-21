# wdio-video-reporter-bug
This repo is for reproducing the bug where `browser.getMetrics` is not a function when using the wdio-video-reporter alongside the devtools service.
```
browser.getMetrics is not a function
```

https://github.com/webdriverio/webdriverio/issues/7778#issuecomment-985598891

# Bug Reproduction Steps
1. Setup and run the test, to see the test passes
```
git clone git@github.com:chrisplim/wdio-video-reporter-bug.git
cd wdio-video-reporter-bug
npm install
npm run wdio
```

2. Uncomment the code in `wdio.conf.js` between the `UNCOMMENT_ME` blocks and run the test again to see the error message.
```
# uncomment code in wdio.conf.js between the UNCOMMENT_ME blocks
npm run wdio
```


## Notes
I ran these steps to setup the repo.
```
$ npm init wdio .

=========================
WDIO Configuration Helper
=========================

? Where is your automation backend located? On my local machine
? Which framework do you want to use? mocha
? Do you want to use a compiler? No!
? Where are your test specs located? ./test/specs/**/*.js
? Do you want WebdriverIO to autogenerate some test files? No
? Which reporter do you want to use? spec
? Do you want to add a plugin to your test setup? 
? Do you want to add a service to your test setup? chromedriver
? What is the base url? http://example.com
? Do you want me to run `npm install` (Y/n) Y


$ npm install -D @wdio/devtools-service
```

Then I created my example test at `test/specs/example.js`

