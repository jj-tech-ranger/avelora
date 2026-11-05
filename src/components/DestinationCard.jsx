import Button from './Button';

const FALLBACK_IMAGE =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'><rect width='800' height='500' fill='%23142B49'/><text x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23C6A66B' font-family='Georgia, serif' font-size='28'>AVELORA AFRICA</text></svg>";

function DestinationCard({ destination, onEnquire }) {
    const { name, country, category, duration, image, description } = destination;

    const handleImageError = (event) => {
        event.currentTarget.onerror = null;
        event.currentTarget.src = FALLBACK_IMAGE;
    };

    return (
        <article className="destination-card">
            <div className="destination-image-wrap">
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
                <span className="destination-location">{country}</span>
                <h3 className="destination-title">{name}</h3>
                <p className="destination-desc">{description}</p>

                <div className="destination-footer">
          <span style={{ fontSize: '0.82rem', color: '#526071', fontWeight: 500 }}>
            {duration || 'Tailored Duration'}
          </span>
                    <Button
                        variant="outline"
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