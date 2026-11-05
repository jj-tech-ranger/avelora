import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';

const BANNER_IMAGE =
    'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1800&q=80';

const STORY_IMAGE =
    'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1000&q=80';

const PHILOSOPHY_IMAGE =
    'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1000&q=80';

const FALLBACK_IMAGE =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'><rect width='100%' height='100%' fill='%23142B49'/><text x='50%' y='50%' font-family='serif' font-size='24' fill='%23C6A66B' text-anchor='middle'>AVELORA Experience</text></svg>";

const CORE_VALUES = [
    {
        number: '01',
        title: 'Excellence',
        description:
            'We hold every element of your journey—from regional flights and private guides to sanctuary accommodations—to the highest standard.',
    },
    {
        number: '02',
        title: 'Personalisation',
        description:
            'No two travellers share the exact same rhythm. We listen carefully and shape each itinerary around your individual preferences.',
    },
    {
        number: '03',
        title: 'Authentic Experiences',
        description:
            'We connect guests with genuine wildlife encounters, natural landscapes, and respectful cultural exchanges across Africa.',
    },
    {
        number: '04',
        title: 'Reliability',
        description:
            'Clear communication, transparent guide pricing, and attentive coordination give you peace of mind from first contact to return home.',
    },
    {
        number: '05',
        title: 'Appreciation of African Destinations',
        description:
            'We celebrate the extraordinary diversity of the African continent—from equatorial glaciers and savannas to pristine coastal archipelagos.',
    },
    {
        number: '06',
        title: 'Attention to Detail',
        description:
            'Thoughtful touches—whether a private bush breakfast, a quiet villa transfer, or tailored family pacing—make all the difference.',
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
                                description="AVELORA is a dedicated luxury African travel agency designed to showcase the continent’s finest wilderness, wildlife, and coastal destinations."
                            />
                            <p style={{ color: '#526071', marginBottom: '1.25rem' }}>
                                Across Africa, every region tells a distinct story—from the
                                thunderous mist of Victoria Falls and the endless horizons of
                                the Serengeti to the spice-scented breezes of Zanzibar and the
                                granite coves of the Seychelles. AVELORA brings these journeys
                                together under one refined, welcoming travel experience.
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
                                    fontSize: '0.92rem',
                                    color: '#142B49',
                                    backgroundColor: '#F5F3EE',
                                    padding: '1rem 1.25rem',
                                    borderRadius: '12px',
                                    borderLeft: '3px solid #C6A66B',
                                }}
                            >
                                <strong>The AVELORA Promise:</strong> Whether you are planning a
                                curated boutique holiday or an exclusive-use private charter,
                                every itinerary is handcrafted with personal care and local
                                insight.
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
                    <div className="grid-2">
                        <div
                            className="about-card"
                            style={{
                                backgroundColor: '#FFFFFF',
                                padding: '2.5rem',
                                borderRadius: '16px',
                                border: '1px solid #E6E1D6',
                                boxShadow: '0 8px 30px rgba(20, 43, 73, 0.04)',
                            }}
                        >
                            <div
                                style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '12px',
                                    backgroundColor: '#F5F3EE',
                                    color: '#C6A66B',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 700,
                                    marginBottom: '1.25rem',
                                }}
                            >
                                01
                            </div>
                            <h2
                                className="section-title"
                                style={{ fontSize: '1.8rem', marginBottom: '1rem' }}
                            >
                                Our Vision
                            </h2>
                            <p style={{ color: '#526071', lineHeight: 1.7 }}>
                                To inspire extraordinary journeys through Africa’s most
                                remarkable destinations while upholding a deep respect for
                                wildlife conservation, natural heritage, and local communities.
                            </p>
                        </div>

                        <div
                            className="about-card"
                            style={{
                                backgroundColor: '#FFFFFF',
                                padding: '2.5rem',
                                borderRadius: '16px',
                                border: '1px solid #E6E1D6',
                                boxShadow: '0 8px 30px rgba(20, 43, 73, 0.04)',
                            }}
                        >
                            <div
                                style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '12px',
                                    backgroundColor: '#F5F3EE',
                                    color: '#C6A66B',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 700,
                                    marginBottom: '1.25rem',
                                }}
                            >
                                02
                            </div>
                            <h2
                                className="section-title"
                                style={{ fontSize: '1.8rem', marginBottom: '1rem' }}
                            >
                                Our Mission
                            </h2>
                            <p style={{ color: '#526071', lineHeight: 1.7 }}>
                                To make exceptional African travel experiences accessible
                                through thoughtful planning and personalised service—ensuring
                                every guest feels valued, informed, and cared for throughout
                                their journey.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Travel Philosophy */}
            <section className="section section-white">
                <div className="container">
                    <div className="editorial-split reverse">
                        <div>
                            <SectionTitle
                                align="left"
                                subtitle="Travel Philosophy"
                                title="Unhurried, Thoughtful &amp; Crafted Around You"
                                description="We believe true luxury lies in space, time, and effortless orchestration rather than superficial excess."
                            />
                            <p style={{ color: '#526071', marginBottom: '1.25rem' }}>
                                Africa is best experienced when given time to unfold naturally.
                                Whether observing wildlife movements from a secluded luxury
                                tented camp or enjoying private dining beneath a starry night
                                sky, our travel philosophy prioritises depth over rush.
                            </p>
                            <p style={{ color: '#526071', marginBottom: '1.5rem' }}>
                                Each itinerary balances iconic highlights with quieter,
                                exclusive moments—ensuring guests enjoy rich wildlife viewings
                                alongside restful luxury accommodations.
                            </p>
                            <Button
                                variant="primary"
                                onClick={() =>
                                    onRequestQuote('Tailored African Travel Experience')
                                }
                            >
                                Discuss Your Ideas With Us
                            </Button>
                        </div>
                        <div className="editorial-image-frame">
                            <img
                                src={PHILOSOPHY_IMAGE}
                                alt="Luxury safari lodge deck overlooking the wilderness"
                                loading="lazy"
                                onError={handleImageError}
                            />
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
                        description="Every itinerary, recommendation, and guest interaction at AVELORA is anchored in these principles."
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
                        description="Explore our signature travel services or request a tailored quotation from our team."
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