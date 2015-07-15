Meteor.publish('post', function() {
  return Post.find();
})