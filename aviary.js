
 
 var featherEditor = new Aviary.Feather({
     apiKey: 'w6ot2snvbtcyg31v',
     apiVersion: 3,
     theme: 'light', // 'light' or 'dark'
     tools: 'crop,text,colorsplash,draw',
     appendTo: 'injection_site',
     onSave: function(imageID, newURL) {
         var img = document.getElementById(imageID);
         img.src = newURL;
     },
     onError: function(errorObj) {
         alert(errorObj.message);
     }
 });


function launchEditor(id, src) {
  featherEditor.launch({
    image: id,
    url: src
  });
  return false;
}