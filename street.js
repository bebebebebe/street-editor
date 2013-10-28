;(function(exports){

  var featherEditor = new Aviary.Feather({
   apiKey: 'w6ot2snvbtcyg31v',
   apiVersion: 3,
   theme: 'light', // 'light' or 'dark'
   tools: 'all',//'crop,text,colorsplash,draw',
   appendTo: 'street',
   onSave: function(imageID, newURL) {
       var img = document.getElementById(imageID);
       img.src = newURL;
   },
   postUrl: '',
   onError: function(errorObj) {
       alert(errorObj.message);
   }
  });

  exports.launchEditor = function(id, src) {
    featherEditor.launch({
      image: id,
      url: src
    });
    return false;
  }

  var base = "http://maps.googleapis.com/maps/api/streetview?";
  var size = "500x500";
  //var params = "size=" + size + "&location=" + loc + "&heading=" + dir + "&fov=" + zoom + "&pitch=" + angle + "&sensor=false";

  exports.render = function(loc, dir, zoom, angle) {
    var params = "size=" + size + "&location=" + loc + "&heading=" + dir + "&fov=" + zoom + "&pitch=" + angle + "&sensor=false";
    $('#street').html('<img id="image1" src="' + base + params + '">');
  }

  exports.picUrl = function(loc, dir, zoom, angle) {
    var params = "size=" + size + "&location=" + loc + "&heading=" + dir + "&fov=" + zoom + "&pitch=" + angle + "&sensor=false";
    return base + params;
  }

})(this);