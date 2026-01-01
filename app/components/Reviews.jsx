'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useCursor } from '../context/CursorContext';

export default function Reviews() {
  const { textEnter, textLeave } = useCursor();
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);
  const [typedText, setTypedText] = useState('');
  const fullText =
    "Let's turn your ideas into a digital reality. Schedule a free consultation call to discuss your project.";
  const typingRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: 'Alex Thompson',
      role: 'CEO, TechStart Inc.',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      rating: 5,
      text: 'Working with this agency was a game-changer for our business. They delivered a stunning website that exceeded our expectations and helped us increase conversions by 250%.',
      company: 'TechStart',
    },
    {
      id: 2,
      name: 'Maria Garcia',
      role: 'Founder, EcoShop',
      image:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80',
      rating: 5,
      text: "The team's creativity and technical expertise are unmatched. They transformed our e-commerce platform into a seamless shopping experience. Highly recommended!",
      company: 'EcoShop',
    },
    {
      id: 3,
      name: 'James Wilson',
      role: 'Marketing Director, FitLife',
      image:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
      rating: 5,
      text: 'Professional, innovative, and always on time. They took our fitness app to the next level with intuitive design and flawless functionality.',
      company: 'FitLife',
    },
    {
      id: 4,
      name: 'Sophie Chen',
      role: 'Product Manager, CloudNet',
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
      rating: 5,
      text: 'Outstanding work from start to finish! The attention to detail and commitment to excellence made all the difference. Our SaaS platform looks incredible.',
      company: 'CloudNet',
    },
    {
      id: 5,
      name: 'David Kumar',
      role: 'CTO, DataFlow',
      image:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&q=80',
      rating: 5,
      text: 'Their technical prowess and design sensibility created the perfect dashboard for our data analytics tool. The user feedback has been phenomenal!',
      company: 'DataFlow',
    },
    {
      id: 6,
      name: 'Emma Rodriguez',
      role: 'Owner, Bloom Boutique',
      image:
        'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80',
      rating: 5,
      text: 'They brought our vision to life beautifully! The website perfectly captures our brand essence and our online sales have tripled since launch.',
      company: 'Bloom',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  useEffect(() => {
    if (cardsRef.current[activeIndex]) {
      gsap.fromTo(
        cardsRef.current[activeIndex],
        {
          opacity: 0,
          scale: 0.8,
          rotateY: -15,
        },
        {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 0.8,
          ease: 'power3.out',
        }
      );
    }
  }, [activeIndex]);

  // Typing animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && typedText === '') {
          let currentIndex = 0;
          const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
              setTypedText(fullText.slice(0, currentIndex));
              currentIndex++;
            } else {
              clearInterval(typingInterval);
            }
          }, 30);

          return () => clearInterval(typingInterval);
        }
      },
      { threshold: 0.5 }
    );

    if (typingRef.current) {
      observer.observe(typingRef.current);
    }

    return () => observer.disconnect();
  }, [typedText, fullText]);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400' : 'text-gray-600'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="min-h-screen bg-black py-10 px-2 sm:px-4 md:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div
          className="text-center mb-10 sm:mb-14 md:mb-16"
          data-aos="fade-down"
        >
          <h2
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Client{' '}
            <span className="bg-linear-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Success
            </span>
          </h2>
          <p className="text-gray-400 text-base xs:text-lg sm:text-xl max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto px-2">
            Don't Just Take Our Word For It
          </p>
        </div>

        <div className="relative mb-10 sm:mb-14 md:mb-16" data-aos="zoom-in">
          <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-800/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

          <div className="relative max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`${
                  index === activeIndex ? 'block' : 'hidden'
                } bg-linear-to-br from-gray-900 to-black border border-purple-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden`}
                style={{ perspective: '1000px' }}
              >
                <div className="absolute top-8 right-8 text-purple-500/20">
                  <svg
                    className="w-20 h-20"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M10 8c-3.309 0-6 2.691-6 6s2.691 6 6 6c1.294 0 2.5-.416 3.478-1.119-.031.347-.051.696-.051 1.047 0 3.309-2.691 6-6 6v4c5.514 0 10-4.486 10-10 0-5.514-4.486-10-10-10zM28 8c-3.309 0-6 2.691-6 6s2.691 6 6 6c1.294 0 2.5-.416 3.478-1.119-.031.347-.051.696-.051 1.047 0 3.309-2.691 6-6 6v4c5.514 0 10-4.486 10-10 0-5.514-4.486-10-10-10z" />
                  </svg>
                </div>

                <div className="relative z-10">
                  <div className="flex gap-1 mb-6">
                    {renderStars(testimonial.rating)}
                  </div>

                  <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-8 italic">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500/50">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4
                        className="text-white font-bold text-lg"
                        onMouseEnter={textEnter}
                        onMouseLeave={textLeave}
                      >
                        {testimonial.name}
                      </h4>
                      <p className="text-purple-400 text-sm">
                        {testimonial.role}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-800/5 rounded-3xl"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-4 flex-wrap max-w-4xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setActiveIndex(index)}
              className={`relative group transition-all duration-300 ${
                index === activeIndex
                  ? 'scale-110'
                  : 'scale-90 opacity-50 hover:opacity-100'
              }`}
            >
              <div
                className={`w-16 h-16 rounded-full overflow-hidden border-3 transition-all duration-300 ${
                  index === activeIndex
                    ? 'border-purple-500 shadow-lg shadow-purple-500/50'
                    : 'border-purple-500/30 hover:border-purple-500/60'
                }`}
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              {index === activeIndex && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-purple-500 rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        <div ref={typingRef} className="mt-20 relative" data-aos="fade-up">
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-900/30 to-black border border-purple-500/30 rounded-3xl p-10 sm:p-12 overflow-hidden relative group hover:border-purple-500/50 transition-all duration-500">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-purple-800/5"></div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <h3
                  className="text-4xl sm:text-5xl font-bold text-white mb-6"
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  Ready to Launch Your{' '}
                  <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                    Website?
                  </span>
                </h3>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-8 min-h-[60px]">
                  {typedText}
                  <span className="inline-block w-0.5 h-5 bg-purple-400 ml-1 animate-pulse"></span>
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button className="group/btn px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold rounded-full hover:scale-105 hover:shadow-purple-500/50 transition-all duration-300">
                    <span className="flex items-center gap-2">
                      Book a Free Strategy Call
                      <svg
                        className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                  </button>

                  <button className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:text-white hover:scale-105 transition-all duration-300">
                    <span className="flex items-center gap-2">
                      Email Us
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
