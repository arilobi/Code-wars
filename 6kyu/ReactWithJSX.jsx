// my solution
let React = require('react');
let ReactDOM = require('react-dom');

var myHeader = <h1>My three favorite codewarriors are noLan, jhoffner, and OverZealous</h1>;

//User prop via this.props.user
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
    // using the Map method to create Codewarslink component and passes the user prop to each user.
    const leaderLinks = this.props.leaders.map((user) => 
      //The key prop gives the user a unique identifier
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

//This is to check that the documents runs only in the browser.
if (typeof document !== 'undefined') {

  //array of leaders
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
