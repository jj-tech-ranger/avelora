import { useState } from 'react';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import { SERVICES } from '../data/services';

const BANNER_IMAGE =
    'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1800&q=80';

const PLANNING_STEPS = [
    {
        step: '01',
        title: 'Personal Consultation',
        description:
            'Share your preferred African destinations, travel companions, dates, and interests through our enquiry form or traveller profile.',
    },
    {
        step: '02',
        title: 'Tailored Itinerary Design',
        description:
            'Our specialists craft a custom route balancing wildlife reserves, coastal retreats, and cultural experiences around your pace.',
    },
    {
        step: '03',
        title: 'Refined Accommodation & Logistics',
        description:
            'We arrange handpicked lodges, boutique island resorts, light-aircraft bush transfers, and private guided excursions.',
    },
    {
        step: '04',
        title: 'Dedicated Journey Support',
        description:
            'Travel with confidence knowing our team coordinates every transition from your arrival in Africa to your departure home.',
    },
];

const TRAVEL_TIERS = {
    accessible: {
        badge: 'Accessible-Luxury Collection',
        title: 'Curated Boutique & Classic Luxury Packages',
        priceRange: 'Illustrative starting range: $3,250 – $5,200 per guest',
        description:
            'Designed for couples, families, and small groups seeking authentic high-comfort African travel with transparent value and thoughtfully selected boutique lodges.',
        highlights: [
            'Handpicked 4-star and boutique 5-star safari lodges and beach resorts',
            'Small-group or private custom 4x4 game drives with experienced rangers',
            'Regional scheduled flights and comfortable private road transfers',
            'Flexible itinerary durations from 4 to 10 nights with selected family rates',
        ],
    },
    ultra: {
        badge: 'Ultra-Luxury Private Collection',
        title: 'Exclusive-Use Villas & Private Charter Sanctuaries',
        priceRange: 'Bespoke private quotation tailored to your party',
        description:
            'Crafted for discerning travellers celebrating milestones or seeking complete privacy across exclusive conservancy camps and secluded island estates.',
        highlights: [
            'Exclusive-use safari villas, private plunge pools, and personal butler service',
            'Private charter bush aircraft, helicopter transfers, and dedicated trackers',
            'Private dhow cruises, starbed sleep-outs, and bespoke culinary dining',
            'Fully customised multi-country routing with 24/7 private concierge care',
        ],
    },
};

function Services({ onNavigate, onRequestQuote }) {
    const [selectedTier, setSelectedTier] = useState('accessible');
    const activeTier = TRAVEL_TIERS[selectedTier];

    return (
        <div className="services-page">
            {/* Page Banner */}
            <section
                className="page-banner"
                style={{ backgroundImage: `url(${BANNER_IMAGE})` }}
            >
                <div className="page-banner-overlay" aria-hidden="true"></div>
                <div className="container">
                    <div className="page-banner-content">
                        <span className="hero-eyebrow">Our Travel Services</span>
                        <h1 className="page-banner-title">
                            Tailored African Travel Experiences
                        </h1>
                        <p className="page-banner-subtitle">
                            Explore our five signature travel categories—each thoughtfully
                            arranged around your interests, travel companions, and preferred
                            level of luxury.
                        </p>
                    </div>
                </div>
            </section>

            {/* Five Signature Services Grid */}
            <section className="section section-ivory">
                <div className="container">
                    <SectionTitle
                        subtitle="Signature Offerings"
                        title="Five Ways to Discover Africa"
                        description="Select any service category below to request a tailored quotation from our travel specialists."
                    />

                    <div className="grid-3">
                        {SERVICES.map((service) => (
                            <ServiceCard
                                key={service.id}
                                service={service}
                                onEnquire={onRequestQuote}
                            />
                        ))}
                    </div>

                    {/* Illustrative Pricing Notice */}
                    <div
                        className="feature-card"
                        style={{
                            marginTop: '2.75rem',
                            backgroundColor: '#FFFFFF',
                            borderLeft: '4px solid #C6A66B',
                        }}
                    >
                        <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>
                            Illustrative Pricing & Custom Quotations Note
                        </h3>
                        <p style={{ color: '#526071', fontSize: '0.94rem' }}>
                            All starting prices displayed on this page are{' '}
                            <strong>illustrative sample figures</strong> provided for academic
                            demonstration purposes and do not represent live supplier tariffs.
                            Because every AVELORA itinerary is customised around travel
                            season, accommodation tier, and group size, our team prepares an
                            individualised quotation for every enquiry.
                        </p>
                    </div>
                </div>
            </section>

            {/* Interactive Travel Tier Comparison (useState) */}
            <section className="section section-white">
                <div className="container">
                    <SectionTitle
                        subtitle="Flexible Luxury Positioning"
                        title="Choose Your Preferred Travel Style"
                        description="AVELORA welcomes both travellers seeking curated accessible-luxury packages and guests desiring ultra-luxury private sanctuaries."
                    />

                    <div className="filter-bar">
                        <button
                            type="button"
                            className={`filter-btn ${
                                selectedTier === 'accessible' ? 'active' : ''
                            }`}
                            onClick={() => setSelectedTier('accessible')}
                        >
                            Accessible-Luxury Packages
                        </button>
                        <button
                            type="button"
                            className={`filter-btn ${
                                selectedTier === 'ultra' ? 'active' : ''
                            }`}
                            onClick={() => setSelectedTier('ultra')}
                        >
                            Ultra-Luxury Private Sanctuaries
                        </button>
                    </div>

                    <div
                        className="form-card"
                        style={{ maxWidth: '920px', backgroundColor: '#F5F3EE' }}
                    >
                        <span className="section-subtitle">{activeTier.badge}</span>
                        <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                            {activeTier.title}
                        </h3>
                        <div
                            className="service-price-tag"
                            style={{ backgroundColor: '#FFFFFF' }}
                        >
                            {activeTier.priceRange}
                        </div>
                        <p style={{ color: '#526071', marginBottom: '1.5rem' }}>
                            {activeTier.description}
                        </p>

                        <ul className="service-list" style={{ marginBottom: '2rem' }}>
                            {activeTier.highlights.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                            <Button
                                variant="primary"
                                onClick={() => onRequestQuote(activeTier.title)}
                            >
                                Enquire About {activeTier.badge}
                            </Button>
                            <Button variant="outline" onClick={() => onNavigate('gallery')}>
                                Explore Matching Destinations
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Craft Your Journey */}
            <section className="section section-ivory">
                <div className="container">
                    <SectionTitle
                        subtitle="Seamless Planning"
                        title="How Your AVELORA Journey Comes Together"
                        description="From your first conversation to your return flight, we make multi-destination African travel effortless."
                    />

                    <div className="grid-4">
                        {PLANNING_STEPS.map((item) => (
                            <article key={item.step} className="feature-card">
                                <span className="card-number">{item.step}</span>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.65rem' }}>
                                    {item.title}
                                </h3>
                                <p style={{ color: '#526071', fontSize: '0.93rem' }}>
                                    {item.description}
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
                        subtitle="Tailored Quotations"
                        title="Let Us Design Your Personalised African Holiday"
                        description="Request a custom quotation for any of our five service categories or complete your Traveller Preference Profile."
                    />
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            gap: '1.25rem',
                        }}
                    >
                        <Button variant="gold" onClick={() => onRequestQuote('')}>
                            Request a Custom Quote
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

export default Services;