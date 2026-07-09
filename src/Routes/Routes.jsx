import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Services from '../Pages/Services';
import CimaBizAi from '../Pages/CimaBizAi';
import Outsourcing from '../Pages/Outsourcing';
import ReadyMadeSolutions from '../Pages/ReadyMadeSolutions';
import Projects from '../Pages/Projects';
import Pricing from '../Pages/Pricing';
import Careers from '../Pages/Careers';
import Contact from '../Pages/Contact';
import NotFound from '../Pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'cima-biz-ai', element: <CimaBizAi /> },
      { path: 'outsourcing', element: <Outsourcing /> },
      { path: 'ready-made-solutions', element: <ReadyMadeSolutions /> },
      { path: 'projects', element: <Projects /> },
      { path: 'pricing', element: <Pricing /> },
      { path: 'careers', element: <Careers /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
