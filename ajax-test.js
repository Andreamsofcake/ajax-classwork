var url =  "https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=98a80bf27f25bb1381e9bea26b6282e5&per_page=500&format=json&nojsoncallback=1";
jQuery.ajax(url)
.then(function(data, textStatus, jqXHR) {
  data.photos.photo.forEach(function(photo){
    var photoUrl = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg';
    var img = document.createElement('img');
    var flickrPhoto = $(img)
    .attr({
      'src': photoUrl,
      'height': '200'
    });
    $(flickrPhoto).appendTo('body');
  });
})
.fail(function(jqXHR, textStatus, errorThrown) {h
 console.log("Status: %s", textStatus);
 console.log(errorThrown);
});