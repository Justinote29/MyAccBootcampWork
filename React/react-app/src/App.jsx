import './App.css'
import Garfield from './components/Garfield'

function App() {

  const feelingsArray = ['Hungry', 'Determined', 'Annoyed'];

  return (
    <>
      <Garfield feelings={feelingsArray} />
    </>
  )
}

export default App;
