import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import BlogPage from './Blog/BlogPage'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BlogDetail from './Blog/BlogDetail'


const RouterApp = () => {
    return (
        <div className='max-w-[1600px] bg-gray-100 mx-auto overflow-hidden'>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />

                <Route path='/blog' element={<BlogPage/>} />
                <Route path='/blog/:id' element={<BlogDetail/>} />
            </Routes>
            <Footer/>
        </div>
    )
}

export default RouterApp
