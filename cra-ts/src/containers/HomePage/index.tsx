import React, { useEffect } from 'react';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import { useInjectSaga } from 'utils/injectSaga';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectHomeError,
  makeSelectHomeLoading,
  makeSelectPosts,
} from './selectors';
import { fetchPosts } from './actions';
import { Dispatch } from 'redux';
import { HomeState } from './types';
import { ApplicationRootState } from 'types/app';
import { Link } from '@reach/router';

const mapStateToProps = createStructuredSelector<
  ApplicationRootState,
  HomeState
>({
  posts: makeSelectPosts(),
  error: makeSelectHomeError(),
  loading: makeSelectHomeLoading(),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  doFetchPosts: () => dispatch(fetchPosts()),
});

const Home = () => {
  useInjectReducer({ key: 'home', reducer });
  useInjectSaga({ key: 'home', saga });

  const dispatch = useDispatch();
  const { doFetchPosts } = mapDispatchToProps(dispatch);
  const { error, loading, posts } = useSelector(mapStateToProps);

  useEffect(() => {
    if (!posts) {
      doFetchPosts();
    }
  }, []); // eslint-disable-line

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>error...</div>;
  }

  return (
    <div>
      {(posts || []).map(post => (
        <div
          key={post.id}
          className="-mx-2 flex border-b border-solid px-2 py-2"
        >
          <div className="w-16 px-2">{post.id}</div>
          <div className="w-2/3 px-2">{post.title}</div>
          <div className="w-1/3 px-2 text-right">
            <Link className="underline" to={`/posts/${post.id}`}>
              View
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
