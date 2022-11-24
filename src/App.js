import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './components/route/Route';

function App() {
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
