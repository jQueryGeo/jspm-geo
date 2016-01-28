import $ from 'jquery';
import geomap from 'jquery.geo';

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
