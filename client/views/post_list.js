Template.post_listView.helpers({
  posts:function(){
    return Post.find({school_id:Session.get('school_id')})
  },
  school:function(){
    return School.findOne(Session.get('school_id'))
  }
  // posts:[{body:'hello'},{body:'hello2'}]
});

Template.post_listView.events({
  'submit #postForm':function(e){
    e.preventDefault()
    var input = e.target[0]
    Post.insert({body:input.value,school_id:Session.get('school_id')})
    input.value = ''
  }

});

Meteor.subscribe('posts')
Meteor.subscribe('schools')
