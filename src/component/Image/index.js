import { useState, forwardRef } from 'react';

import images from '~/assets/images';

const Image = forwardRef(({ src, alt, ...props }, ref) => {
    const [fallback, SetFallback] = useState('');

    const handleError = () => {
        SetFallback(images.noImage);
    };

    return <img ref={ref} alt={alt} src={fallback || src} {...props} onError={handleError} />;
});

export default Image;
