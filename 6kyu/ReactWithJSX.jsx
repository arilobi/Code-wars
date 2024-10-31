// my solution
let React = require('react');
let ReactDOM = require('react-dom');

// Let us know who your three favorite codewarriors are!
var myHeader = <h1>My three favorite codewarriors are noLan, jhoffner, and OverZealous</h1>;

var CodewarsLink = React.createClass({
  render: function() {
    return (
      <a href={'http://www.codewars.com/users/' + this.props.user}>
        {this.props.user}
      </a>
    );
  }
});

var Leaderboard = React.createClass({
  render: function() {
    // using the Map method
    const leaderLinks = this.props.leaders.map((user) => 
      <CodewarsLink key={user} user={user} />
    );

    return (
      <div>
        {leaderLinks}
      </div>
    );
  }
});

// Export the components instead of rendering
module.exports = {
  myHeader,
  CodewarsLink,
  Leaderboard
};

if (typeof document !== 'undefined') {

  var leaders = ['Sch3lp', 'nplus', 'jhoffner', 'noLan', 'OverZealous']; 
  var leaderboardElement = <Leaderboard leaders={leaders} />;

  // Rendering
  ReactDOM.render(
    <div>
      {myHeader}
      {leaderboardElement}
    </div>,
    document.getElementById('root')
  );
}
