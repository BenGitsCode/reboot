import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      id: 'qloud',
      title: 'Qloud File Storage',
      type: 'Full Stack',
      image: 'http://bengitscode.com/img/portfolio/qloud.png',
      description: 'Full Stack Applicationusing Javascript and jQuery on the Front End. Back End API built with AWS S3, materialized paths, Node.js Express with a MongoDB and Mongoose database.'
    }, {
      id: 'movie-faves',
      title: 'Favorite Movies',
      type: 'Full Stack',
      image: 'http://bengitscode.com/img/portfolio/movie-faves.png',
      description: 'Front End Application using vanilla Javscript and an Express server.'

    }, {
      id: 'dev-rescue',
      title: 'DevRescue',
      type: 'Full Stack',
      image: 'http://bengitscode.com/img/portfolio/project2.png',
      description: 'description here.'

    }, {
      id: 'tic-tac-toe',
      title: 'Xzibit vs Oprah Tic-TacToe',
      type: 'Front End',
      image: 'http://bengitscode.com/img/portfolio/project1.png',
      description: 'Front End Tic Tac Toe game using Javascript and jQuery. Built in five days as first browser project.'

    }];
  }
});
