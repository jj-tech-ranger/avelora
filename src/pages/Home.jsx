import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import DestinationCard from '../components/DestinationCard';
import { DESTINATIONS } from '../data/destinations';
import { SERVICES } from '../data/services';

const HERO_IMAGE =
    'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1800&q=80';

const BRAND_INTRO_IMAGE =
    'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1000&q=80';

const INSPIRATION_IMAGE =
    'https://images.unsplash.com/photo-1589979481223-deb893043163?auto=format&fit=crop&w=1000&q=80';

const FALLBACK_IMAGE =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'><rect width='100%' height='100%' fill='%23142B49'/><text x='50%' y='50%' fill='%23C6A66B' font-family='sans-serif' font-size='24' text-anchor='middle'>AVELORA Luxury African Travel</text></svg>";

const WHY_CHOOSE_FEATURES = [
    {
        number: '01',
        title: 'Carefully Selected Destinations',
        description:
            'Every reserve, island sanctuary, and coastal retreat in our portfolio is chosen for its natural beauty, character, and sense of place.',
    },
    {
        number: '02',
        title: 'Personalised Travel Planning',
        description:
            'Your itinerary is shaped around your pace, interests, and preferred style of travel rather than rigid, one-size-fits-all schedules.',
    },
    {
        number: '03',
        title: 'Exceptional Experiences',
        description:
            'From private conservancy game drives and sunset dhow cruises to guided waterfall flights, each day is designed to feel memorable.',
    },
    {
        number: '04',
        title: 'Quality Accommodation Arrangements',
        description:
            'We pair iconic ultra-luxury lodges and private island villas with thoughtfully selected accessible-luxury boutique stays.',
    },
    {
        number: '05',
        title: 'Flexible Travel Options',
        description:
            'Whether travelling as a couple, a honeymoon pair, a multi-generational family, a private group, or a solo explorer, journeys adapt to you.',
    },
    {
        number: '06',
        title: 'Dedicated Travel Assistance',
        description:
            'Attentive consultation from initial inspiration and route planning through to seamless regional transfers and on-the-ground guidance.',
    },
];

function Home({ onNavigate, onRequestQuote, onReadMore }) {
    const featuredDestinations = DESTINATIONS.filter((item) => item.featured);

    const handleImageError = (event) => {
        event.currentTarget.onerror = null;
        event.currentTarget.src = FALLBACK_IMAGE;
    };

    return (
        <div className="home-page">
            {/* Section 1: Hero */}
            <section
                className="hero"
                style={{ backgroundImage: `url(${HERO_IMAGE})` }}
            >
                <div className="hero-overlay" aria-hidden="true"></div>
                <div className="container">
                    <div className="hero-content">
            <span className="hero-eyebrow">
              AVELORA • Luxury African Travel Agency
            </span>
                        <h1 className="hero-title">
                            Discover Africa. Experience Extraordinary.
                        </h1>
                        <p className="hero-subtitle">
                            Tailor-made journeys across Africa’s most breathtaking savannahs,
                            spice islands, thunderous waterfalls, and mountain horizons—crafted
                            for discerning couples, families, groups, and independent
                            travellers.
                        </p>
                        <div className="hero-actions">
                            <Button
                                variant="gold"
                                onClick={() => onNavigate('gallery')}
                                ariaLabel="Explore African destinations"
                            >
                                Explore Destinations
                            </Button>
                            <Button
                                variant="outline-light"
                                onClick={() => onRequestQuote('')}
                                ariaLabel="Request a personalised travel quote"
                            >
                                Request a Personalised Quote
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Brand Introduction */}
            <section className="section section-white">
                <div className="container">
                    <div className="editorial-split">
                        <div>
                            <SectionTitle
                                align="left"
                                subtitle="Welcome to AVELORA"
                                title="Thoughtfully Curated African Journeys"
                                description="AVELORA is a luxury African travel agency dedicated to designing extraordinary journeys across the continent—from iconic private wildlife conservancies to tranquil Indian Ocean archipelagos."
                            />
                            <p style={{ color: '#526071', marginBottom: '1.25rem' }}>
                                We believe remarkable travel is defined by authenticity, space,
                                and personal attention. Our portfolio bridges private ultra-luxury
                                sanctuaries and carefully selected accessible-luxury holiday
                                packages, welcoming honeymooners, families, small groups, and
                                nature enthusiasts alike.
                            </p>
                            <p style={{ color: '#526071', marginBottom: '2rem' }}>
                                Every itinerary balances iconic highlights with unhurried moments,
                                connecting you effortlessly between savannah plains, coral reefs,
                                and vibrant cultural heritage.
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                <Button variant="primary" onClick={() => onNavigate('about')}>
                                    Discover Our Story
                                </Button>
                                <Button variant="outline" onClick={() => onNavigate('services')}>
                                    View Travel Services
                                </Button>
                            </div>
                        </div>

                        <div className="editorial-image-frame">
                            <img
                                src={BRAND_INTRO_IMAGE}
                                alt="Luxury African coastal sanctuary at sunset"
                                loading="lazy"
                                onError={handleImageError}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Featured Destinations */}
            <section className="section section-ivory">
                <div className="container">
                    <SectionTitle
                        subtitle="Signature Portfolio"
                        title="Featured African Destinations"
                        description="Explore eight of Africa’s most celebrated landscapes. Click Read More on any destination to view seasonal advice and signature experiences."
                    />

                    <div className="grid-4">
                        {featuredDestinations.map((destination) => (
                            <DestinationCard
                                key={destination.id}
                                destination={destination}
                                onEnquire={onRequestQuote}
                                onReadMore={onReadMore}
                            />
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Button variant="primary" onClick={() => onNavigate('gallery')}>
                            Explore All 12 Destinations in Gallery
                        </Button>
                    </div>
                </div>
            </section>

            {/* Section 4: Travel Experiences */}
            <section className="section section-white">
                <div className="container">
                    <SectionTitle
                        subtitle="Curated Travel Styles"
                        title="Five Signature Ways to Experience Africa"
                        description="Whether you envision a private Big Five safari, a barefoot island honeymoon, or a multi-generational family holiday, our specialists tailor every detail."
                    />

                    <div className="grid-3">
                        {SERVICES.map((service) => (
                            <article key={service.id} className="experience-card">
                                <span className="card-number">{service.number}</span>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.65rem' }}>
                                    {service.title}
                                </h3>
                                <p
                                    style={{
                                        fontSize: '0.8rem',
                                        fontWeight: 600,
                                        color: '#C6A66B',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.08em',
                                        marginBottom: '0.85rem',
                                    }}
                                >
                                    {service.priceLabel}
                                </p>
                                <p style={{ color: '#526071', fontSize: '0.94rem', marginBottom: '1.5rem' }}>
                                    {service.description}
                                </p>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => onNavigate('services')}
                                    ariaLabel={`Learn more about ${service.title}`}
                                >
                                    Explore Category
                                </Button>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 5: Why Choose AVELORA? */}
            <section className="section section-ivory">
                <div className="container">
                    <SectionTitle
                        subtitle="The AVELORA Distinction"
                        title="Why Travel With AVELORA"
                        description="Thoughtful planning, refined comfort, and genuine care at every stage of your African journey."
                    />

                    <div className="grid-3">
                        {WHY_CHOOSE_FEATURES.map((feature) => (
                            <article key={feature.number} className="feature-card">
                                <span className="card-number">{feature.number}</span>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.65rem' }}>
                                    {feature.title}
                                </h3>
                                <p style={{ color: '#526071', fontSize: '0.94rem' }}>
                                    {feature.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 6: Featured Travel Inspiration */}
            <section className="section section-white">
                <div className="container">
                    <div className="editorial-split">
                        <div className="editorial-image-frame">
                            <img
                                src={INSPIRATION_IMAGE}
                                alt="Turquoise Indian Ocean cove and granite islands in Seychelles"
                                loading="lazy"
                                onError={handleImageError}
                            />
                        </div>

                        <div>
                            <SectionTitle
                                align="left"
                                subtitle="Featured Travel Inspiration"
                                title="The Classic Bush & Beach Harmony"
                                description="One of Africa’s most rewarding travel pairings combines the drama of an East African wildlife safari with the calm of an Indian Ocean island sanctuary."
                            />
                            <p style={{ color: '#526071', marginBottom: '1.25rem' }}>
                                Begin your mornings tracking lions and elephant herds across the
                                sunlit savannahs of the Maasai Mara or Serengeti, then fly
                                directly to the coral shores of Zanzibar, Diani Beach, or the
                                Seychelles for warm ocean breezes and private coastal dining.
                            </p>
                            <p style={{ color: '#526071', marginBottom: '2rem' }}>
                                Complete a Traveller Preference Profile to record your favourite
                                destinations and travel style, or request a tailored Bush &
                                Beach quotation directly from our specialists.
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                <Button
                                    variant="primary"
                                    onClick={() =>
                                        onRequestQuote('Signature Bush & Beach Journey')
                                    }
                                >
                                    Enquire About This Journey
                                </Button>
                                <Button
                                    variant="outline"
                                    onClick={() => onNavigate('registration')}
                                >
                                    Create Traveller Profile
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 7: Call to Action */}
            <section className="section section-navy">
                <div className="container" style={{ textAlign: 'center' }}>
                    <SectionTitle
                        subtitle="Begin Planning"
                        title="Your African Journey Begins Here."
                        description="Share your preferred destinations, travel dates, and interests with AVELORA to receive a personalised demonstration itinerary and quotation."
                    />
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            gap: '1.25rem',
                        }}
                    >
                        <Button
                            variant="gold"
                            onClick={() => onRequestQuote('')}
                            ariaLabel="Request a tailored travel quotation"
                        >
                            Request a Quotation
                        </Button>
                        <Button
                            variant="outline-light"
                            onClick={() => onNavigate('contact')}
                            ariaLabel="Contact AVELORA travel specialists"
                        >
                            Contact Us
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;