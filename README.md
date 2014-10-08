Testing via Jasmine
===================

Hello! This is a very rough, for-archive-purposes-only upload of my Jasmine presentation to Github.

Points of interest
==================


jasmine-testing-presentation.pdf 
--------------------------------

This is the slide deck I used for the presentation. Please note that I don't take the topic or the slides too seriously. Given this, you shouldn't take my slides too seriously either. 

The slides are not a complete record of my notes or what I said on each slide, though you can get the gist of what I meant in most cases. A notable exception is the slide on test builders--I don't explain specifically what I didn't like about each example, though you can rest assured I did so during the presentation itself.

demo 1
------

This demo is a very basic introduction to unit testing via jasmine. I have uploaded only the completed ("baked") demo. Running SpecRunner.html should show all green passing tests without any additional work. Attempting to run the code on generate-username.html should fail (the point of the unit testing demo being that unit testing helps you write great code, but it doesn't really help you ensure your app works).

The demo script found at ./demo-scripts assumes an "empty slate"--in other words, the demo script was useful to me, but won't be to you, probably.

demo 2
------

This demo is a basic introduction to selenium-webdriver, asynchronous jasmine (i.e. using done()), and integration testing (the point being that integration tests allow you to write garbage code, but grant you confidence that your app works). I didn't bother to set up a proper package.json and I won't bother now, but you can ~probably/maybe run this demo successfully by doing:
`npm install selenium-webdriver`
`npm install jasmine-node #possibly run this with -g?`

You also have to have a Selenium Server running (so install java, download Selenium Server, and have it running).

The demo script found at ./demo-scripts walks through a node REPL session to show what Selenium commands look like, then (again) assumes an "empty slate". Useful for me. Hardcoded links to file:-style URLs will of course, be broken.

questionnaire.rtf
-----------------

I didn't use this JavaScript testing questionnaire for the presentation, but I think it is good (if long and wordy), and can be used as a group conversation-starter.

jstesttalks.html
----------------

This is a linkdump of all the JavaScript testing videos I found online. There are a lot of them, covering a wide variety of topics within the space. Some of the presentations are good/great.