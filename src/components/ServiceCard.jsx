import Button from './Button';

const FALLBACK_IMAGE =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'><rect width='800' height='500' fill='%23142B49'/><text x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23C6A66B' font-family='Georgia, serif' font-size='28'>AVELORA JOURNEYS</text></svg>";

function ServiceCard({ service, onEnquire }) {
    const { number, title, priceLabel, image, description, experiences } = service;

    const handleImageError = (event) => {
        event.currentTarget.onerror = null;
        event.currentTarget.src = FALLBACK_IMAGE;
    };

    return (
        <article className="service-card">
            <div className="service-image-wrap">
                <img
                    src={image}
                    alt={title}
                    className="service-image"
                    loading="lazy"
                    onError={handleImageError}
                />
                {number && (
                    <span className="destination-category-badge">Signature {number}</span>
                )}
            </div>

            <div className="service-body">
                <h3 className="service-title">{title}</h3>
                <div className="service-price-tag">{priceLabel}</div>
                <p className="service-desc">{description}</p>

                <ul className="service-list">
                    {experiences.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>

                <Button
                    variant="primary"
                    fullWidth
                    onClick={() => onEnquire(title)}
                    ariaLabel={`Request a quote for ${title}`}
                >
                    Request a Quote
                </Button>
            </div>
        </article>
    );
}

export default ServiceCard;