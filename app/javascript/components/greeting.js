import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadGreeting } from '../redux/greetings/greetings';

const Greeting = () => {
  const dispatch = useDispatch();
  const loadGreetingAction = bindActionCreators(loadGreeting, dispatch);
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
    loadGreetingAction();
    return () => null;
  }, []);

  return (
    <h2
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        backgroundColor: 'lightgray',
        margin: 0,
      }}
    >
      {greeting.message}
    </h2>
  );
};

export default Greeting;
