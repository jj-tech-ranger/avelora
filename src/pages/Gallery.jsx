import { useState } from 'react';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import DestinationCard from '../components/DestinationCard';
import {
    DESTINATIONS,
    DESTINATION_CATEGORIES,
} from '../data/destinations';

const BANNER_IMAGE =
    'https://images.unsplash.com/photo-1589979481223-deb893043163?auto=format&fit=crop&w=1800&q=80';

const REGIONAL_HIGHLIGHTS = [
    {
        region: 'East Africa',
        locations: 'Kenya, Tanzania & Uganda',
        description:
            'Home to the Great Migration in the Maasai Mara and Serengeti, the snow-crowned summit of Mount Kilimanjaro, the surging Nile at Murchison Falls, and the spice beaches of Zanzibar and Diani.',
    },
    {
        region: 'Southern Africa',
        locations: 'South Africa, Botswana, Zambia & Zimbabwe',
        description:
            'Where the Zambezi plunges over Victoria Falls, silent mokoro canoes glide across the Okavango Delta, and Table Mountain meets the Atlantic coastline in Cape Town.',
    },
    {
        region: 'Indian Ocean & North Africa',
        locations: 'Seychelles, Mauritius & Morocco',
        description:
            'Secluded granite coves and coral lagoons across the Seychelles and Mauritius, paired with timeless courtyard riads and Atlas Mountain majesty in Marrakech.',
    },
];

function Gallery({ onNavigate, onRequestQuote, onReadMore }) {
    const [selectedCategory, setSelectedCategory] = useState('All Destinations');

    const filteredDestinations =
        selectedCategory === 'All Destinations'
            ? DESTINATIONS
            : DESTINATIONS.filter(
                (destination) => destination.category === selectedCategory
            );

    return (
        <div className="gallery-page">
            {/* Page Banner */}
            <section
                className="page-banner"
                style={{ backgroundImage: `url(${BANNER_IMAGE})` }}
            >
                <div className="page-banner-overlay" aria-hidden="true"></div>
                <div className="container">
                    <div className="page-banner-content">
                        <span className="hero-eyebrow">Destination Explorer & Gallery</span>
                        <h1 className="page-banner-title">
                            Africa’s Most Extraordinary Places
                        </h1>
                        <p className="page-banner-subtitle">
                            Filter our curated collection of 12 iconic African destinations by
                            landscape and travel style, and click Read More on any destination
                            to explore detailed highlights.
                        </p>
                    </div>
                </div>
            </section>

            {/* Interactive Filter & Destination Grid */}
            <section className="section section-ivory">
                <div className="container">
                    <SectionTitle
                        subtitle="Interactive Portfolio"
                        title="Explore Destinations by Category"
                        description="Select a category below to filter the gallery immediately, or click Read More on any destination card to open its full travel guide."
                    />

                    {/* Category Filter Buttons (useState) */}
                    <div
                        className="filter-bar"
                        role="group"
                        aria-label="Destination category filters"
                    >
                        {DESTINATION_CATEGORIES.map((category) => (
                            <button
                                key={category}
                                type="button"
                                className={`filter-btn ${
                                    selectedCategory === category ? 'active' : ''
                                }`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Live Filter Status */}
                    <p className="gallery-count">
                        Showing <strong>{filteredDestinations.length}</strong> of{' '}
                        <strong>{DESTINATIONS.length}</strong> curated destinations in{' '}
                        <strong>{selectedCategory}</strong>
                        {selectedCategory !== 'All Destinations' && (
                            <>
                                {' '}
                                •{' '}
                                <button
                                    type="button"
                                    onClick={() => setSelectedCategory('All Destinations')}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        color: '#142B49',
                                        textDecoration: 'underline',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        fontFamily: 'inherit',
                                    }}
                                >
                                    Reset Filter
                                </button>
                            </>
                        )}
                    </p>

                    {/* Editorial 3-Column Destination Gallery Grid */}
                    <div className="grid-3">
                        {filteredDestinations.map((destination) => (
                            <DestinationCard
                                key={destination.id}
                                destination={destination}
                                onEnquire={onRequestQuote}
                                onReadMore={onReadMore}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Regional Pairing Inspiration */}
            <section className="section section-white">
                <div className="container">
                    <SectionTitle
                        subtitle="Continental Diversity"
                        title="Combining Regions into One Seamless Itinerary"
                        description="Many AVELORA guests combine two complementary landscapes—such as a wildlife conservancy and a warm Indian Ocean island—within a single tailored journey."
                    />

                    <div className="grid-3">
                        {REGIONAL_HIGHLIGHTS.map((item) => (
                            <article key={item.region} className="feature-card">
                                <span className="section-subtitle">{item.locations}</span>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>
                                    {item.region}
                                </h3>
                                <p style={{ color: '#526071', fontSize: '0.94rem' }}>
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
                        subtitle="Personalised Itineraries"
                        title="Found Your Ideal African Destination?"
                        description="Save your favourite destinations in a Traveller Preference Profile or request a bespoke quotation from our specialists."
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
                            onClick={() =>
                                onRequestQuote(
                                    selectedCategory === 'All Destinations'
                                        ? 'Multi-Destination African Journey'
                                        : `${selectedCategory} Enquiry`
                                )
                            }
                        >
                            Request a Quote for {selectedCategory}
                        </Button>
                        <Button
                            variant="outline-light"
                            onClick={() => onNavigate('registration')}
                        >
                            Save Preferences in Traveller Profile
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Gallery;