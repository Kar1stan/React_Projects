import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import NotFound from './components/NotFound';
import Creator from './components/Creator';
import User from './components/User';
import StreetList from './components/StreetList';
import streets from './models/streets';
import Main from './components/Main';
import Layout from './components/Layout';
import Item from './components/Item';
import Biography from './components/Biography';
import TodoManager from './components/TodoManager';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="/creator" element={<Creator />} />
            <Route path="/user" element={<User />} />
            <Route path="/streetslist" element={<StreetList data={streets} />} />
            <Route path="/street/:id" element={<Item />} />
            <Route path="/biography" element={<Biography />} />
            <Route path="/todos" element={<TodoManager/>}/>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
       </BrowserRouter>
  );
}
export default App;

