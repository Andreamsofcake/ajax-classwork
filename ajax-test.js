console.log('working');
jQuery.ajax({
  url: "https://raw.githubusercontent.com/wbyoung/jsi-gamelib/master/package.json",
  success: function(contents) {
    console.log(contents);
    console.log('Success')
  },
  error:function() {
   console.log("FUCK!");
    }
  });