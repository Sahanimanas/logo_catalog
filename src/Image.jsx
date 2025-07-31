const ImagePlaceholder = ({ src, alt, className = "", keys }) => {
    Number(keys);
    return (
        <div className={`image-placeholder shadow-md hover:shadow-xl transition-shadow duration-300 ${className}`} key={keys}>
            <img onClick={() => (window.location.hash = keys)} src={src} alt={alt} className="w-full h-full object-cover rounded-lg" />
        </div>
    );
};

export default ImagePlaceholder;
