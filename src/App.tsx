import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import OurWork from './pages/OurWork';
import Contact from './pages/Contact';

type Page = 'Home' | 'About' | 'Services' | 'Our Work' | 'Templates' | 'Blog' | 'Contact' | 'Contract';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('Home');

  const handleNavigate = (page: string) => {
    if (page === 'Templates') {
      setCurrentPage('Our Work');
      setTimeout(() => {
        const element = document.getElementById('templates-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      setCurrentPage(page as Page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    document.title =
      currentPage === 'Home' ? 'ADAI Agency - Build. Automate. Scale.' : `${currentPage} - ADAI Agency`;
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home onNavigate={handleNavigate} />;
      case 'About':
        return <About />;
      case 'Services':
        return <Services onNavigate={handleNavigate} />;
      case 'Our Work':
      case 'Templates':
        return <OurWork onNavigate={handleNavigate} />;
      case 'Contract':
        return <Contract />;
      case 'Blog':
        return <Blog />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
