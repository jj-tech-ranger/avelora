import { useState } from 'react';
import Button from './Button';

const NAV_ITEMS = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'registration', label: 'Registration' },
    { id: 'contact', label: 'Contact Us' },
];

function Header({ currentPage, onNavigate, onRequestQuote }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavClick = (pageId) => {
        onNavigate(pageId);
        setIsMobileMenuOpen(false);
    };

    const handleQuoteClick = () => {
        setIsMobileMenuOpen(false);
        onRequestQuote();
    };

    const isHomePage = currentPage === 'home';

    return (
        <header className={`site-header ${isHomePage ? 'header-home' : ''}`.trim()}>
            <div className="container header-inner">
                <button
                    type="button"
                    className="brand-logo"
                    onClick={() => handleNavClick('home')}
                    aria-label="AVELORA Home"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '0.85rem',
                    }}
                >
                    <svg
                        width="44"
                        height="44"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        style={{ flexShrink: 0 }}
                    >
                        <rect
                            width="64"
                            height="64"
                            rx="10"
                            fill="#142B49"
                            stroke="#C6A66B"
                            strokeWidth="1.5"
                        />
                        <rect
                            x="5"
                            y="5"
                            width="54"
                            height="54"
                            rx="7"
                            stroke="#C6A66B"
                            strokeWidth="0.9"
                            strokeOpacity="0.55"
                        />
                        <polygon
                            points="32,8 34,13.2 39.2,15.2 34,17.2 32,22.4 30,17.2 24.8,15.2 30,13.2"
                            fill="#C6A66B"
                        />
                        <path
                            d="M17 48.5L29.8 21.5H34.2L47 48.5H42.2L39.1 41.5H24.9L21.8 48.5H17ZM26.8 37H37.2L32 25.4L26.8 37Z"
                            fill="#FFFFFF"
                        />
                        <path
                            d="M14.5 49C22.5 44.8 41.5 44.8 49.5 49"
                            stroke="#C6A66B"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>

                    <span style={{ display: 'flex', flexDirection: 'column' }}>
            <span className="brand-name">AVELORA</span>
            <span className="brand-tagline">
              Discover Africa. Experience Extraordinary.
            </span>
          </span>
                </button>

                <nav className="main-nav" aria-label="Main Navigation">
                    <ul className="nav-list">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.id}>
                                <button
                                    type="button"
                                    className={`nav-link ${currentPage === item.id ? 'active' : ''}`.trim()}
                                    onClick={() => handleNavClick(item.id)}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <Button
                        variant="gold"
                        size="sm"
                        onClick={handleQuoteClick}
                        ariaLabel="Request a personalised travel quote"
                    >
                        Request a Quote
                    </Button>
                </nav>

                <button
                    type="button"
                    className="mobile-menu-btn"
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                    aria-expanded={isMobileMenuOpen}
                    aria-label="Toggle navigation menu"
                >
                    {isMobileMenuOpen ? 'Close ✕' : 'Menu ☰'}
                </button>
            </div>

            <div
                className={`mobile-nav-drawer ${isMobileMenuOpen ? 'open' : ''}`.trim()}
                aria-label="Mobile Navigation"
            >
                <ul className="mobile-nav-list">
                    {NAV_ITEMS.map((item) => (
                        <li key={item.id}>
                            <button
                                type="button"
                                className={`mobile-nav-link ${currentPage === item.id ? 'active' : ''}`.trim()}
                                onClick={() => handleNavClick(item.id)}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>

                <Button
                    variant="gold"
                    fullWidth
                    onClick={handleQuoteClick}
                    ariaLabel="Request a personalised travel quote"
                >
                    Request a Quote
                </Button>
            </div>
        </header>
    );
}

export default Header;