import {
  BrowserRouter as Router,
} from 'react-router-dom';
import DrawingPage from './DrawingPage/DrawingPage';
import Library from './Library/Library';

export default function App() {
  return(
    <Router>
      <h1>Hello World</h1>
      <DrawingPage />
      <Library />
    </Router>
  );
}
