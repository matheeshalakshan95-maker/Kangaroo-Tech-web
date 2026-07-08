import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import useScrollReveal from '../hooks/useScrollReveal';

const Main = () => {
  const location = useLocation();
  useScrollReveal(location.pathname);

  return (
    <div className="kt-app">
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            className="kt-page-motion"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.16, 0.84, 0.44, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Main;
