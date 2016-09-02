Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('/', {
  name: 'dashboard'
});

Router.route('/recipeList', {
  name: 'recipeList'
});
Router.route('/mealList', {
  name: 'mealList'
});
