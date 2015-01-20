# QueryIt

QueryIt is a modular Node.js powered API to simplify the fetching of data.  It's meant to be extremely easy to use, with only **ONE** parameter required to get your data.  Thanks to Natural Language Processing by [NaturalNode](https://github.com/NaturalNode/natural), your queries will look more like English than anything else.

Here are some examples of how simple your queries can be:

  - 'Spacex news' will return a list of articles from USA Today
  - 'Reddit front page' will return exactly that, the front page of reddit
  - 'Nutrition info for an egg' will ask wolfram alpha, which provides a very detailed nutrition fact output
  - 'How is FB stock doing?' will output information from yahoo finance (realtime price!)
  - 'Taylor Swift videos' will give you a youtube listing of Taylor Swift videos
  - 'Music by Jayz' will get a spotify listing for what they have by Jayz

##Installing on Ubuntu/Debian

    apt-get update
    apt-get install -y build-essential git
    git clone https://github.com/PennAppsWinter2015/QueryIt.git
    cd QueryIt
    npm install
You will then have to create a keys.js to add your api keys.

    cp keys.js.sample keys.js

Edit keys.js with your preferred editor and add your api keys.  Disable any apis you don't want by deleting them from /apis/ or placing a dot at the start of the filename.  Only .js files will be loaded from the directory.  Run ``node app.js`` to start the server.  Navigating to http://localhost:3000 should present the web-ui where you can test out your install and see how to build queries in a few different languages.

##Todo
  - Add more to the readme
  - Automatic tests
  - Move repo out of 'PennAppsWinter2015' because that looks dumb
  - Do something with mongodb
  - Better contributing guide