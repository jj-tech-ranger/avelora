import Button from './Button';

const FALLBACK_IMAGE =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'><rect width='100%' height='100%' fill='%23142B49'/><text x='50%' y='50%' fill='%23C6A66B' font-family='sans-serif' font-size='24' text-anchor='middle'>Image Unavailable</text></svg>";

function DestinationCard({ destination, onEnquire, onReadMore }) {
    const { name, country, category, duration, image, description } = destination;

    const handleImageError = (event) => {
        event.currentTarget.onerror = null;
        event.currentTarget.src = FALLBACK_IMAGE;
    };

    return (
        <article className="destination-card">
            <div
                className="destination-image-wrap"
                onClick={() => onReadMore && onReadMore(destination)}
                style={{ cursor: onReadMore ? 'pointer' : 'default' }}
            >
                <img
                    src={image}
                    alt={`${name}, ${country}`}
                    className="destination-image"
                    loading="lazy"
                    onError={handleImageError}
                />
                <span className="destination-category-badge">{category}</span>
            </div>

            <div className="destination-body">
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '0.35rem',
                    }}
                >
          <span className="destination-location" style={{ marginBottom: 0 }}>
            {country}
          </span>
                    <span style={{ fontSize: '0.78rem', color: '#526071', fontWeight: 500 }}>
            {duration || 'Tailored Duration'}
          </span>
                </div>

                <h3 className="destination-title">{name}</h3>
                <p className="destination-desc">{description}</p>

                <div className="destination-footer">
                    {onReadMore && (
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => onReadMore(destination)}
                            ariaLabel={`Read more about ${name}`}
                        >
                            Read More
                        </Button>
                    )}
                    <Button
                        variant="primary"
                        size="sm"
                        onClick={() => onEnquire(name)}
                        ariaLabel={`Enquire about ${name}`}
                    >
                        Enquire
                    </Button>
                </div>
            </div>
        </article>
    );
}

export default DestinationCard;