import React, {useState, useEffect} from 'react'
import Image1 from "./Images/image1.webp"
import Image2 from "./Images/image2.webp"
import Image3 from "./Images/image3.webp"
import Image4 from "./Images/image4.webp"
const ImageCarousal = () => {
    const images = [Image1, Image2, Image3, Image4];
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const nextSlide = () => {
      setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    };
  
    const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
      return () => clearInterval(interval);
    }, [currentSlide]);
  
    return (
      <div className="relative top-5 p-10 min-h-60">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-slate-300 text-black rounded-lg p-4"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-slate-300 text-black rounded p-4"
        >
          &gt;
        </button>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 bg-gray-800 rounded-full mx-1 cursor-pointer ${
                index === currentSlide ? 'opacity-100' : 'opacity-50'
              }`}
            ></div>
          ))}
        </div>
      </div>
    );
}

export default ImageCarousal