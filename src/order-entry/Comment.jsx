import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { setComment } from '../infrastructure/actions';
import { Typography, Input } from 'antd';

const { Text } = Typography
const { TextArea } = Input;
const Comment = props => {
  const handleCommentChange = (e) => {
    props.setComment(e.currentTarget.value)
  }

  const { comment } = props;
  return <Fragment>
    <div><Text strong>Comment</Text></div>
    <TextArea
      placeholder="Enter Comment"
      autoSize
      style={{ width: '200px' }}
      onChange={handleCommentChange}
      value={comment} />
  </Fragment>
}

const mapDispatchToProps = dispatch => ({
  setComment: (val) => dispatch(setComment(val)),
})

const mapStateToProps = state => ({
  comment: state.entry.comment
})

export default connect(mapStateToProps, mapDispatchToProps)(Comment);