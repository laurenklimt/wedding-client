import './App.css';
import Router from './components/Router';

function App() {
  const date = new Date(Date.now());
  return (
    <div className='body'>
      <Router />
    </div>
  );
}

export default App;
