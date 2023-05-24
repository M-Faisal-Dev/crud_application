import './App.css';
import Input from './component/Input';

import {Routes,Route} from 'react-router-dom';
import Data from './component/Data';
import Update from './component/Update';




function App() {
  return (
<Routes>
<Route path='/update' element={<Update/>}/>
<Route path='/' element={<Input/>}/>
<Route path='/data' element={<Data/>}/>

</Routes>
  );
}

export default App;
