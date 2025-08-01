import { useState } from "react";
import ImagePlaceholder from "./Image";
import images from "./assets/images";

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => (setSelectedImage(null));

  const white = images
    .filter((img) => img.startsWith('/white/'))
    .map((src, i) => ({ src, alt: `White Image ${i + 1}`, className: "bg-white" }));

  const golden = images
    .filter((img) => img.startsWith('/golden/'))
    .map((src, i) => ({ src, alt: `Golden Image ${i + 1}`, className: "bg-yellow-400" }));

  const black = images
    .filter((img) => img.startsWith('/black/'))
    .map((src, i) => ({ src, alt: `Black Image ${i + 1}`, className: "bg-black" }));

  const renderImages = (imageArray) =>
    imageArray.map((image, index) => (
      <div
        key={index}
        className="image-hover-container cursor-pointer w-[28vh] h-[28vh] md:w-[32vh] md:h-[32vh] lg:w-[56vh] lg:h-[36vh] xl:w-[64vh] xl:h-[40vh] mb-4 mx-2"
        onClick={() => openModal(image)}
      >
        <ImagePlaceholder
          src={image.src}
          alt={image.alt}
          className={image.className + " h-full w-full object-contain rounded-lg glow-hover"}
        />
        <div className="image-hover-overlay">{image.alt}</div>
      </div>
    ));

  return (
    <section id="portfolio" className="mb-12 relative scroll-smooth">
  <h2 className="mb-4 text-center bg-white border-b-4 w-40 p-1 rounded-lg h-full ml-4 mt-4">
    <img src="https://brainwavetechnologie.com/wp-content/uploads/2025/01/brainwaveAsset-1@2x.png" alt="" />
  </h2>

      <h2 className="text-4xl p-8 mb-4 text-center mt-6 text-white bg-gradient-to-r from-[#FF930F] to-[#FF930F]">Product logo</h2>

      {/* Grid for desktop */}
      <div className="hidden md:grid grid-cols-3 gap-8 lg:gap-3 xl:gap-2 p-6 rounded-xl shadow-lg">
        {[
          { title: "White logo", data: white },
          { title: "Golden logo", data: golden },
          { title: "Black logo", data: black }
        ].map(({ title, data }, idx) => (
          <div key={idx}>
            <h2 className="text-2xl font-bold mb-4 text-center mt-6 text-white">{title}</h2>
            <div className="flex flex-col gap-6 lg:gap-4 xl:gap-0 items-center">
              {renderImages(data)}
            </div>
          </div>
        ))}
      </div>

      {/* Scrollable for mobile */}
      <div className="block md:hidden p-2">
        {[
          { title: "White logo", data: white },
          { title: "Golden logo", data: golden },
          { title: "Black logo", data: black }
        ].map(({ title, data }, idx) => (
          <div key={idx}>
            <h2 className="text-xl font-bold mb-2 text-center mt-4 text-white">{title}</h2>
            <div className="flex overflow-x-auto gap-4 pb-4">
              {data.map((image, index) => (
                <div
                  key={index}
                  className="image-hover-container min-w-[300px] max-w-sm h-[40vw] mb-4 mx-2 cursor-pointer"
                  onClick={() => openModal(image)}
                >
                  <ImagePlaceholder
                    src={image.src}
                    alt={image.alt}
                    className={image.className + " h-full w-full object-contain rounded-lg glow-hover"}
                  />
                  <div className="image-hover-overlay">{image.alt}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg p-4 max-w-[90%] max-h-[90%] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 hover:transform hover:scale-130 text-[#FF930F] text-4xl font-bold"
            >
              &times;
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[70vh] max-w-full object-contain mx-auto"
            />
            <p className="text-center mt-2 text-black font-semibold">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
