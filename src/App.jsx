import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Web from './Components/Web/Web'
import Docks from './Components/Docs/Docs'

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/web' element={<Web />} />
                <Route path='/docs' element={<Docks />} />
            </Routes>
        </div>
    )
}
export default App