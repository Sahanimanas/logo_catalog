import ImagePlaceholder from "./Image";
import images from "./assets/images";
const Portfolio = () => {
    // Array of image data from imported images
    const white = images
      .filter((img) => img.startsWith('/white/'))
      .map((src, i) => ({ src, alt: `White Image ${i + 1}`, className: "bg-white" }));

    const golden = images
      .filter((img) => img.startsWith('/golden/'))
      .map((src, i) => ({ src, alt: `Golden Image ${i + 1}`, className: "bg-yellow-400" }));

    const black = images
      .filter((img) => img.startsWith('/black/'))
      .map((src, i) => ({ src, alt: `Black Image ${i + 1}`, className: "bg-black" }));
    return (
      <section id="portfolio" className="mb-12">
        <h2 className="text-4xl mb-4 text-center mt-6 text-white border-0 bg-gray-400">Choose the logo</h2>
        {/* Three vertical sections for desktop, hidden on mobile */}
        <div className="hidden md:grid grid-cols-3 gap-8 lg:gap-1 xl:gap-0 p-6 rounded-xl shadow-lg">
          {/* White images column */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center mt-6 text-white border-0">White logo</h2>
            <div className="flex flex-col gap-6 lg:gap-4 xl:gap-2 items-center">
              {white.map((image, index) => (
                <div className="image-hover-container w-[28vh] h-[28vh] md:w-[32vh] md:h-[32vh] lg:w-[56vh] lg:h-[36vh] xl:w-[64vh] xl:h-[40vh] mb-4 mx-2">
                  <ImagePlaceholder
                    keys={index}
                    src={image.src}
                    alt={image.alt}
                    className={image.className + " h-full w-full object-contain rounded-lg glow-hover"}
                  />
                  <div className="image-hover-overlay">{image.alt}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Golden images column */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center mt-6 text-white border-0">Golden logo</h2>
            <div className="flex flex-col gap-6 lg:gap-4 xl:gap-2 items-center">
              {golden.map((image, index) => (
                <div className="image-hover-container w-[28vh] h-[28vh] md:w-[32vh] md:h-[32vh] lg:w-[56vh] lg:h-[36vh] xl:w-[64vh] xl:h-[40vh] mb-4 mx-2">
                  <ImagePlaceholder
                    keys={index}
                    src={image.src}
                    alt={image.alt}
                    className={image.className + " h-full w-full object-contain rounded-lg glow-hover"}
                  />
                  <div className="image-hover-overlay">{image.alt}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Black images column */}
          <div>
            <h2 className="text-2xl font-bold mb-4 mt-6 text-white border-0 text-center">Black logo</h2>
            <div className="flex flex-col gap-6 lg:gap-4 xl:gap-2 items-center">
              {black.map((image, index) => (
                <div className="image-hover-container w-[28vh] h-[28vh] md:w-[32vh] md:h-[32vh] lg:w-[56vh] lg:h-[36vh] xl:w-[64vh] xl:h-[40vh] mb-4 mx-2">
                  <ImagePlaceholder
                    keys={index}
                    src={image.src}
                    alt={image.alt}
                    className={image.className + " h-full w-full object-contain rounded-lg glow-hover"}
                  />
                  <div className="image-hover-overlay">{image.alt}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Horizontal sections for mobile, hidden on desktop */}
        <div className="block md:hidden p-2">
          <h2 className="text-xl font-bold mb-2 text-center mt-4 text-white border-0">White logo</h2>
          <div className="flex overflow-x-auto gap-4 pb-4">
            {white.map((image, index) => (
              <div className="image-hover-container min-w-[300px] max-w-sm h-[40vw] mb-4 mx-2">
                <ImagePlaceholder
                  keys={index}
                  src={image.src}
                  alt={image.alt}
                  className={image.className + " h-full w-full object-contain rounded-lg glow-hover"}
                />
                <div className="image-hover-overlay">{image.alt}</div>
              </div>
            ))}
          </div>
          <h2 className="text-xl font-bold mb-2 text-center mt-4 text-white border-0">Golden logo</h2>
          <div className="flex overflow-x-auto gap-4 pb-4">
            {golden.map((image, index) => (
              <div className="image-hover-container min-w-[300px] max-w-sm h-[40vw] mb-4 mx-2">
                <ImagePlaceholder
                  keys={index}
                  src={image.src}
                  alt={image.alt}
                  className={image.className + " h-full w-full object-contain rounded-lg glow-hover"}
                />
                <div className="image-hover-overlay">{image.alt}</div>
              </div>
            ))}
          </div>
          <h2 className="text-xl font-bold mb-2 text-center mt-4 text-white border-0">Black logo</h2>
          <div className="flex overflow-x-auto gap-4 pb-4">
            {black.map((image, index) => (
              <div className="image-hover-container min-w-[300px] max-w-sm h-[40vw] mb-4 mx-2">
                <ImagePlaceholder
                  keys={index}
                  src={image.src}
                  alt={image.alt}
                  className={image.className + " h-full w-full object-contain rounded-lg glow-hover"}
                />
                <div className="image-hover-overlay">{image.alt}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};
export default Portfolio;