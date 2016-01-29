// Tiny RecruitiFi

var MatchesBox = React.createClass({
  render: function() {
    return (
      <div className="matches-box">
        <h1>Here Are Your Matches</h1>
        <MatchesList />
        <Match />
      </div>
    );
  }
});

var MatchesList = React.createClass({
  render: function() {
    return (
      <div className="matches-list"></div>
    );
  }
});

var Match = React.createClass({
  render: function() {
    return (
      <div className="match">
        <p><strong>Position:</strong> President</p>
        <p><strong>Employer:</strong> U.S.A. </p>
        <p><strong>Salary Range:</strong> $400k (Non-negotionable)</p>
        <p><strong>Eligible For Bonus:</strong> Political Graft Only</p>
      </div>
    );
  }
});

ReactDOM.render(<MatchesBox />, document.getElementById('content') );
