import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
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

  return <div>{greeting.message}</div>;
};

export default Greeting;
