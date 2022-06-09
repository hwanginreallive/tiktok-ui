import { useState, forwardRef } from 'react';

import images from '~/assets/images';
import PropTypes from 'prop-types';
const Image = forwardRef(({ src, alt, ...props }, ref) => {
    const [fallback, SetFallback] = useState('');

    const handleError = () => {
        SetFallback(images.noImage);
    };

    return <img ref={ref} alt={alt} src={fallback || src} {...props} onError={handleError} />;
});

forwardRef.prototype = {
    src: PropTypes.string,
    alt: PropTypes.string,
};

export default Image;
