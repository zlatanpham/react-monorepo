import React, { useEffect } from 'react';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import { useInjectSaga } from 'utils/injectSaga';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectPostError,
  makeSelectPostLoading,
  makeSelectPost,
} from './selectors';
import { fetchPost } from './actions';
import { Dispatch } from 'redux';
import { PostState } from './types';
import { ApplicationRootState } from 'types/app';
import { RouteComponentProps } from '@reach/router';
import Button from 'components/Button';
import { Line } from '@aha/ui';

const mapStateToProps = createStructuredSelector<
  ApplicationRootState,
  PostState
>({
  post: makeSelectPost(),
  error: makeSelectPostError(),
  loading: makeSelectPostLoading(),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  doFetchPost: (id: string) => dispatch(fetchPost(id)),
});

const PostPage = (props: RouteComponentProps<{ id: string }>) => {
  const postId = props.id;
  useInjectReducer({ key: 'post', reducer });
  useInjectSaga({ key: 'post', saga });

  const dispatch = useDispatch();
  const { doFetchPost } = mapDispatchToProps(dispatch);
  const { error, loading, post } = useSelector(mapStateToProps);

  useEffect(() => {
    if (postId) {
      doFetchPost(postId);
    }
  }, [postId]); // eslint-disable-line

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>error...</div>;
  }

  if (!post) {
    return null;
  }

  return (
    <div>
      <p>
        <b>ID:</b> {post.id}
      </p>
      <p>
        <b>Title:</b> {post.title}
      </p>
      <p>
        <b>Body:</b> {post.body}
      </p>
      <p>
        <Line thickness="base"></Line>
        <Button>3utton</Button>
      </p>
    </div>
  );
};

export default PostPage;
