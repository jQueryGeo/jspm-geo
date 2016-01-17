import $ from 'jquery';
import geo from 'jquery.geo';
//import mousewheel from 'jquery.mousewheel';
//import geomap from 'jquery.geo';

$( '#map' ).html( $.geo.WKT.stringify( { type: 'Point', coordinates: [ 23, 48 ] } ) );
//$( '#map' ).geomap();
