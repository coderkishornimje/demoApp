/**
 * @format
 */

//import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shipped with jest.
import {it, describe, test} from '@jest/globals';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {} from '@testing-library/jest-native';
import store from '../src/Redux/Store';
import {Provider} from 'react-redux';
import TodoList from '../src/TodoList';
import TodoWithRedux from '../src/TodoWithRedux';

jest.mock('@react-native-async-storage/async-storage', () =>{});

describe('main app component ', () => {
//jest.mock('@react-native-async-storage/async-storage', () => 'AsyncStorage');
  
  test('render app', () => {
    const snapshot = renderer
      .create(
        <Provider store={store}>
          <App />
          {/* <TodoList/>
          <TodoWithRedux/> */}
        </Provider>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
