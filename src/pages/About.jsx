import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';

const BANNER_IMAGE =
    'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1800&q=80';

const STORY_IMAGE =
    'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1000&q=80';

const PHILOSOPHY_IMAGE =
    'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1000&q=80';

const FALLBACK_IMAGE =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'><rect width='100%' height='100%' fill='%23142B49'/><text x='50%' y='50%' fill='%23C6A66B' font-family='sans-serif' font-size='24' text-anchor='middle'>AVELORA Luxury African Travel</text></svg>";

const CORE_VALUES = [
    {
        number: '01',
        title: 'Excellence',
        description:
            'We hold every element of your journey—from regional flights and private guides to sanctuary accommodations—to a consistently refined standard.',
    },
    {
        number: '02',
        title: 'Personalisation',
        description:
            'No two travellers share the exact same rhythm. We listen carefully and shape each itinerary around your personal interests, travel companions, and preferred pace.',
    },
    {
        number: '03',
        title: 'Authentic Experiences',
        description:
            'We connect guests with genuine wildlife encounters, natural landscapes, and respectful cultural exchanges that honour local heritage.',
    },
    {
        number: '04',
        title: 'Reliability',
        description:
            'Clear communication, transparent illustrative pricing, and attentive coordination give you peace of mind from your first enquiry to your return home.',
    },
    {
        number: '05',
        title: 'Appreciation of African Destinations',
        description:
            'We celebrate the extraordinary diversity of the African continent—from equatorial glaciers and savannahs to coral archipelagos and historic medinas.',
    },
    {
        number: '06',
        title: 'Attention to Detail',
        description:
            'Thoughtful touches—whether a private bush breakfast, a quiet villa transfer, or tailored family pacing—elevate a holiday into a lifelong memory.',
    },
];

function About({ onNavigate, onRequestQuote }) {
    const handleImageError = (event) => {
        event.currentTarget.onerror = null;
        event.currentTarget.src = FALLBACK_IMAGE;
    };

    return (
        <div className="about-page">
            {/* Page Banner */}
            <section
                className="page-banner"
                style={{ backgroundImage: `url(${BANNER_IMAGE})` }}
            >
                <div className="page-banner-overlay" aria-hidden="true"></div>
                <div className="container">
                    <div className="page-banner-content">
                        <span className="hero-eyebrow">About AVELORA</span>
                        <h1 className="page-banner-title">
                            Curating Extraordinary African Journeys
                        </h1>
                        <p className="page-banner-subtitle">
                            Discover our story, our travel philosophy, and our commitment to
                            thoughtful, personalised exploration across Africa.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="section section-white">
                <div className="container">
                    <div className="editorial-split">
                        <div>
                            <SectionTitle
                                align="left"
                                subtitle="Our Story"
                                title="Born from a Passion for Africa’s Remarkable Landscapes"
                                description="AVELORA was conceived as a dedicated luxury African travel agency designed to showcase the continent’s most inspiring destinations with warmth, clarity, and sophistication."
                            />
                            <p style={{ color: '#526071', marginBottom: '1.25rem' }}>
                                Across Africa, every region tells a distinct story—from the
                                thunderous mist of Victoria Falls and the endless horizons of
                                the Serengeti to the spice-scented breezes of Zanzibar and the
                                granite coves of the Seychelles. AVELORA brings these journeys
                                together under one refined, welcoming travel concept.
                            </p>
                            <p style={{ color: '#526071', marginBottom: '1.5rem' }}>
                                Rather than offering rigid catalogue tours, our approach centres
                                on listening to how you wish to experience Africa—whether that
                                means tracking wildlife in private conservancies, celebrating a
                                milestone honeymoon by the Indian Ocean, or sharing a seamless
                                multi-generational family holiday.
                            </p>
                            <p
                                style={{
                                    fontSize: '0.88rem',
                                    color: '#526071',
                                    backgroundColor: '#F5F3EE',
                                    padding: '1rem 1.25rem',
                                    borderRadius: '12px',
                                    borderLeft: '3px solid #C6A66B',
                                }}
                            >
                                <strong>Academic Project Note:</strong> AVELORA is a fictional
                                luxury travel brand concept developed for academic
                                demonstration, illustrating modern React architecture,
                                responsive UI/UX design, and interactive travel planning.
                            </p>
                        </div>

                        <div className="editorial-image-frame">
                            <img
                                src={STORY_IMAGE}
                                alt="Elephants walking across an African savannah at golden hour"
                                loading="lazy"
                                onError={handleImageError}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Vision & Our Mission */}
            <section className="section section-ivory">
                <div className="container">
                    <SectionTitle
                        subtitle="Purpose & Direction"
                        title="Our Vision & Our Mission"
                        description="Guided by a deep appreciation for African nature, culture, and hospitality."
                    />

                    <div className="grid-2">
                        <article className="feature-card">
                            <span className="section-subtitle">Our Vision</span>
                            <h3 style={{ fontSize: '1.85rem', marginBottom: '1rem' }}>
                                To inspire extraordinary journeys through Africa’s most
                                remarkable destinations.
                            </h3>
                            <p style={{ color: '#526071' }}>
                                We envision a world where travellers experience Africa in all
                                its depth and beauty—connecting with pristine wildlife habitats,
                                vibrant coastal cultures, and dramatic natural wonders through
                                journeys that leave a lasting, positive impression.
                            </p>
                        </article>

                        <article className="feature-card">
                            <span className="section-subtitle">Our Mission</span>
                            <h3 style={{ fontSize: '1.85rem', marginBottom: '1rem' }}>
                                To make exceptional African travel experiences accessible
                                through thoughtful planning and personalised service.
                            </h3>
                            <p style={{ color: '#526071' }}>
                                By pairing curated destination knowledge with attentive,
                                individualised itinerary design, we remove the complexity of
                                multi-destination African travel so every guest can focus on the
                                joy of discovery.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            {/* Travel Philosophy: Luxury & Accessibility */}
            <section className="section section-white">
                <div className="container">
                    <div className="editorial-split">
                        <div className="editorial-image-frame">
                            <img
                                src={PHILOSOPHY_IMAGE}
                                alt="Tranquil turquoise shoreline and traditional dhow in Zanzibar"
                                loading="lazy"
                                onError={handleImageError}
                            />
                        </div>

                        <div>
                            <SectionTitle
                                align="left"
                                subtitle="Our Travel Philosophy"
                                title="Where Ultra-Luxury Meets Accessible Elegance"
                                description="True luxury is not defined by exclusivity alone—it is found in thoughtful pacing, authentic connection, and feeling genuinely cared for throughout your journey."
                            />
                            <p style={{ color: '#526071', marginBottom: '1.25rem' }}>
                                AVELORA bridges two complementary worlds: bespoke ultra-luxury
                                experiences—such as private fly-in conservancy villas and
                                exclusive island charters—and carefully selected
                                accessible-luxury holiday packages designed with transparent
                                value.
                            </p>
                            <p style={{ color: '#526071', marginBottom: '2rem' }}>
                                Our journeys welcome international visitors, couples,
                                honeymooners, families, private groups, and independent
                                adventurers seeking meaningful time in Africa’s finest settings.
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                <Button variant="primary" onClick={() => onNavigate('services')}>
                                    Explore Our Services
                                </Button>
                                <Button variant="outline" onClick={() => onNavigate('gallery')}>
                                    Browse Destination Gallery
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="section section-ivory">
                <div className="container">
                    <SectionTitle
                        subtitle="What Guides Us"
                        title="Our Six Core Values"
                        description="Every itinerary, recommendation, and guest interaction at AVELORA is anchored in six enduring principles."
                    />

                    <div className="grid-3">
                        {CORE_VALUES.map((value) => (
                            <article key={value.number} className="value-card">
                                <span className="card-number">{value.number}</span>
                                <h3 style={{ fontSize: '1.45rem', marginBottom: '0.65rem' }}>
                                    {value.title}
                                </h3>
                                <p style={{ color: '#526071', fontSize: '0.94rem' }}>
                                    {value.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Closing Call to Action */}
            <section className="section section-navy">
                <div className="container" style={{ textAlign: 'center' }}>
                    <SectionTitle
                        subtitle="Plan With Us"
                        title="Ready to Shape Your African Itinerary?"
                        description="Explore our signature travel services or request a tailored quotation from our travel specialists."
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
                            onClick={() => onRequestQuote('Bespoke African Journey')}
                        >
                            Request a Personalised Quote
                        </Button>
                        <Button
                            variant="outline-light"
                            onClick={() => onNavigate('registration')}
                        >
                            Complete Traveller Profile
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;