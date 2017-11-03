import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor'
import {Players} from './../imports/api/players';
import {Tracker} from 'meteor/tracker'

Tracker.autorun(function() { // This runs whene
  console.log('Players List', Players.find().fetch());
  var players = Players.find().fetch();
  console.log('LOG', players);
  players.forEach(function(player) {
      console.log(player.name);
  });
});

const renderPlayers = function(playersList) {
  return playersList.map(function (player) {
    return <p key={player._id}>{player.name + ' Score: ' + player.score}</p>;
  });
};

Meteor.startup(function () {
  Tracker.autorun(function() {
    let players = Players.find().fetch();
    let title = 'Score Keep';
    let name = 'Tom';
    let jsx = (
      <div>
        <h1>{title}</h1>
        <p>Hello {name}</p>
        <p>This is my second p.</p>
        {renderPlayers(players)}
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });

  // Insert new doc into players collection.
  Players.insert({
    name: 'Zoe',
    score: 1
  });
});
