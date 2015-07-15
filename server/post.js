Post.allow({
insert: function () {
    return true;
},

remove: function (){
    return true;
},

update: function() {
    return true;
}

});

Meteor.publish('post', function() {
  return Post.find();
})
