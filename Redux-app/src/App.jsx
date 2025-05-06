import './App.css'
import Store from './Store'
import { Provider } from 'react-redux'
import Todo from './Todo'
function App() {


  return (
    <>
<Provider store={Store}>
     <Todo/>
    </Provider>
    </>
  )
}

export default App;
