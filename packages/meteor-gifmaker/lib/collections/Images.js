//from https://github.com/CollectionFS/Meteor-CollectionFS

Images = new FS.Collection('Images', {
    stores: [new FS.Store.GridFS('Images')],
    filter: {
        maxSize: 5000000, //in bytes = 5MB
        allow: {
            contentTypes: ['image/*'] //allow only images in this FS.Collection
        },
        onInvalid: function (message) {
            console.log(message);
        }
    }
});

Images.allow({
    insert: function () {
        // add custom authentication code here
        return true;
    }
});

