import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys
      .reverse()
      .map(({ _id, title, body, dateSent, yes, no }) => {
        return (
          <div className="card" key={_id}>
            <div className="card-content">
              <span className="card-title">{title}</span>
              <p>{body}</p>
              <p className="right">
                Sent On: {new Date(dateSent).toLocaleDateString()}
              </p>
            </div>
            <div className="card-action">
              <a>Yes: {yes}</a>
              <a>No: {no}</a>
            </div>
          </div>
        );
      });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, actions)(SurveyList);
