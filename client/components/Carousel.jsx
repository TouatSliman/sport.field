import React, { useState } from "react";

const Carousel = (props) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? props.images.length - 1 : prev - 1));
  };

  React.useEffect(() => {
    if (!props.images || props.images.length === 0) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % props.images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [props.images]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === props.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto h-fit">
      <div className="overflow-hidden flex justify-center items-center">
        <img
          src={props.images[current]}
          alt={`Slide ${current + 1}`}
          className=" h-fit max-h-80 transition-all duration-500 rounded"
        />
      </div>
      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute top-[calc(50%-16px)] left-4 m-0 bg-white/70 hover:bg-white text-black rounded-full p-2 py-0 shadow"
      >
        &lt;
      </button>
      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-[calc(50%-16px)] right-4 m-0 bg-white/70 hover:bg-white text-black rounded-full p-2 py-0 shadow"
      >
        &gt;
      </button>
      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {props.images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2 w-2 rounded-full ${
              current === idx ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
