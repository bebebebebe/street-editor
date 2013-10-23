$(document).ready(function(){
  $('#btn').on('click', function(){
    var loc = $('#location').val();
    var dir = $('#compass').val();
    var zoom = $('#zoom').val();
    var angle = $('#angle').val();
    render(loc, dir, zoom, angle);
  })

})