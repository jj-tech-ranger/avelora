import Button from './Button';

function Footer({ onNavigate, onRequestQuote }) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.85rem',
                                marginBottom: '1rem',
                            }}
                        >
                            <svg
                                width="42"
                                height="42"
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

                            <div>
                                <div className="brand-name" style={{ color: '#FFFFFF', lineHeight: 1.05 }}>
                                    AVELORA
                                </div>
                                <div className="brand-tagline">
                                    Discover Africa. Experience Extraordinary.
                                </div>
                            </div>
                        </div>

                        <p style={{ fontSize: '0.92rem', marginBottom: '1.5rem' }}>
                            AVELORA is a luxury African travel agency curating extraordinary safari
                            wilderness journeys, Indian Ocean island escapes, and tailored private
                            holidays across Africa.
                        </p>
                        <Button variant="gold" size="sm" onClick={() => onRequestQuote()}>
                            Request a Quote
                        </Button>
                    </div>

                    <div>
                        <h3 className="footer-heading">Explore AVELORA</h3>
                        <ul className="footer-links">
                            <li>
                                <button type="button" className="footer-link-btn" onClick={() => onNavigate('home')}>
                                    Home
                                </button>
                            </li>
                            <li>
                                <button type="button" className="footer-link-btn" onClick={() => onNavigate('about')}>
                                    About Us
                                </button>
                            </li>
                            <li>
                                <button type="button" className="footer-link-btn" onClick={() => onNavigate('services')}>
                                    Our Services
                                </button>
                            </li>
                            <li>
                                <button type="button" className="footer-link-btn" onClick={() => onNavigate('gallery')}>
                                    Destination Gallery
                                </button>
                            </li>
                            <li>
                                <button type="button" className="footer-link-btn" onClick={() => onNavigate('registration')}>
                                    Traveller Registration
                                </button>
                            </li>
                            <li>
                                <button type="button" className="footer-link-btn" onClick={() => onNavigate('contact')}>
                                    Contact &amp; Enquiries
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="footer-heading">Signature Journeys</h3>
                        <ul className="footer-links">
                            <li>
                                <button type="button" className="footer-link-btn" onClick={() => onNavigate('services')}>
                                    Safari &amp; Wilderness
                                </button>
                            </li>
                            <li>
                                <button type="button" className="footer-link-btn" onClick={() => onNavigate('services')}>
                                    Beach &amp; Island Escapes
                                </button>
                            </li>
                            <li>
                                <button type="button" className="footer-link-btn" onClick={() => onNavigate('services')}>
                                    Honeymoon &amp; Romantic
                                </button>
                            </li>
                            <li>
                                <button type="button" className="footer-link-btn" onClick={() => onNavigate('services')}>
                                    Family &amp; Group Holidays
                                </button>
                            </li>
                            <li>
                                <button type="button" className="footer-link-btn" onClick={() => onNavigate('services')}>
                                    Nature, Adventure &amp; Culture
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="footer-heading">Private Concierge Desk</h3>
                        <p style={{ fontSize: '0.9rem', marginBottom: '0.6rem' }}>
                            <strong>Email:</strong> concierge@avelora.com
                        </p>
                        <p style={{ fontSize: '0.9rem', marginBottom: '0.6rem' }}>
                            <strong>Telephone:</strong> +254 20 790 4800
                        </p>
                        <p style={{ fontSize: '0.9rem', marginBottom: '0.6rem' }}>
                            <strong>Private Offices:</strong> Nairobi • Cape Town • Victoria Falls
                        </p>
                        <p style={{ fontSize: '0.82rem', color: '#C6A66B', marginTop: '1rem' }}>
                            Bespoke itinerary planning &amp; 24/7 on-safari guest assistance.
                        </p>
                    </div>
                </div>

                <div className="footer-bottom">
          <span>
            &copy; {new Date().getFullYear()} AVELORA Luxury African Travel Agency. All rights reserved.
          </span>
                    <span>Bespoke African Journeys &amp; Private Safaris</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;