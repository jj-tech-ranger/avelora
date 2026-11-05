function SectionTitle({
                          subtitle,
                          title,
                          description,
                          align = 'center',
                      }) {
    const alignmentClass = align === 'center' ? 'center' : '';

    return (
        <div className={`section-title-wrapper ${alignmentClass}`.trim()}>
            {subtitle && <span className="section-subtitle">{subtitle}</span>}
            <h2 className="section-heading">{title}</h2>
            <div className="section-divider" aria-hidden="true"></div>
            {description && <p className="section-description">{description}</p>}
        </div>
    );
}

export default SectionTitle;