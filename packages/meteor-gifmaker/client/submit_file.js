Meteor.submit = function () {
    var ms = document.getElementById('milliseconds').value;
    ms = ms ? ms / 1000 : 1;

    var $displayGIF = document.getElementById('displayGIF');
   
    var images = [];
    Images.find().forEach(function (file) {
        images.push(file.url());
    });

    //https://github.com/yahoo/gifshot
    gifshot.createGIF({ 'images': images, 'interval': ms }, function (obj) {
        if (!obj.error) {
            var image = obj.image;
            animatedImage = document.createElement('img');
            animatedImage.src = image;
            $displayGIF.prepend(animatedImage)
        } else {
            console.log("Gifshot Error!");
        }
    });
}