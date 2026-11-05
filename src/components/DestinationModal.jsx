import { useEffect } from 'react';
import Button from './Button';

const FALLBACK_IMAGE =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'><rect width='100%' height='100%' fill='%23142B49'/><text x='50%' y='50%' fill='%23C6A66B' font-family='sans-serif' font-size='24' text-anchor='middle'>AVELORA Luxury African Travel</text></svg>";

function DestinationModal({ destination, onClose, onEnquire }) {
    useEffect(() => {
        if (!destination) return undefined;

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [destination, onClose]);

    if (!destination) {
        return null;
    }

    const {
        name,
        country,
        category,
        duration,
        bestTime,
        idealFor,
        image,
        description,
        longDescription,
        highlights = [],
    } = destination;

    const handleImageError = (event) => {
        event.currentTarget.onerror = null;
        event.currentTarget.src = FALLBACK_IMAGE;
    };

    const handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    const handleEnquireClick = () => {
        onClose();
        onEnquire(name);
    };

    return (
        <div
            className="modal-backdrop"
            onClick={handleBackdropClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-destination-title"
        >
            <div className="modal-container">
                <button
                    type="button"
                    className="modal-close-btn"
                    onClick={onClose}
                    aria-label="Close destination details"
                >
                    ✕ Close
                </button>

                <div className="modal-hero">
                    <img
                        src={image}
                        alt={`${name}, ${country}`}
                        className="modal-hero-image"
                        onError={handleImageError}
                    />
                    <span className="destination-category-badge">{category}</span>
                </div>

                <div className="modal-body">
                    <span className="destination-location">{country}</span>
                    <h2 id="modal-destination-title" className="modal-title">
                        {name}
                    </h2>

                    <div className="modal-meta-grid">
                        <div className="modal-meta-item">
                            <span className="modal-meta-label">Suggested Duration</span>
                            <strong>{duration || 'Tailored Duration'}</strong>
                        </div>
                        <div className="modal-meta-item">
                            <span className="modal-meta-label">Best Time to Visit</span>
                            <strong>{bestTime || 'Year-Round Consultation'}</strong>
                        </div>
                        <div className="modal-meta-item">
                            <span className="modal-meta-label">Ideal For</span>
                            <strong>{idealFor || 'Couples, Families & Private Groups'}</strong>
                        </div>
                    </div>

                    <p className="modal-lead">{description}</p>
                    {longDescription && (
                        <p className="modal-text">{longDescription}</p>
                    )}

                    {highlights.length > 0 && (
                        <div className="modal-highlights">
                            <h3 className="modal-subheading">
                                Signature Experiences in {name}
                            </h3>
                            <ul className="service-list">
                                {highlights.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="modal-actions">
                        <Button
                            variant="primary"
                            onClick={handleEnquireClick}
                            ariaLabel={`Request a personalised quote for ${name}`}
                        >
                            Enquire About {name}
                        </Button>
                        <Button
                            variant="outline"
                            onClick={onClose}
                            ariaLabel="Close destination detail window"
                        >
                            Back to Browsing
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DestinationModal;