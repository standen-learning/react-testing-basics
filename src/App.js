import Greeting from './components/Greeting';
import './App.css';

function App() {
  return (
    <div className="App">
      <Greeting />
    </div>
  );
}

export default App;

/**
 * The Three A's of testing
 * 
 * Arrange - Set up the test data, test conditions, and test environment
 * 
 * Act - Run logic that should be testsed (eg execute function)
 * 
 * Assert - Compare execution results with expenced results.
 * 
 * 
 * GetByRole all elements and their respective role attribute in html
 * https://www.w3.org/TR/html-aria/#docconformance
 */
