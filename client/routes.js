Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/school', function () {
  this.render('school_listView');
});

Router.route('/school/:_id', function () {
  Session.set('school_id',this.params._id)
  this.render('post_listView');
});
