import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingCar from './components/ShoppingCard/ShoppingCar';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <div className='main'>
      <ToastContainer />
      <ShoppingCar />
    </div>
  )
}

export default App
