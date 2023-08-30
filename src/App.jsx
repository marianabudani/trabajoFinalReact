import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <>
      <div className='flex flex-col w-full'>
        <NavBar/>
      </div>
      <ItemListContainer />
    </>
  )
}

export default App
