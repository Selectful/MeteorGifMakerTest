Meteor.submit = function () {
    var ms = document.getElementById('milliseconds').value;
    ms = ms ? ms / 1000 : .5; //.5 second default value
    var $displayGIF = document.getElementById('displayGIF');
    var images = [];
    Images.find().forEach(function (file) {
        images.push(file.url());  //push everything from Images collection to images array
    });

    //https://github.com/yahoo/gifshot
    gifshot.createGIF({ 'images': images, 'interval': ms }, function (obj) {
        if (!obj.error) {
            var $a = document.createElement('a');
            $a.href = obj.image; 
            $a.download = true; //allow downloadable 'ahref' of image
            animatedImage = document.createElement('img'); 
            animatedImage.src = obj.image; //create the gif itself
            $a.append(animatedImage);
            $displayGIF.append($a); //add image to ahref then add ahref to displayGIF
            setTimeout(function(){ window.scrollTo(0,document.body.scrollHeight); }, 400); //show full image at bottom
        } else {
            console.log("Gifshot Error!");
        }
    });
}