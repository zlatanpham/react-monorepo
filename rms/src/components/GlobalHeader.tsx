import React from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { logout } from 'containers/Auth/actions';
import { Link } from '@reach/router';
import ROUTES from 'constants/routes';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  doLogout: () => dispatch(logout()),
});

export default function GlobalHeader() {
  const dispatch = useDispatch();
  const { doLogout } = mapDispatchToProps(dispatch);

  return (
    <header className="py-5 px-2 flex justify-between border-b border-solid">
      <Link to={ROUTES.HOME} className="text-2xl font-bold">
        HELLO
      </Link>
      <button
        className="bg-black px-5 py-2 text-white"
        onClick={() => {
          doLogout();
        }}
      >
        Logout
      </button>
    </header>
  );
}
