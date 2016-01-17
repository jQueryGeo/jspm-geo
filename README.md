# jspm-geo

To use jQuery Geo with jspm, you must install jQuery Geo as a global format dependency after installing jquery to your project:

    $ jspm install jquery
    $ jspm install npm:jquery.geo -o "{format: 'global'}"

This will properly add jquery.geo into your app's package.json file. If you are starting anew, the initial commands would look like this:

    $ cd my-project
    $ npm install jspm --save-dev
    $ jspm init
    $ jspm install jquery
    $ jspm install npm:jquery.geo -o "{format: 'global'}"

Your resulting package.json will be similar to:

    {
      "jspm": {
        "dependencies": {
          "jquery": "npm:jquery@^2.2.0",
          "jquery.geo": "npm:jquery.geo@^1.0.0-b3.2"
        },
        "devDependencies": {
          "babel": "npm:babel-core@^5.8.24",
          "babel-runtime": "npm:babel-runtime@^5.8.24",
          "core-js": "npm:core-js@^1.1.4"
        },
        "overrides": {
          "npm:jquery.geo@1.0.0-b3.2": {
            "format": "global"
          }
        }
      }
    }

In your app's main.js file, import jQuery as jQuery or $, then import geo from jquery.geo:

    import jQuery from 'jquery';
    import geo from 'jquery.geo';

Now you can use jQuery Geo's geomap plugin or geo core library as described in our docs: http://docs.jquerygeo.com/

HTML:

    <!doctype html>
    <html>
      <head>
        <title>Hi jspm</title>
        <style type="text/css">
          span {
            display: block;
          }
        </style>
      </head>
      <body>
        <h1>JSPM!</h1>
        <span id="coord">coord</span>
        <span id="proj">proj</span>
        <span id="wkt">wkt</span>

        <div id="map" style="width: 1024px; height: 768px;"></div>

        <script src="jspm_packages/system.js"></script>
        <script src="config.js"></script>
        <script>
          System.import( 'lib/main' );
        </script>
      </body>
    </html>

JavaScript (lib/main.js):

    import $ from 'jquery';
    import geo from 'jquery.geo';

    $( '#map' ).geomap( {
      zoom: 4,
      move: function( e, geo ) {
        $( '#coord' ).text( geo.coordinates );
        var proj = $.geo.proj.fromGeodetic( geo.coordinates );
        $( '#proj' ).text( proj );
        $( '#wkt' ).text( $.geo.WKT.stringify( {
          type: 'Point',
          coordinates: proj
        } ) );
      }
    } );

