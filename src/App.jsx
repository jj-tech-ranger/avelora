import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import DestinationModal from './components/DestinationModal';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Registration from './pages/Registration';
import Contact from './pages/Contact';

const VALID_PAGES = ['home', 'about', 'services', 'gallery', 'registration', 'contact'];

function getInitialPage() {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    return VALID_PAGES.includes(hash) ? hash : 'home';
}

function App() {
    const [currentPage, setCurrentPage] = useState(getInitialPage);
    const [selectedEnquirySubject, setSelectedEnquirySubject] = useState('');
    const [activeDestination, setActiveDestination] = useState(null);

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

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return (
                    <Home
                        onNavigate={handleNavigate}
                        onRequestQuote={handleRequestQuote}
                        onReadMore={setActiveDestination}
                    />
                );
            case 'about':
                return (
                    <About
                        onNavigate={handleNavigate}
                        onRequestQuote={handleRequestQuote}
                    />
                );
            case 'services':
                return (
                    <Services
                        onNavigate={handleNavigate}
                        onRequestQuote={handleRequestQuote}
                    />
                );
            case 'gallery':
                return (
                    <Gallery
                        onNavigate={handleNavigate}
                        onRequestQuote={handleRequestQuote}
                        onReadMore={setActiveDestination}
                    />
                );
            case 'registration':
                return (
                    <Registration
                        onNavigate={handleNavigate}
                        onRequestQuote={handleRequestQuote}
                    />
                );
            case 'contact':
                return (
                    <Contact
                        initialSubject={selectedEnquirySubject}
                        onNavigate={handleNavigate}
                    />
                );
            default:
                return (
                    <Home
                        onNavigate={handleNavigate}
                        onRequestQuote={handleRequestQuote}
                        onReadMore={setActiveDestination}
                    />
                );
        }
    };

    return (
        <div className="app-wrapper">
            <Header
                currentPage={currentPage}
                onNavigate={handleNavigate}
                onRequestQuote={() => handleRequestQuote('')}
            />

            <main style={{ minHeight: '65vh' }}>{renderPage()}</main>

            <DestinationModal
                destination={activeDestination}
                onClose={() => setActiveDestination(null)}
                onEnquire={handleRequestQuote}
            />

            <Footer
                onNavigate={handleNavigate}
                onRequestQuote={() => handleRequestQuote('')}
            />
        </div>
    );
}

export default App;