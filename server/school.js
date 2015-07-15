School.allow({
  insert: function() {
    return true;
  },

  remove: function() {
    return true;
  },

  update: function() {
    return true;
  }
})

Meteor.publish('school', function() {
  return School.find();
})
