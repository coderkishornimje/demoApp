
import {} from '@testing-library/jest-native'
import renderer from 'react-test-renderer';
import TodoWithRedux from '../src/TodoWithRedux';
import { Provider } from 'react-redux';
import store from '../src/Redux/Store';

describe('rendering component',()=>{
   it('render app',()=>{
    const snapshot= renderer.create(
    <Provider store={store}>
    <TodoWithRedux/>
    </Provider>
    ).toJSON();
    expect(snapshot).toMatchSnapshot();
   })
   it('render redux component',()=>{
    renderer.create((<TodoWithRedux/>))
   })
})