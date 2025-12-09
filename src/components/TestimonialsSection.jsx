import { useState } from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      image: 'https://www.raqmiy.com/wp-content/uploads/2024/11/photo_2024-11-28_00-56-02.jpg',
      quote: '"استلمت الروابط فورًا، شكرًا على الاهتمام!"',
    },
    {
      id: 2,
      image: 'https://www.raqmiy.com/wp-content/uploads/2024/11/photo_2024-11-28_01-03-24.jpg',
      quote: '"🔥 كل شيء اشتغل من أول مرة!"',
    },
    {
      id: 3,
      image: 'https://www.raqmiy.com/wp-content/uploads/2024/11/photo_2024-11-28_00-55-00-2.jpg',
      quote: '"الدعم سريع وخطوات واضحة – أنصح به!"',
    },
    {
      id: 4,
      image: 'https://www.raqmiy.com/wp-content/uploads/2024/11/photo_2024-11-28_01-03-19.jpg',
      quote: '"تم التفعيل خلال دقائق — تجربة احترافية!"',
    },
    {
      id: 5,
      image: 'https://www.raqmiy.com/wp-content/uploads/2024/11/photo_2024-11-28_00-56-02.jpg',
      quote: '"منتجات ممتازة وسعر لا يُصدق!"',
    },
    {
      id: 6,
      image: 'https://www.raqmiy.com/wp-content/uploads/2024/11/photo_2024-11-28_01-03-24.jpg',
      quote: '"أفضل استثمار عملته هذا العام!"',
    },
    {
      id: 7,
      image: 'https://www.raqmiy.com/wp-content/uploads/2024/11/photo_2024-11-28_00-55-00-2.jpg',
      quote: '"الجودة عالية والتوصيل فوري!"',
    },
    {
      id: 8,
      image: 'https://www.raqmiy.com/wp-content/uploads/2024/11/photo_2024-11-28_01-03-19.jpg',
      quote: '"تجربة رائعة من البداية للنهاية!"',
    },
  ];

  const slidesPerView = 4;
  const maxSlide = Math.max(0, testimonials.length - slidesPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  return (
    <section className="testimonials-section" dir="rtl">
      <div className="testimonials-container">
        {/* Header */}
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            ماذا قال <span className="title-gradient">عملاؤنا</span> بعد التجربة؟
          </h2>
          <p className="testimonials-subtitle">
            نماذج من محادثات حقيقية تؤكد سرعة التفعيل وجودة الخدمة.
          </p>
        </div>

        {/* Slider */}
        <div className="testimonials-slider">
          {/* Navigation Arrows */}
          <button className="slider-arrow slider-arrow-prev" onClick={prevSlide}>
            ‹
          </button>
          <button className="slider-arrow slider-arrow-next" onClick={nextSlide}>
            ›
          </button>

          {/* Slides Container */}
          <div className="slides-wrapper">
            <div 
              className="slides-track"
              style={{ transform: `translateX(${currentSlide * 25}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-slide">
                  <div className="testimonial-image-wrapper">
                    <img
                      src={testimonial.image}
                      alt={`تجربة عميل ${testimonial.id}`}
                      className="testimonial-image"
                      loading="lazy"
                    />
                  </div>
                  <p className="testimonial-quote">{testimonial.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="slider-dots">
          {Array.from({ length: maxSlide + 1 }).map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
