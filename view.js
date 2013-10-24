$(document).ready(function(){
  
  $('#btn').on('click', function(){
    loc = $('#location').val();
    dir = $('#compass').val();
    zoom = $('#zoom').val();
    angle = $('#angle').val();
    render(loc, dir, zoom, angle);
  })

  $('#editor').on('click', function(){
    console.log('ready!');
    var picturl = picUrl(loc, dir, zoom, angle);
    return launchEditor('image1', picturl);
  })

})