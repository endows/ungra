Meteor.publish('school', function() {
  return School.find();
})