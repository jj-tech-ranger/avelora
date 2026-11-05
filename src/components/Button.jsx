function Button({
                    children,
                    variant = 'primary',
                    size = 'md',
                    fullWidth = false,
                    type = 'button',
                    onClick,
                    ariaLabel,
                }) {
    const variantClass = {
        primary: 'btn-primary',
        gold: 'btn-gold',
        outline: 'btn-outline',
        'outline-light': 'btn-outline-light',
    }[variant] || 'btn-primary';

    const sizeClass = size === 'sm' ? 'btn-sm' : '';
    const widthClass = fullWidth ? 'btn-full' : '';

    return (
        <button
            type={type}
            className={`btn ${variantClass} ${sizeClass} ${widthClass}`.trim()}
            onClick={onClick}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );
}

export default Button;