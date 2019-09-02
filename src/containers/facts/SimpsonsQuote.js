import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Quote from '../../components/quote/Quote';
import Load from '../../components/quote/Load';
import { getQuote, getCharacterName, getCharacterImage, getLoading } from '../../selectors/quoteSelectors';
import { fetchQuote } from '../../actions/quoteActions';

class SimpsonsQuote extends Component {
  static propTypes = {
    quote: PropTypes.string.isRequired, 
    characterName: PropTypes.string.isRequired, 
    characterImage: PropTypes.string.isRequired,
    fetch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    if(this.props.loading) return <h3>Loading</h3>;
    return (
      <>
      <Load handleClick={this.props.fetch}/>
      <Quote { ...this.props }/>
      </>
    );
  }
}

const mapStateToProps = state => ({
  quote: getQuote(state),
  characterName: getCharacterName(state),
  characterImage: getCharacterImage(state),
  loading: getLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchQuote());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SimpsonsQuote);
