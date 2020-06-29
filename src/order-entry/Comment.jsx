import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Typography, Input } from 'antd';

import Constants from '../content/constants';
import { setComment } from '../infrastructure/actions';

const { Text } = Typography
const { TextArea } = Input;
const Comment = props => {
  const handleCommentChange = (e) => {
    props.setComment(e.currentTarget.value)
  }

  const { comment } = props;
  const { entryLabels: { comment: commentHeading, phComment } } = Constants;
  return <Fragment>
    <div><Text strong>{commentHeading}</Text></div>
    <TextArea
      autoSize
      placeholder={phComment}
      className='stdInputWidth'
      onChange={handleCommentChange}
      value={comment} />
  </Fragment>
}

Comment.propTypes = {
  comment: PropTypes.string,
  setComment: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  setComment: (val) => dispatch(setComment(val)),
})

const mapStateToProps = state => ({
  comment: state.entry.comment
})

export default connect(mapStateToProps, mapDispatchToProps)(Comment);