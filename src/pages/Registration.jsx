import { useState } from 'react';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import { DESTINATIONS } from '../data/destinations';
import { SERVICES } from '../data/services';

const BANNER_IMAGE =
    'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1800&q=80';

const ACCOMMODATION_OPTIONS = [
    'Boutique 5-Star Safari Lodges & Tented Camps',
    'Luxury Beachfront Resorts & Ocean Villas',
    'Exclusive-Use Private Villas & Conservancies',
    'Classic Accessible-Luxury Hotels & Lodges',
    'Mix of Bush Sanctuaries & Island Retreats',
];

const COMPANION_OPTIONS = [
    'Solo Traveller',
    'Couple / Honeymooners (2 Guests)',
    'Small Family (3–4 Guests)',
    'Extended Family (5–8 Guests)',
    'Private Group of Friends (6+ Guests)',
];

const INTEREST_OPTIONS = [
    'Big Five & Private Game Drives',
    'Great Migration Viewing',
    'Private Island & Dhow Cruises',
    'Fine Dining & Wine Estates',
    'Wellness, Spa & Ocean Retreats',
    'Guided Waterfalls & Scenic Flights',
    'Mountain Trekking & Outdoor Adventure',
    'Authentic Cultural & Heritage Encounters',
];

const INITIAL_FORM_STATE = {
    fullName: '',
    email: '',
    phone: '',
    country: '',
    travelCategories: [],
    favouriteDestinations: [],
    accommodation: '',
    companions: '',
    interests: [],
    additionalPreferences: '',
};

function Registration({ onNavigate, onRequestQuote }) {
    const [formData, setFormData] = useState(INITIAL_FORM_STATE);
    const [errors, setErrors] = useState({});
    const [submittedProfile, setSubmittedProfile] = useState(null);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: '',
            }));
        }
    };

    const handleCheckboxToggle = (field, itemValue) => {
        setFormData((prev) => {
            const currentList = prev[field];
            const updatedList = currentList.includes(itemValue)
                ? currentList.filter((item) => item !== itemValue)
                : [...currentList, itemValue];

            return {
                ...prev,
                [field]: updatedList,
            };
        });

        if (errors[field]) {
            setErrors((prev) => ({
                ...prev,
                [field]: '',
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^[0-9+\-\s()]{7,20}$/;

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Please enter your full name.';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Please enter your email address.';
        } else if (!emailPattern.test(formData.email.trim())) {
            newErrors.email = 'Please enter a valid email address (e.g., jane.doe@example.com).';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Please enter a contact telephone number.';
        } else if (!phonePattern.test(formData.phone.trim())) {
            newErrors.phone = 'Please enter a valid telephone number (7–20 digits, may include + or spaces).';
        }

        if (!formData.country.trim()) {
            newErrors.country = 'Please enter your country of residence.';
        }

        if (formData.travelCategories.length === 0) {
            newErrors.travelCategories = 'Please select at least one preferred travel category.';
        }

        if (formData.favouriteDestinations.length === 0) {
            newErrors.favouriteDestinations = 'Please select at least one favourite African destination.';
        }

        if (!formData.accommodation) {
            newErrors.accommodation = 'Please select your preferred type of accommodation.';
        }

        if (!formData.companions) {
            newErrors.companions = 'Please select your usual number of travel companions.';
        }

        return newErrors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        setSubmittedProfile({ ...formData });
        window.scrollTo({ top: 280, behavior: 'smooth' });
    };

    const handleResetProfile = () => {
        setFormData(INITIAL_FORM_STATE);
        setErrors({});
        setSubmittedProfile(null);
    };

    return (
        <div className="registration-page">
            {/* Page Banner */}
            <section
                className="page-banner"
                style={{ backgroundImage: `url(${BANNER_IMAGE})` }}
            >
                <div className="page-banner-overlay" aria-hidden="true"></div>
                <div className="container">
                    <div className="page-banner-content">
                        <span className="hero-eyebrow">Traveller Preference Profile</span>
                        <h1 className="page-banner-title">Register With AVELORA</h1>
                        <p className="page-banner-subtitle">
                            Complete your personal travel preference profile so our luxury
                            African travel specialists can curate bespoke itineraries tailored
                            to your style.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Registration Form Section */}
            <section className="section section-ivory">
                <div className="container">
                    <SectionTitle
                        subtitle="Bespoke Journey Curation"
                        title="Your Personal Travel Profile"
                        description="Share the destinations, accommodation styles, and experiences that inspire you for tailored itinerary recommendations."
                    />

                    {submittedProfile ? (
                        <div className="form-card">
                            <div className="confirmation-box" role="status" aria-live="polite">
                                <span className="section-subtitle">Registration Confirmed</span>
                                <h3>
                                    Thank you for registering with AVELORA. Your travel profile
                                    has been completed successfully.
                                </h3>
                                <p style={{ color: '#526071', marginBottom: 0 }}>
                                    Welcome, <strong>{submittedProfile.fullName}</strong>. Our
                                    senior travel specialists will use your saved preferences to
                                    tailor your upcoming African journey recommendations.
                                </p>
                            </div>

                            <h4 style={{ fontSize: '1.35rem', marginBottom: '1rem' }}>
                                Summary of Your Registered Travel Preferences
                            </h4>

                            <div className="modal-meta-grid" style={{ marginBottom: '1.5rem' }}>
                                <div className="modal-meta-item">
                                    <span className="modal-meta-label">Traveller &amp; Residence</span>
                                    <span className="modal-meta-value">
                    {submittedProfile.fullName} ({submittedProfile.country})
                  </span>
                                </div>
                                <div className="modal-meta-item">
                                    <span className="modal-meta-label">Contact Details</span>
                                    <span className="modal-meta-value">
                    {submittedProfile.email} | {submittedProfile.phone}
                  </span>
                                </div>
                                <div className="modal-meta-item">
                                    <span className="modal-meta-label">Usual Companions</span>
                                    <span className="modal-meta-value">
                    {submittedProfile.companions}
                  </span>
                                </div>
                            </div>

                            <div className="feature-card" style={{ marginBottom: '1.75rem' }}>
                                <p style={{ marginBottom: '0.6rem' }}>
                                    <strong>Preferred Accommodation:</strong>{' '}
                                    {submittedProfile.accommodation}
                                </p>
                                <p style={{ marginBottom: '0.6rem' }}>
                                    <strong>Preferred Travel Categories:</strong>{' '}
                                    {submittedProfile.travelCategories.join(', ')}
                                </p>
                                <p style={{ marginBottom: '0.6rem' }}>
                                    <strong>Favourite African Destinations:</strong>{' '}
                                    {submittedProfile.favouriteDestinations.join(', ')}
                                </p>
                                {submittedProfile.interests.length > 0 && (
                                    <p style={{ marginBottom: '0.6rem' }}>
                                        <strong>Travel Interests:</strong>{' '}
                                        {submittedProfile.interests.join(', ')}
                                    </p>
                                )}
                                {submittedProfile.additionalPreferences.trim() && (
                                    <p style={{ marginBottom: 0 }}>
                                        <strong>Additional Notes:</strong>{' '}
                                        {submittedProfile.additionalPreferences}
                                    </p>
                                )}
                            </div>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                <Button
                                    variant="primary"
                                    onClick={() =>
                                        onRequestQuote(
                                            `Registered Traveller Enquiry: ${submittedProfile.favouriteDestinations[0]}`
                                        )
                                    }
                                >
                                    Request a Quote With This Profile
                                </Button>
                                <Button
                                    variant="outline"
                                    onClick={() => setSubmittedProfile(null)}
                                >
                                    Edit Profile Preferences
                                </Button>
                                <Button variant="gold" onClick={handleResetProfile}>
                                    Start a New Registration
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <form className="form-card" onSubmit={handleSubmit} noValidate>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="reg-fullName">
                                        Full Name *
                                    </label>
                                    <input
                                        id="reg-fullName"
                                        name="fullName"
                                        type="text"
                                        className="form-input"
                                        placeholder="e.g., Jane Doe"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                    />
                                    {errors.fullName && (
                                        <span className="error-text">{errors.fullName}</span>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="reg-email">
                                        Email Address *
                                    </label>
                                    <input
                                        id="reg-email"
                                        name="email"
                                        type="email"
                                        className="form-input"
                                        placeholder="e.g., jane.doe@example.com"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                    {errors.email && (
                                        <span className="error-text">{errors.email}</span>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="reg-phone">
                                        Telephone Number *
                                    </label>
                                    <input
                                        id="reg-phone"
                                        name="phone"
                                        type="tel"
                                        className="form-input"
                                        placeholder="e.g., +254 700 790 480"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                    />
                                    {errors.phone && (
                                        <span className="error-text">{errors.phone}</span>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="reg-country">
                                        Country of Residence *
                                    </label>
                                    <input
                                        id="reg-country"
                                        name="country"
                                        type="text"
                                        className="form-input"
                                        placeholder="e.g., Kenya, South Africa, United Kingdom"
                                        value={formData.country}
                                        onChange={handleInputChange}
                                    />
                                    {errors.country && (
                                        <span className="error-text">{errors.country}</span>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="reg-accommodation">
                                        Preferred Type of Accommodation *
                                    </label>
                                    <select
                                        id="reg-accommodation"
                                        name="accommodation"
                                        className="form-select"
                                        value={formData.accommodation}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Select accommodation preference...</option>
                                        {ACCOMMODATION_OPTIONS.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.accommodation && (
                                        <span className="error-text">{errors.accommodation}</span>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="reg-companions">
                                        Number of Usual Travel Companions *
                                    </label>
                                    <select
                                        id="reg-companions"
                                        name="companions"
                                        className="form-select"
                                        value={formData.companions}
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Select companion group size...</option>
                                        {COMPANION_OPTIONS.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.companions && (
                                        <span className="error-text">{errors.companions}</span>
                                    )}
                                </div>

                                <div className="form-group full-width">
                  <span className="form-label">
                    Preferred Travel Categories * (Select all that apply)
                  </span>
                                    <div className="checkbox-grid">
                                        {SERVICES.map((service) => (
                                            <label key={service.id} className="checkbox-label">
                                                <input
                                                    type="checkbox"
                                                    checked={formData.travelCategories.includes(
                                                        service.title
                                                    )}
                                                    onChange={() =>
                                                        handleCheckboxToggle(
                                                            'travelCategories',
                                                            service.title
                                                        )
                                                    }
                                                />
                                                <span>{service.title}</span>
                                            </label>
                                        ))}
                                    </div>
                                    {errors.travelCategories && (
                                        <span className="error-text">
                      {errors.travelCategories}
                    </span>
                                    )}
                                </div>

                                <div className="form-group full-width">
                  <span className="form-label">
                    Favourite African Destinations * (Select all that inspire
                    you)
                  </span>
                                    <div className="checkbox-grid">
                                        {DESTINATIONS.map((destination) => (
                                            <label key={destination.id} className="checkbox-label">
                                                <input
                                                    type="checkbox"
                                                    checked={formData.favouriteDestinations.includes(
                                                        destination.name
                                                    )}
                                                    onChange={() =>
                                                        handleCheckboxToggle(
                                                            'favouriteDestinations',
                                                            destination.name
                                                        )
                                                    }
                                                />
                                                <span>
                          {destination.name} ({destination.country})
                        </span>
                                            </label>
                                        ))}
                                    </div>
                                    {errors.favouriteDestinations && (
                                        <span className="error-text">
                      {errors.favouriteDestinations}
                    </span>
                                    )}
                                </div>

                                <div className="form-group full-width">
                  <span className="form-label">
                    Special Travel Interests (Optional)
                  </span>
                                    <div className="checkbox-grid">
                                        {INTEREST_OPTIONS.map((interest) => (
                                            <label key={interest} className="checkbox-label">
                                                <input
                                                    type="checkbox"
                                                    checked={formData.interests.includes(interest)}
                                                    onChange={() =>
                                                        handleCheckboxToggle('interests', interest)
                                                    }
                                                />
                                                <span>{interest}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="form-group full-width">
                                    <label
                                        className="form-label"
                                        htmlFor="reg-additionalPreferences"
                                    >
                                        Additional Travel Preferences or Celebrations (Optional)
                                    </label>
                                    <textarea
                                        id="reg-additionalPreferences"
                                        name="additionalPreferences"
                                        className="form-textarea"
                                        placeholder="Share preferred travel months, dietary requirements, milestone celebrations (honeymoon, anniversary, birthday), or specific wildlife wishes..."
                                        value={formData.additionalPreferences}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <p
                                style={{
                                    fontSize: '0.84rem',
                                    color: '#526071',
                                    marginBottom: '1.5rem',
                                }}
                            >
                                * Required fields. Your travel preferences help our specialists
                                prepare bespoke itinerary recommendations tailored to your group.
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                <Button type="submit" variant="primary">
                                    Complete Travel Profile
                                </Button>
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={handleResetProfile}
                                >
                                    Clear Form
                                </Button>
                                <Button
                                    type="button"
                                    variant="gold"
                                    onClick={() => onNavigate('gallery')}
                                >
                                    Browse Destination Gallery
                                </Button>
                            </div>
                        </form>
                    )}
                </div>
            </section>
        </div>
    );
}

export default Registration;