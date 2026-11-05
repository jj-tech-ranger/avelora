import { useState, useEffect } from 'react';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import { DESTINATIONS } from '../data/destinations';
import { SERVICES } from '../data/services';

const BANNER_IMAGE =
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80';

const BUDGET_OPTIONS = [
    'Illustrative: $3,000 – $5,000 per guest (Accessible Luxury)',
    'Illustrative: $5,000 – $8,500 per guest (Classic 5-Star)',
    'Illustrative: $8,500 – $15,000 per guest (Bespoke Private)',
    'Illustrative: $15,000+ per guest (Ultra-Luxury Exclusive Use)',
    'Flexible / Please advise based on itinerary',
];

const ACCOMMODATION_CHOICES = [
    'Luxury Tented Safari Camps & Eco-Lodges',
    'Boutique Beachfront Resorts & Ocean Suites',
    'Exclusive-Use Private Safari Villas',
    'Combined Bush Lodge & Island Retreat',
    'Family-Friendly Interconnecting Suites',
];

const ENQUIRY_INTEREST_OPTIONS = [
    'Private 4x4 Game Drives',
    'Big Five & Great Migration',
    'Tropical Island Relaxation',
    'Romantic & Honeymoon Experiences',
    'Waterfalls & Scenic Helicopter Flights',
    'Guided Cultural & Heritage Tours',
];

const INITIAL_CONTACT_FORM = {
    fullName: '',
    email: '',
    subject: '',
    message: '',
};

const INITIAL_ENQUIRY_FORM = {
    name: '',
    email: '',
    destinationOrCategory: '',
    shortMessage: '',
    travelDates: '',
    adults: '2',
    children: '0',
    budget: '',
    accommodation: '',
    interests: [],
    specialRequests: '',
};

function Contact({ initialSubject = '', onNavigate }) {
    // Direct Contact Form State
    const [contactForm, setContactForm] = useState(INITIAL_CONTACT_FORM);
    const [contactErrors, setContactErrors] = useState({});
    const [submittedContact, setSubmittedContact] = useState(null);

    // Two-Stage Quotation Enquiry State
    const [enquiryStage, setEnquiryStage] = useState(1);
    const [enquiryForm, setEnquiryForm] = useState({
        ...INITIAL_ENQUIRY_FORM,
        destinationOrCategory: initialSubject || '',
    });
    const [enquiryErrors, setEnquiryErrors] = useState({});
    const [submittedEnquiry, setSubmittedEnquiry] = useState(null);

    // Interactive Demo Notice for WhatsApp & Social Links
    const [demoChannelNotice, setDemoChannelNotice] = useState('');

    useEffect(() => {
        if (initialSubject) {
            setEnquiryForm((prev) => ({
                ...prev,
                destinationOrCategory: initialSubject,
            }));
            setSubmittedEnquiry(null);
            setEnquiryStage(1);
        }
    }, [initialSubject]);

    const destinationAndCategoryOptions = [
        ...SERVICES.map((service) => `Service: ${service.title}`),
        ...DESTINATIONS.map(
            (destination) => `Destination: ${destination.name} (${destination.country})`
        ),
        'Custom Multi-Destination African Journey',
    ];

    // --- Direct Contact Form Handlers ---
    const handleContactChange = (event) => {
        const { name, value } = event.target;
        setContactForm((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (contactErrors[name]) {
            setContactErrors((prev) => ({
                ...prev,
                [name]: '',
            }));
        }
    };

    const validateContactForm = () => {
        const errors = {};
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!contactForm.fullName.trim()) {
            errors.fullName = 'Please enter your full name.';
        }
        if (!contactForm.email.trim()) {
            errors.email = 'Please enter your email address.';
        } else if (!emailPattern.test(contactForm.email.trim())) {
            errors.email = 'Please enter a valid email address.';
        }
        if (!contactForm.subject.trim()) {
            errors.subject = 'Please enter a subject for your message.';
        }
        if (!contactForm.message.trim()) {
            errors.message = 'Please enter your message.';
        }

        return errors;
    };

    const handleContactSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validateContactForm();

        if (Object.keys(validationErrors).length > 0) {
            setContactErrors(validationErrors);
            return;
        }

        setContactErrors({});
        setSubmittedContact({ ...contactForm });
    };

    const handleContactReset = () => {
        setContactForm(INITIAL_CONTACT_FORM);
        setContactErrors({});
        setSubmittedContact(null);
    };

    // --- Two-Stage Quotation Enquiry Handlers ---
    const handleEnquiryChange = (event) => {
        const { name, value } = event.target;
        setEnquiryForm((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (enquiryErrors[name]) {
            setEnquiryErrors((prev) => ({
                ...prev,
                [name]: '',
            }));
        }
    };

    const handleEnquiryInterestToggle = (interest) => {
        setEnquiryForm((prev) => {
            const exists = prev.interests.includes(interest);
            const updated = exists
                ? prev.interests.filter((item) => item !== interest)
                : [...prev.interests, interest];
            return {
                ...prev,
                interests: updated,
            };
        });
    };

    const validateStageOne = () => {
        const errors = {};
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!enquiryForm.name.trim()) {
            errors.name = 'Please enter your name.';
        }
        if (!enquiryForm.email.trim()) {
            errors.email = 'Please enter your email address.';
        } else if (!emailPattern.test(enquiryForm.email.trim())) {
            errors.email = 'Please enter a valid email address.';
        }
        if (!enquiryForm.destinationOrCategory.trim()) {
            errors.destinationOrCategory =
                'Please select or enter a preferred destination or travel category.';
        }
        if (!enquiryForm.shortMessage.trim()) {
            errors.shortMessage =
                'Please provide a brief overview of what you would like to experience.';
        }

        return errors;
    };

    const validateStageTwo = () => {
        const errors = {};

        if (!enquiryForm.travelDates.trim()) {
            errors.travelDates =
                'Please enter your preferred travel dates or month.';
        }
        if (
            enquiryForm.adults === '' ||
            Number.isNaN(Number(enquiryForm.adults)) ||
            Number(enquiryForm.adults) < 1
        ) {
            errors.adults = 'Please include at least 1 adult traveller.';
        }
        if (
            enquiryForm.children === '' ||
            Number.isNaN(Number(enquiryForm.children)) ||
            Number(enquiryForm.children) < 0
        ) {
            errors.children = 'Number of children cannot be negative.';
        }
        if (!enquiryForm.budget) {
            errors.budget = 'Please select an approximate budget range.';
        }
        if (!enquiryForm.accommodation) {
            errors.accommodation = 'Please select an accommodation preference.';
        }

        return errors;
    };

    const handleProceedToStageTwo = (event) => {
        event.preventDefault();
        const stageOneErrors = validateStageOne();

        if (Object.keys(stageOneErrors).length > 0) {
            setEnquiryErrors(stageOneErrors);
            return;
        }

        setEnquiryErrors({});
        setEnquiryStage(2);
    };

    const handleFinalEnquirySubmit = (event) => {
        event.preventDefault();
        const stageTwoErrors = validateStageTwo();

        if (Object.keys(stageTwoErrors).length > 0) {
            setEnquiryErrors(stageTwoErrors);
            return;
        }

        setEnquiryErrors({});
        setSubmittedEnquiry({ ...enquiryForm });
    };

    const handleResetEnquiry = () => {
        setEnquiryForm(INITIAL_ENQUIRY_FORM);
        setEnquiryErrors({});
        setSubmittedEnquiry(null);
        setEnquiryStage(1);
    };

    return (
        <div className="contact-page">
            {/* Page Banner */}
            <section
                className="page-banner"
                style={{ backgroundImage: `url(${BANNER_IMAGE})` }}
            >
                <div className="page-banner-overlay" aria-hidden="true"></div>
                <div className="container">
                    <div className="page-banner-content">
                        <span className="hero-eyebrow">Personal Travel Concierge</span>
                        <h1 className="page-banner-title">
                            Contact Us & Request a Quotation
                        </h1>
                        <p className="page-banner-subtitle">
                            Begin planning your personalised African journey with our two-stage
                            quotation enquiry or send a direct message to our travel desk.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 1: Two-Stage Quotation Enquiry Experience */}
            <section className="section section-ivory">
                <div className="container">
                    <SectionTitle
                        subtitle="Tailored Holiday Quotations"
                        title="Two-Stage Personalised Travel Enquiry"
                        description="Start with a quick overview in Stage 1, then share your travel dates, party size, and accommodation preferences in Stage 2."
                    />

                    {submittedEnquiry ? (
                        <div className="form-card">
                            <div className="confirmation-box" role="status" aria-live="polite">
                <span className="section-subtitle">
                  Quotation Request Confirmed
                </span>
                                <h3>
                                    Thank you, {submittedEnquiry.name}. Your two-stage quotation
                                    enquiry has been received in this demonstration.
                                </h3>
                                <p style={{ color: '#526071', marginBottom: '0.75rem' }}>
                                    We have prepared a demonstration summary of your bespoke trip
                                    request for{' '}
                                    <strong>{submittedEnquiry.destinationOrCategory}</strong>.
                                </p>
                                <p style={{ color: '#526071', fontSize: '0.88rem' }}>
                                    <em>
                                        Demonstration Notice: This is an academic frontend
                                        demonstration. No live reservation, supplier booking, or
                                        external email has been transmitted.
                                    </em>
                                </p>
                            </div>

                            <div className="modal-meta-grid" style={{ marginBottom: '1.5rem' }}>
                                <div className="modal-meta-item">
                                    <span className="modal-meta-label">Preferred Dates</span>
                                    <span className="modal-meta-value">
                    {submittedEnquiry.travelDates}
                  </span>
                                </div>
                                <div className="modal-meta-item">
                                    <span className="modal-meta-label">Travelling Party</span>
                                    <span className="modal-meta-value">
                    {submittedEnquiry.adults} Adult(s),{' '}
                                        {submittedEnquiry.children} Child(ren)
                  </span>
                                </div>
                                <div className="modal-meta-item">
                                    <span className="modal-meta-label">Illustrative Budget</span>
                                    <span className="modal-meta-value">
                    {submittedEnquiry.budget}
                  </span>
                                </div>
                            </div>

                            <div className="feature-card" style={{ marginBottom: '1.75rem' }}>
                                <p style={{ marginBottom: '0.5rem' }}>
                                    <strong>Destination / Category:</strong>{' '}
                                    {submittedEnquiry.destinationOrCategory}
                                </p>
                                <p style={{ marginBottom: '0.5rem' }}>
                                    <strong>Preferred Accommodation:</strong>{' '}
                                    {submittedEnquiry.accommodation}
                                </p>
                                <p style={{ marginBottom: '0.5rem' }}>
                                    <strong>Initial Enquiry Overview:</strong>{' '}
                                    {submittedEnquiry.shortMessage}
                                </p>
                                {submittedEnquiry.interests.length > 0 && (
                                    <p style={{ marginBottom: '0.5rem' }}>
                                        <strong>Selected Interests:</strong>{' '}
                                        {submittedEnquiry.interests.join(', ')}
                                    </p>
                                )}
                                {submittedEnquiry.specialRequests.trim() && (
                                    <p style={{ marginBottom: 0 }}>
                                        <strong>Special Requests:</strong>{' '}
                                        {submittedEnquiry.specialRequests}
                                    </p>
                                )}
                            </div>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                <Button variant="primary" onClick={handleResetEnquiry}>
                                    Submit Another Quotation Enquiry
                                </Button>
                                <Button
                                    variant="outline"
                                    onClick={() => onNavigate('gallery')}
                                >
                                    Explore More Destinations
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div className="form-card">
                            {/* Two-Stage Indicator */}
                            <div className="stage-indicator" role="tablist">
                <span
                    className={`stage-step ${enquiryStage === 1 ? 'active' : ''}`}
                >
                  Stage 1: Short Enquiry Overview
                </span>
                                <span
                                    className={`stage-step ${enquiryStage === 2 ? 'active' : ''}`}
                                >
                  Stage 2: Detailed Travel Preferences
                </span>
                            </div>

                            {enquiryStage === 1 ? (
                                <form onSubmit={handleProceedToStageTwo} noValidate>
                                    <div className="form-grid">
                                        {/* Name */}
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="enq-name">
                                                Your Name *
                                            </label>
                                            <input
                                                id="enq-name"
                                                name="name"
                                                type="text"
                                                className="form-input"
                                                placeholder="e.g., David Kamau"
                                                value={enquiryForm.name}
                                                onChange={handleEnquiryChange}
                                            />
                                            {enquiryErrors.name && (
                                                <span className="error-text">{enquiryErrors.name}</span>
                                            )}
                                        </div>

                                        {/* Email */}
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="enq-email">
                                                Email Address *
                                            </label>
                                            <input
                                                id="enq-email"
                                                name="email"
                                                type="email"
                                                className="form-input"
                                                placeholder="e.g., david@example.com"
                                                value={enquiryForm.email}
                                                onChange={handleEnquiryChange}
                                            />
                                            {enquiryErrors.email && (
                                                <span className="error-text">
                          {enquiryErrors.email}
                        </span>
                                            )}
                                        </div>

                                        {/* Preferred Destination or Travel Category */}
                                        <div className="form-group full-width">
                                            <label
                                                className="form-label"
                                                htmlFor="enq-destinationOrCategory"
                                            >
                                                Preferred Destination or Travel Category *
                                            </label>
                                            <input
                                                id="enq-destinationOrCategory"
                                                name="destinationOrCategory"
                                                type="text"
                                                list="avelora-enquiry-options"
                                                className="form-input"
                                                placeholder="Select from list or type your preferred destination / category..."
                                                value={enquiryForm.destinationOrCategory}
                                                onChange={handleEnquiryChange}
                                            />
                                            <datalist id="avelora-enquiry-options">
                                                {destinationAndCategoryOptions.map((item) => (
                                                    <option key={item} value={item} />
                                                ))}
                                            </datalist>
                                            {enquiryErrors.destinationOrCategory && (
                                                <span className="error-text">
                          {enquiryErrors.destinationOrCategory}
                        </span>
                                            )}
                                        </div>

                                        {/* Short Enquiry Message */}
                                        <div className="form-group full-width">
                                            <label className="form-label" htmlFor="enq-shortMessage">
                                                Short Enquiry Message *
                                            </label>
                                            <textarea
                                                id="enq-shortMessage"
                                                name="shortMessage"
                                                className="form-textarea"
                                                placeholder="Briefly tell us what kind of African journey you are envisioning..."
                                                value={enquiryForm.shortMessage}
                                                onChange={handleEnquiryChange}
                                            />
                                            {enquiryErrors.shortMessage && (
                                                <span className="error-text">
                          {enquiryErrors.shortMessage}
                        </span>
                                            )}
                                        </div>
                                    </div>

                                    <div
                                        style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}
                                    >
                                        <Button type="submit" variant="primary">
                                            Continue to Stage 2: Travel Details
                                        </Button>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={handleResetEnquiry}
                                        >
                                            Reset Enquiry
                                        </Button>
                                    </div>
                                </form>
                            ) : (
                                <form onSubmit={handleFinalEnquirySubmit} noValidate>
                                    <div className="form-grid">
                                        {/* Preferred Travel Dates */}
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="enq-travelDates">
                                                Preferred Travel Dates or Season *
                                            </label>
                                            <input
                                                id="enq-travelDates"
                                                name="travelDates"
                                                type="text"
                                                className="form-input"
                                                placeholder="e.g., August 2027 (10 Nights)"
                                                value={enquiryForm.travelDates}
                                                onChange={handleEnquiryChange}
                                            />
                                            {enquiryErrors.travelDates && (
                                                <span className="error-text">
                          {enquiryErrors.travelDates}
                        </span>
                                            )}
                                        </div>

                                        {/* Approximate Budget */}
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="enq-budget">
                                                Approximate Illustrative Budget *
                                            </label>
                                            <select
                                                id="enq-budget"
                                                name="budget"
                                                className="form-select"
                                                value={enquiryForm.budget}
                                                onChange={handleEnquiryChange}
                                            >
                                                <option value="">Select illustrative budget...</option>
                                                {BUDGET_OPTIONS.map((option) => (
                                                    <option key={option} value={option}>
                                                        {option}
                                                    </option>
                                                ))}
                                            </select>
                                            {enquiryErrors.budget && (
                                                <span className="error-text">
                          {enquiryErrors.budget}
                        </span>
                                            )}
                                        </div>

                                        {/* Number of Adults */}
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="enq-adults">
                                                Number of Adults *
                                            </label>
                                            <input
                                                id="enq-adults"
                                                name="adults"
                                                type="number"
                                                min="1"
                                                max="30"
                                                className="form-input"
                                                value={enquiryForm.adults}
                                                onChange={handleEnquiryChange}
                                            />
                                            {enquiryErrors.adults && (
                                                <span className="error-text">
                          {enquiryErrors.adults}
                        </span>
                                            )}
                                        </div>

                                        {/* Number of Children */}
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="enq-children">
                                                Number of Children (Under 12) *
                                            </label>
                                            <input
                                                id="enq-children"
                                                name="children"
                                                type="number"
                                                min="0"
                                                max="20"
                                                className="form-input"
                                                value={enquiryForm.children}
                                                onChange={handleEnquiryChange}
                                            />
                                            {enquiryErrors.children && (
                                                <span className="error-text">
                          {enquiryErrors.children}
                        </span>
                                            )}
                                        </div>

                                        {/* Accommodation Preference */}
                                        <div className="form-group full-width">
                                            <label
                                                className="form-label"
                                                htmlFor="enq-accommodation"
                                            >
                                                Accommodation Preference *
                                            </label>
                                            <select
                                                id="enq-accommodation"
                                                name="accommodation"
                                                className="form-select"
                                                value={enquiryForm.accommodation}
                                                onChange={handleEnquiryChange}
                                            >
                                                <option value="">
                                                    Select preferred accommodation style...
                                                </option>
                                                {ACCOMMODATION_CHOICES.map((choice) => (
                                                    <option key={choice} value={choice}>
                                                        {choice}
                                                    </option>
                                                ))}
                                            </select>
                                            {enquiryErrors.accommodation && (
                                                <span className="error-text">
                          {enquiryErrors.accommodation}
                        </span>
                                            )}
                                        </div>

                                        {/* Travel Interests */}
                                        <div className="form-group full-width">
                      <span className="form-label">
                        Key Travel Interests (Optional)
                      </span>
                                            <div className="checkbox-grid">
                                                {ENQUIRY_INTEREST_OPTIONS.map((interest) => (
                                                    <label key={interest} className="checkbox-label">
                                                        <input
                                                            type="checkbox"
                                                            checked={enquiryForm.interests.includes(interest)}
                                                            onChange={() =>
                                                                handleEnquiryInterestToggle(interest)
                                                            }
                                                        />
                                                        <span>{interest}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Special Requests */}
                                        <div className="form-group full-width">
                                            <label
                                                className="form-label"
                                                htmlFor="enq-specialRequests"
                                            >
                                                Special Requests or Dietary / Flight Notes (Optional)
                                            </label>
                                            <textarea
                                                id="enq-specialRequests"
                                                name="specialRequests"
                                                className="form-textarea"
                                                placeholder="Share any private charter preferences, accessibility needs, or milestone celebrations..."
                                                value={enquiryForm.specialRequests}
                                                onChange={handleEnquiryChange}
                                            />
                                        </div>
                                    </div>

                                    <div
                                        style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}
                                    >
                                        <Button type="submit" variant="gold">
                                            Submit Complete Quotation Request
                                        </Button>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => setEnquiryStage(1)}
                                        >
                                            Back to Stage 1
                                        </Button>
                                    </div>
                                </form>
                            )}
                        </div>
                    )}
                </div>
            </section>

            {/* Section 2: Direct Contact Information & General Contact Form */}
            <section className="section section-white">
                <div className="container">
                    <SectionTitle
                        subtitle="Get in Touch"
                        title="Contact Information & General Enquiries"
                        description="Have a general question about AVELORA? Reach out using our sample demonstration contact details or send a direct message below."
                    />

                    <div className="contact-layout">
                        {/* Left Column: Demonstration Contact Information & Social Links */}
                        <aside className="contact-info-card">
                            <span className="section-subtitle">Sample Concierge Desk</span>
                            <h3>AVELORA Travel Advisory</h3>
                            <p
                                style={{
                                    color: 'rgba(255, 255, 255, 0.82)',
                                    fontSize: '0.92rem',
                                    marginBottom: '1.75rem',
                                }}
                            >
                                All contact details below are fictional sample credentials
                                created strictly for academic demonstration purposes.
                            </p>

                            <div className="contact-detail-item">
                <span className="contact-detail-label">
                  Demonstration Email
                </span>
                                <span>concierge@avelora-demo.travel</span>
                            </div>

                            <div className="contact-detail-item">
                <span className="contact-detail-label">
                  Demonstration Telephone
                </span>
                                <div>East Africa Desk: +254 (0) 20 555 0198</div>
                                <div>Southern Africa Desk: +27 (0) 21 555 0142</div>
                            </div>

                            <div className="contact-detail-item">
                <span className="contact-detail-label">
                  WhatsApp Concierge (Demonstration)
                </span>
                                <p
                                    style={{
                                        fontSize: '0.88rem',
                                        color: 'rgba(255, 255, 255, 0.8)',
                                        marginBottom: '0.65rem',
                                    }}
                                >
                                    Sample Number: +254 700 555 019 (Academic Placeholder)
                                </p>
                                <button
                                    type="button"
                                    className="social-link"
                                    onClick={() =>
                                        setDemoChannelNotice(
                                            'WhatsApp Concierge Preview: In a production release, this opens a live chat with an AVELORA safari specialist (+254 700 555 019).'
                                        )
                                    }
                                >
                                    <svg
                                        width="15"
                                        height="15"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        aria-hidden="true"
                                    >
                                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                    </svg>
                                    Launch Sample WhatsApp Chat
                                </button>
                            </div>

                            <div className="contact-detail-item">
                <span className="contact-detail-label">
                  Sample Regional Studios
                </span>
                                <div>
                                    Karen Watermark Precinct, Nairobi, Kenya (Sample Office)
                                </div>
                                <div>
                                    V&amp;A Waterfront, Cape Town, South Africa (Sample Office)
                                </div>
                            </div>

                            <div>
                <span className="contact-detail-label">
                  Social Media (Demonstration Links)
                </span>
                                <div className="social-links">
                                    <button
                                        type="button"
                                        className="social-link"
                                        onClick={() =>
                                            setDemoChannelNotice(
                                                'Instagram (@avelora.africa.demo): Demonstration social channel showcasing luxury African safari & island photography.'
                                            )
                                        }
                                    >
                                        <svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            aria-hidden="true"
                                        >
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                        </svg>
                                        Instagram
                                    </button>

                                    <button
                                        type="button"
                                        className="social-link"
                                        onClick={() =>
                                            setDemoChannelNotice(
                                                'Facebook (AVELORA Luxury African Travel Demo): Demonstration community page for curated family and group itineraries.'
                                            )
                                        }
                                    >
                                        <svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            aria-hidden="true"
                                        >
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                        </svg>
                                        Facebook
                                    </button>

                                    <button
                                        type="button"
                                        className="social-link"
                                        onClick={() =>
                                            setDemoChannelNotice(
                                                'TikTok (@avelora.journeys.demo): Demonstration short-form video channel featuring Serengeti, Zanzibar, and Victoria Falls.'
                                            )
                                        }
                                    >
                                        <svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            aria-hidden="true"
                                        >
                                            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                                        </svg>
                                        TikTok
                                    </button>
                                </div>

                                {demoChannelNotice && (
                                    <p
                                        role="status"
                                        style={{
                                            marginTop: '1rem',
                                            padding: '0.75rem 1rem',
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            borderLeft: '3px solid #C6A66B',
                                            fontSize: '0.84rem',
                                            color: '#FFFFFF',
                                        }}
                                    >
                                        {demoChannelNotice}
                                    </p>
                                )}
                            </div>
                        </aside>

                        {/* Right Column: Direct Contact Form */}
                        <div className="form-card" style={{ margin: 0, maxWidth: '100%' }}>
                            <span className="section-subtitle">Direct Message</span>
                            <h3 style={{ fontSize: '1.85rem', marginBottom: '0.5rem' }}>
                                Send Us a Message
                            </h3>
                            <p
                                style={{
                                    color: '#526071',
                                    fontSize: '0.94rem',
                                    marginBottom: '1.5rem',
                                }}
                            >
                                Use this form for general questions, academic project feedback,
                                or press and partnership enquiries.
                            </p>

                            {submittedContact ? (
                                <div
                                    className="confirmation-box"
                                    role="status"
                                    aria-live="polite"
                                >
                                    <span className="section-subtitle">Message Received</span>
                                    <h3>
                                        Thank you for contacting AVELORA. Your message has been
                                        received in this demonstration.
                                    </h3>
                                    <p style={{ color: '#526071', marginBottom: '0.75rem' }}>
                                        <strong>From:</strong> {submittedContact.fullName} (
                                        {submittedContact.email})
                                        <br />
                                        <strong>Subject:</strong> {submittedContact.subject}
                                    </p>
                                    <p style={{ color: '#526071', marginBottom: '1.25rem' }}>
                                        <strong>Message:</strong> {submittedContact.message}
                                    </p>
                                    <p
                                        style={{
                                            color: '#526071',
                                            fontSize: '0.86rem',
                                            marginBottom: '1.25rem',
                                        }}
                                    >
                                        <em>
                                            Note: This is a frontend demonstration; no real email has
                                            been dispatched.
                                        </em>
                                    </p>
                                    <Button variant="primary" onClick={handleContactReset}>
                                        Send Another Message
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleContactSubmit} noValidate>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="contact-fullName">
                                            Full Name *
                                        </label>
                                        <input
                                            id="contact-fullName"
                                            name="fullName"
                                            type="text"
                                            className="form-input"
                                            placeholder="Enter your full name"
                                            value={contactForm.fullName}
                                            onChange={handleContactChange}
                                        />
                                        {contactErrors.fullName && (
                                            <span className="error-text">
                        {contactErrors.fullName}
                      </span>
                                        )}
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label" htmlFor="contact-email">
                                            Email Address *
                                        </label>
                                        <input
                                            id="contact-email"
                                            name="email"
                                            type="email"
                                            className="form-input"
                                            placeholder="Enter your email address"
                                            value={contactForm.email}
                                            onChange={handleContactChange}
                                        />
                                        {contactErrors.email && (
                                            <span className="error-text">{contactErrors.email}</span>
                                        )}
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label" htmlFor="contact-subject">
                                            Subject *
                                        </label>
                                        <input
                                            id="contact-subject"
                                            name="subject"
                                            type="text"
                                            className="form-input"
                                            placeholder="e.g., Question about Family Safari Packages"
                                            value={contactForm.subject}
                                            onChange={handleContactChange}
                                        />
                                        {contactErrors.subject && (
                                            <span className="error-text">
                        {contactErrors.subject}
                      </span>
                                        )}
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label" htmlFor="contact-message">
                                            Message *
                                        </label>
                                        <textarea
                                            id="contact-message"
                                            name="message"
                                            className="form-textarea"
                                            placeholder="Write your message or question here..."
                                            value={contactForm.message}
                                            onChange={handleContactChange}
                                        />
                                        {contactErrors.message && (
                                            <span className="error-text">
                        {contactErrors.message}
                      </span>
                                        )}
                                    </div>

                                    <div
                                        style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}
                                    >
                                        <Button type="submit" variant="primary">
                                            Send Message
                                        </Button>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={handleContactReset}
                                        >
                                            Clear
                                        </Button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;