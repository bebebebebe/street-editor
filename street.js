
  var base = "http://maps.googleapis.com/maps/api/streetview?";
  var size = "500x500";



function render(loc, dir, zoom, angle) {

  var params = "size=" + size + "&location=" + loc + "&heading=" + dir + "&fov=" + zoom + "&pitch=" + angle + "&sensor=false";

  $('#street').html('<img src="' + base + params + '">');
  console.log(loc);
}

