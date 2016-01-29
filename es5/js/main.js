// Tiny RecruitiFi

var MatchesBox = React.createClass({
  render: function() {
    return (
      <div className="matches-box">
        <h1>Here Are Your Matches</h1>
        <MatchesList />
        <Match position="President" employer="U.S.A." salary="$400k" bonus="Politcal Graft Only" />
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
        <p><strong>Position:</strong> {this.props.position}</p>
        <p><strong>Employer:</strong> {this.props.employer} </p>
        <p><strong>Salary Range:</strong> {this.props.salary} (Non-negotionable)</p>
        <p><strong>Eligible For Bonus:</strong> {this.props.bonus}</p>
      </div>
    );
  }
});

ReactDOM.render(<MatchesBox />, document.getElementById('content') );
