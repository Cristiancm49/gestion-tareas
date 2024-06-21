
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TaskList from './components/Tasklist'
import TaskForm from './components/Taskform';

import Menu from './components/Navbar'
import { Container } from '@mui/material'


function App() {
  return (
    <BrowserRouter>
    <Menu />
      <Container>
        <Routes>
          <Route path='/' element={<TaskList />} />
          <Route path='/tasks/new' element={<TaskForm />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
