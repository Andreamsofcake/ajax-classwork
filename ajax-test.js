var url =  "https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=98a80bf27f25bb1381e9bea26b6282e5&per_page=500&format=json&nojsoncallback=1";
jQuery.ajax(url)
.then(function(data, textStatus, jqXHR) {;
  //convert rsp to something script can read?
  //$(data).appendTo('body');
  data.photos.photo.forEach(function(photo){
    var photoUrl = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg';
    var img = document.createElement('img');
    console.log(photoUrl);
    var flickrPhoto = $(img).attr('src', photoUrl);
    $(flickrPhoto).appendTo('body');
  });
 console.log(data);
})
.fail(function(jqXHR, textStatus, errorThrown) {
 console.log("Status: %s", textStatus);
 console.log(errorThrown);
});