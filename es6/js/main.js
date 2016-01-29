// Tiny RecruitiFi

class MatchesBox extends React.Component {
  render() {
    return (
        <div className="matches-box">
          <h1>Here Are Your Matches</h1>
          <MatchesList />
          <Match />
        </div>
    );
  }
}

class MatchesList extends React.Component {
  render() {
    return (
      <div className="matches-list">
      </div>
    );
  }
}

class Match extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="match">
        <p><strong>Position:</strong> {this.props.position}</p>
        <p><strong>Employer:</strong> {this.props.employer} </p>
        <p><strong>Salary Range:</strong> {this.props.salary} (Non-negotionable)</p>
        <p><strong>Eligible For Bonus:</strong> {this.props.bonus}</p>
      </div>
    );
  }
}

Match.defaultProps = {
  position: "President",
  employer: "U.S.A.",
    salary: "$400k",
     bonus: "Political Graft Only"
};

ReactDOM.render(<MatchesBox />, document.getElementById('content'));
