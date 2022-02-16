import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../../Pages/Home/Home';
import { Movies } from '../../Pages/Movies/Movies';
import { MyList } from '../../Pages/MyList/MyList';
import { Premieres } from '../../Pages/Premieres/Premieres';
import { Presentation } from '../../Pages/Presentation/Presentation';
import { Cinemas } from '../../Pages/Cinemas/Cinemas'

export const PublicRoutes = () => {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Presentation />} />
                <Route path='/inicio' element={<Home />} />
                <Route path='/cines' element={<Cinemas />} />
                <Route path='/peliculas' element={<Movies />} />
                <Route path='/estrenos' element={<Premieres />} />
                <Route path='/mi-lista' element={<MyList />} />
            </Routes>
        </Router>
    )
}
