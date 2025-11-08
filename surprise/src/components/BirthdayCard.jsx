import React, { useState, useEffect } from 'react';
import { Sparkles, Heart, Gift, X } from 'lucide-react';

// Import images directly
import prasad1 from '/Prasad1.jpg';
import prasad2 from '/Prasad2.jpg';
import prasad3 from '/Prasad3.jpg';
import prasad4 from '/Prasad4.jpg';

export default function BirthdayCard() {
  const [showWish, setShowWish] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Use imported images
  const photos = [prasad1, prasad2, prasad3, prasad4];

  useEffect(() => {
    setShowWish(true);
  }, []);

  useEffect(() => {
    if (showGallery) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % photos.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [showGallery, photos.length]);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4 overflow-hidden relative">
        {/* Floating decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Sparkles className="absolute top-20 left-10 text-yellow-300 opacity-70 animate-pulse" size={24} />
          <Heart className="absolute top-40 right-20 text-pink-400 opacity-60 animate-bounce" size={28} />
          <Gift className="absolute bottom-32 left-20 text-red-400 opacity-70 animate-pulse" size={26} />
          <Sparkles className="absolute bottom-20 right-10 text-blue-300 opacity-60 animate-bounce" size={22} />
        </div>

        <div className="max-w-4xl w-full">
          {/* Birthday Wish Card */}
          <div className={`bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 mb-8 border border-white border-opacity-20 transform transition-all duration-1000 ${showWish ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <div className="text-center space-y-6">
              <div className="flex justify-center items-center space-x-2 sm:space-x-3">
                <Sparkles className="text-yellow-300 animate-pulse flex-shrink-0" size={28} />
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 animate-pulse">
                  Wishing You Happiest Birthday Pachaam(Tomato)!..
                </h1>
                <Sparkles className="text-yellow-300 animate-pulse flex-shrink-0" size={28} />
              </div>
              
              <div className="bg-white bg-opacity-5 rounded-2xl p-6 backdrop-blur-sm border border-white border-opacity-10">
                <p className="text-white text-lg md:text-xl leading-relaxed font-light">
                  On this special day, I want you to know how incredibly blessed I am to have you in my life. 
                  Your kindness, laughter, and presence make every moment brighter. May this year bring you 
                  endless joy, amazing adventures, and all the success you deserve. Here's to celebrating YOU 
                  today and always! Wishing you the most wonderful birthday filled with love, laughter, and 
                  unforgettable memories. 🎂✨
                </p>
              </div>

              <div className="flex justify-center space-x-4">
                <Heart className="text-red-400 animate-bounce" size={28} />
                <Gift className="text-pink-400 animate-pulse" size={28} />
                <Heart className="text-red-400 animate-bounce" size={28} />
              </div>

            </div>
          </div>

          {/* Footer Message */}
          <div className="text-center space-y-4">
            <p className="text-white text-lg font-light opacity-90">
              With all my love and best wishes 💝
            </p>
            
            {/* View Gallery Button */}
            <button
              onClick={() => setShowGallery(true)}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 mx-auto"
            >
              <Gift size={22} />
              <span>View Photo Gallery</span>
              <Sparkles size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Full Screen Gallery Modal */}
      {showGallery && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-500" />

          {/* Close Button */}
          <button
            onClick={() => setShowGallery(false)}
            className="absolute top-6 right-6 z-50 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-md rounded-full p-3 transition-all duration-300 border border-white border-opacity-30"
          >
            <X className="text-white" size={28} />
          </button>

          {/* Falling Photo Bubbles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Left side bubbles */}
            {photos.map((photo, i) => (
              <div
                key={`left-${i}`}
                className="absolute rounded-full overflow-hidden border-4 border-white border-opacity-40 shadow-2xl animate-float"
                style={{
                  left: `${Math.random() * 15}%`,
                  top: `-${Math.random() * 20}%`,
                  width: `${80 + Math.random() * 60}px`,
                  height: `${80 + Math.random() * 60}px`,
                  animationDelay: `${i * 2}s`,
                  animationDuration: `${8 + Math.random() * 4}s`
                }}
              >
                <img src={photo} alt="" className="w-full h-full object-cover opacity-60" />
              </div>
            ))}
            
            {/* Right side bubbles */}
            {photos.map((photo, i) => (
              <div
                key={`right-${i}`}
                className="absolute rounded-full overflow-hidden border-4 border-white border-opacity-40 shadow-2xl animate-float"
                style={{
                  right: `${Math.random() * 15}%`,
                  top: `-${Math.random() * 20}%`,
                  width: `${80 + Math.random() * 60}px`,
                  height: `${80 + Math.random() * 60}px`,
                  animationDelay: `${i * 2 + 1}s`,
                  animationDuration: `${8 + Math.random() * 4}s`
                }}
              >
                <img src={photo} alt="" className="w-full h-full object-cover opacity-60" />
              </div>
            ))}
            
            {/* Additional smaller bubbles */}
            {photos.map((photo, i) => (
              <div
                key={`left-small-${i}`}
                className="absolute rounded-full overflow-hidden border-2 border-white border-opacity-30 shadow-xl animate-float"
                style={{
                  left: `${5 + Math.random() * 10}%`,
                  top: `-${Math.random() * 30}%`,
                  width: `${50 + Math.random() * 40}px`,
                  height: `${50 + Math.random() * 40}px`,
                  animationDelay: `${i * 1.5}s`,
                  animationDuration: `${10 + Math.random() * 5}s`
                }}
              >
                <img src={photo} alt="" className="w-full h-full object-cover opacity-50" />
              </div>
            ))}
            
            {photos.map((photo, i) => (
              <div
                key={`right-small-${i}`}
                className="absolute rounded-full overflow-hidden border-2 border-white border-opacity-30 shadow-xl animate-float"
                style={{
                  right: `${5 + Math.random() * 10}%`,
                  top: `-${Math.random() * 30}%`,
                  width: `${50 + Math.random() * 40}px`,
                  height: `${50 + Math.random() * 40}px`,
                  animationDelay: `${i * 1.5 + 0.5}s`,
                  animationDuration: `${10 + Math.random() * 5}s`
                }}
              >
                <img src={photo} alt="" className="w-full h-full object-cover opacity-50" />
              </div>
            ))}
          </div>

          <div className="relative h-full flex items-center justify-center">
            {/* Image Container */}
            <div className="relative w-full h-full flex items-center justify-center px-4 py-20">
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white border-opacity-30 backdrop-blur-sm h-[90vh]">
                  <img
                    src={photos[currentSlide]}
                    alt={`Memory ${currentSlide + 1}`}
                    className="h-full w-auto object-cover transition-all duration-700"
                    key={currentSlide}
                  />
                </div>
              </div>
            </div>
          </div>

          <style>{`
            @keyframes float {
              0% {
                transform: translateY(0) translateX(0) rotate(0deg);
                opacity: 0;
              }
              10% {
                opacity: 1;
              }
              90% {
                opacity: 1;
              }
              100% {
                transform: translateY(110vh) translateX(${Math.random() > 0.5 ? '' : '-'}${20 + Math.random() * 40}px) rotate(${Math.random() * 360}deg);
                opacity: 0;
              }
            }
            .animate-float {
              animation: float linear infinite;
            }
          `}</style>
        </div>
      )}
    </>
  );
}