Template.body.events({
    'dropped #dropArea': Meteor.saveFile
  });

Template.gifmaker.events({
    'change input': Meteor.saveFile
});

Template.submit.helpers({
    'disabled': function() { 
      return (Meteor.count() < 1);
    }
  });

Template.submit.events({
    'click': Meteor.submit 
    
})

Template.clearall.events({
    'click': Meteor.handleClear
});

Template.clearall.helpers({
    'disabled': function() {
        return (Meteor.count() < 1);
    }
});
