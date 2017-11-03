import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(function() {
  Players.insert({
    name: 'Thomas',
    score: '3'
  });
  console.log(Players.find().fetch());
});
