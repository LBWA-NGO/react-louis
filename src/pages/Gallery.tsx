import React, { useState } from "react";
import { Calendar, X } from "lucide-react";

const gallery = {
  2024: [
    { image: "https://i.postimg.cc/85D6b3sp/IMG-0001.jpg", },
    { image: "https://i.postimg.cc/6pv4xwv6/IMG-0002.jpg", },
    { image: "https://i.postimg.cc/28JLt33X/IMG-0003.jpg", },
    { image: "https://i.postimg.cc/fbQtwFcc/IMG-0004.jpg", },
    { image: "https://i.postimg.cc/zX3RpTDg/IMG-0005.jpg", },
    { image: "https://i.postimg.cc/mr3chwj0/IMG-0006.jpg", },
    { image: "https://i.postimg.cc/tJJ7SHbj/IMG-0007.jpg", }
  ],
  2023: [],
  2022: [],
};

const placeholderImage = "https://via.placeholder.com/400x300?text=No+Image"; // Default image

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Photo Gallery</h1>
        
      </div>

      {Object.entries(gallery)
        .reverse()
        .map(([year, images]) => (
          <div key={year} className="mb-16">
            <div className="flex items-center mb-8">
              <Calendar className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">{year}</h2>
            </div>

            {images.length > 0 ? (
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {images.map((item, index) => (
                  <div
                    key={index}
                    className="relative group cursor-pointer"
                    onClick={() => setSelectedImage(item.image)}
                  >
                    <img
                      src={item.image || placeholderImage}
                      
                      className="w-full h-64 object-cover rounded-lg transition-opacity duration-300 opacity-0"
                      loading="lazy"
                      onLoad={(e) => e.currentTarget.classList.add("opacity-100")}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-200 rounded-lg flex items-center justify-center">
                      
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No images available for {year}.</p>
            )}
          </div>
        ))}

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)} 
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()} 
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
