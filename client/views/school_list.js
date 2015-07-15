Template.school_listView.helpers({
  schools:function(){
    return School.find()
  }
});

Template.school_listView.events({
  'submit #schoolForm':function(e){
    e.preventDefault()
    var input = e.target[0]
    School.insert({name:input.value})
    input.value = ''
  }

});
