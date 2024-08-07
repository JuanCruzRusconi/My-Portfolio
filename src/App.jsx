import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LangProvider } from './context/langContext.jsx';

import Me from './Components/Me/Me';
import Menu from './Components/Menu/Menu';
import NavBar from './Components/NavBar/NavBar';
import About from './Components/About/About.jsx';
import Skills from './Components/Skills/Skills.jsx';
import Resume from './Components/Resume/Resume';
import Contact from './Components/Contact/Contact';
import ProjectsContainer from './Components/ProjectsContainer/ProjectsContainer';
import Footer from './Components/Footer/Footer';

import './App.css';

const App = () => {

    return (

        <LangProvider>
                <div className='app-container'>
                    <BrowserRouter>
                        <NavBar />
                        <Routes>
                            <Route path='/' element={
                                <Me>
                                    <Menu />
                                </Me>} />
                            <Route path='/about' element={<About />} />
                            <Route path='/skills' element={<Skills />} />
                            <Route path='/projects' element={<ProjectsContainer />} />
                            <Route path='/resume' element={<Resume />} />
                            <Route path='/contact' element={<Contact />} />
                            <Route path='*' element={<Navigate to='/' />} />
                        </Routes>
                        <Footer />
                    </BrowserRouter>
                </div>
        </LangProvider>

    )
}

export default App;
