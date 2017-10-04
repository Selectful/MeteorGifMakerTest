
Meteor.saveFile = function (event) {
    FS.Utility.eachFile(event, function (file) { //multiple images selectable?
        console.log('file: ', file)
        var newFile = new FS.File(file);
        Images.insert(newFile, function (error, result) {
            if (error) {
                console.log("Error uploading image");
            } else {
                var numOfImages = Meteor.count();
                if (!!event.currentTarget.labels) {
                    event.currentTarget.labels[numOfImages - 1].innerHTML = file.name;
                }
                else { //handle drag drop
                    var $labelImages = document.getElementsByClassName("label-image");
                    $labelImages[numOfImages - 1].innerHTML = file.name;
                }
                console.log("successful upload");
            }
        });
    });
}

Meteor.count = function () { //how many images are in collection
    return Images.find().count();
}

Meteor.clearImages = function (event) { //remove all images in collection
    Images.find().forEach(function (file) {
        file.remove();
    });
}

Meteor.handleClear = function (event) {
    Meteor.clearImages(); // Empties Image Collection
    var displayNode = document.getElementById('displayGIF')
    while (displayNode.hasChildNodes()) { //set displayGIF to empty
        displayNode.removeChild(displayNode.lastChild);
    }
    var $labelImages = document.getElementsByClassName('label-image'); //reset file name to original
    for (var i = 0; i < $labelImages.length; i++) {
        $labelImages[i].innerHTML = '<strong><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg> Choose a file&hellip;</strong>'
    }

}
