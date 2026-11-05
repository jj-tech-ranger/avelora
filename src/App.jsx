import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SectionTitle from './components/SectionTitle';
import Button from './components/Button';
import DestinationModal from './components/DestinationModal';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';

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
            default:
                return (
                    <section className="section section-ivory">
                        <div className="container">
                            <SectionTitle
                                subtitle="Page Under Construction"
                                title={`Active Page: ${currentPage.toUpperCase()}`}
                                description={
                                    selectedEnquirySubject
                                        ? `Quote enquiry initiated for: ${selectedEnquirySubject}`
                                        : 'This page will be built in the upcoming steps. Use the navigation bar to view Home, About Us, Services, or Gallery.'
                                }
                            />
                            <div style={{ textAlign: 'center' }}>
                                <Button variant="primary" onClick={() => handleNavigate('home')}>
                                    Return to Homepage
                                </Button>
                            </div>
                        </div>
                    </section>
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