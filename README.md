# AngularPrime

This program calculates and displays prime numbers up to a user specified value.
The algorithm is implemented using the [Sieve of Eratosthenes](http://en.wikipedia.org/wiki/Sieve_of_Eratosthenes).

View the demo [here](http://angular-prime.herokuapp.com/app/index.html)

### Stack
* Backend: [Node.js](http://nodejs.org/) is used as a simple web server with code from [angular-phonecat-tutorial](https://github.com/IgorMinar/angular-phonecat-tutorial/blob/master/scripts/web-server.js)
* [AngularJS](http://www.angularjs.org/) on the client
* CSS based on [Twitter's bootstrap](http://twitter.github.com/bootstrap/)
* CSS3 animations from [Animate.css](http://daneden.me/animate/)

### Setup Instructions

* Install [Node.js](http://nodejs.org/)
* Install Karma

    ```
    npm install -g karma
    ```

    Note: For Windows 64 bit, the default Karma Chrome launcher configuration points to the wrong location for Chrome.
    Fix it by modifying the following file (check your environment variable for value of PATH)

    ```
    %PATH%\node_modules\karma\lib\launchers\Chrome.js
    ```

    Original line

    ```
    win32: process.env.LOCALAPPDATA + '\\Google\\Chrome\\Application\\chrome.exe'
    ```

    Change it to

    ```
    win32: process.env.ProgramFiles + ' (x86)\\Google\\Chrome\\Application\\chrome.exe'
    ```

* Start server (from project root)

    ```
    node scripts\web-server.js
    ```

* Browse to [http://localhost:8000/app/index.html](http://localhost:8000/app/index.html)

### <a name="rununit"/>Run Unit Tests

* Start Karma with unit test config (from project root)

    ```
    scripts\test.bat
    ```

    This starts karma with [karma.conf.js](config/karma.conf.js).
    It launches a Chrome browser and runs the tests there, the browser remains open.    
    It will watch for any changes to files in the files array and automatically re-run the unit tests.
    Status of the tests (pass/fail and accompanying errors) will be displayed in the console used to launch the tests.

### Debug Unit Tests    

* Follow instructions to [Run Unit Tests](#rununit)

* Insert the following line in any test code or production code that is run as part of a test


    ```
     debugger;
    ```

* In the launched Chrome browser, click on the DEBUG button at the top-right corner, this will open a new empty tab

* F12 open Chrome developer tools with Console tab open

* F5 to run the tests, it should stop at the breakpoint

* Use Chrome developer tools to step through the code, you can also hover over variables to inspect their values


### <a name="rune2e"/>Run End To End Tests

* Start Karma with e2e test config (from project root)

    ```
    scripts\e2e-test.bat
    ```

    This starts karma with [karma-e2e.conf.js](config/karma-e2e.conf.js)
    A Chrome browser will be launched to run the end to end tests, then closed when tests are done.
    Status of the tests (pass/fail and accompanying errors) will be displayed in the console used to launch the tests.

### Debug End To End Tests

* Insert the following line in any end to end test code


    ```
     pause();
    ```

* Follow instructions to [Run End To End Tests](#rune2e)

* Chrome browser will be launched to run tests, and when breakpoint is hit, will display the app at that point in time

* Click resume in the browser to continue the test
