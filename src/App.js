import Counter from './component/counter/index'
import './App.css';

function App() {
  return (
    <div>
      <p>increasing</p>
      <Counter data={{"start": 0, "end": 7950620, "duration": 1500}}/>
      <p>decreasing</p>
      <Counter data={{"start": 3000000, "end": 0, "duration": 1500}}/>
      <p>fast</p>
      <Counter data={{"start": 0, "end": 20132485, "duration": 950}}/>
      <p>slow</p>
      <Counter data={{"start": 0, "end": 10850310, "duration": 10000}}/>
    </div>
  );
}

export default App;
