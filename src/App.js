import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import NewNote from './components/NewNote';
import MobileForm from './components/MobileForm';
import ErrorPage from './components/ErrorPage';
import useWindowDimensions from './components/useWindowDimension';
import MobileErrorPage from './components/MobileErrorPage';
import Productivity from './components/Productivity';
import ModalComp from './components/Modal';


function App() {
  const { height, width } = useWindowDimensions();
  return (
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route path='/create-note' element={<NewNote />} />
      <Route path='/mobile-form' element={<MobileForm />} />
      <Route path='/error-page' element={height < 768 ? <ErrorPage /> : <MobileErrorPage /> } />
      <Route path='/productivity' element={<Productivity /> }/>
      <Route path='/delete' element={<ModalComp /> }/>
    </Routes>
  );
}

export default App;
