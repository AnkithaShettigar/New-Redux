import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './components/CakeContainer';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import HooksIceContainer from './components/HooksIceContainer';
import BookContainer from './components/BookContainer';
import HooksBookContainer from './components/HooksBookContainer';
import NewCakeContainer from './components/newCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';
import Table from './components/Table';
import Todo from './components/Todo';

function App() {
  return (
    <Provider store={store}>
      {' '}
      <div className="App">
        {/* <Todo /> */}
        {/* <UserContainer /> */}
        <Table />
        {/* <h1 className="title">Cake Shop</h1>
        <ItemContainer cake />
        <ItemContainer />
        <CakeContainer />
        <NewCakeContainer /> */}
        {/* <p>Using hooks</p>
        <HooksCakeContainer />

        <h1 className="title">IceCream Shop</h1>
        <IceCreamContainer />
        <p>Using hooks</p>

        <HooksIceContainer />
        <h1 className="title">Books Shop</h1>
        <BookContainer />
        <p>Using hooks</p>

        <HooksBookContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
