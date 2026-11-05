import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SectionTitle from './components/SectionTitle';
import Button from './components/Button';

const VALID_PAGES = ['home', 'about', 'services', 'gallery', 'registration', 'contact'];

function getInitialPage() {
  const hash = window.location.hash.replace('#', '').toLowerCase();
  return VALID_PAGES.includes(hash) ? hash : 'home';
}

function App() {
  const [currentPage, setCurrentPage] = useState(getInitialPage);
  const [selectedEnquirySubject, setSelectedEnquirySubject] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (VALID_PAGES.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (pageId) => {
    if (VALID_PAGES.includes(pageId)) {
      setCurrentPage(pageId);
      window.location.hash = pageId;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleRequestQuote = (preselectedDestination = '') => {
    setSelectedEnquirySubject(preselectedDestination);
    handleNavigate('contact');
  };

  return (
      <div className="app-wrapper">
        <Header
            currentPage={currentPage}
            onNavigate={handleNavigate}
            onRequestQuote={() => handleRequestQuote('')}
        />

        <main style={{ minHeight: '65vh' }}>
          <section className="section section-ivory">
            <div className="container">
              <SectionTitle
                  subtitle="Phase 2 Verification"
                  title={`Active Page: ${currentPage.toUpperCase()}`}
                  description={
                    selectedEnquirySubject
                        ? `Quote enquiry initiated for: ${selectedEnquirySubject}`
                        : 'Use the top navigation bar, mobile menu, or footer links to test switching between all six pages.'
                  }
              />
              <div style={{ textAlign: 'center' }}>
                <Button variant="primary" onClick={() => handleRequestQuote('Maasai Mara Safari')}>
                  Test Quote Request Button
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer
            onNavigate={handleNavigate}
            onRequestQuote={() => handleRequestQuote('')}
        />
      </div>
  );
}

export default App;