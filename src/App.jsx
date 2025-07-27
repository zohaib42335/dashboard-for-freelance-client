import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Overview from './pages/Overview'
import Projects from './pages/Projects'

function App() {

  return (
    <Routes>
      <Route 
       path='/' element={<Layout/>}> 
      <Route index element={<Overview/>}/>
      <Route path='projects' element={<Projects/>}/>        
      </Route>
    </Routes>
  )
}

export default App
