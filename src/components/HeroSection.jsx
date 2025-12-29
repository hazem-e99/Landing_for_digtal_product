import './HeroSection.css';
import { initiateCheckout } from '../services/api';

const HeroSection = () => {
  const features = [
    { icon: '⚡', text: 'وصول فوري', color: '#00F5A0' },
    { icon: '🎨', text: 'حقوق بيع كاملة', color: '#00D9D9' },
    { icon: '🔧', text: 'قابلة للتعديل', color: '#5CE1E6' },
    { icon: '🌍', text: 'بيع عالمي بسهولة', color: '#00BFB3' },
  ];

  return (
    <section className="hero-section" dir="rtl">
      <div className="hero-container">
        {/* Badge */}
        <div className="hero-badge">
          <span className="badge-dot"></span>
          <span className="badge-text">ابدأ متجرك الرقمي اليوم</span>
        </div>

        {/* Main Heading */}
        <h1 className="hero-heading">
          ابدا مشروعك الرقمي ب <span className="heading-gradient price-highlight">10</span> دولار فقط !!
        </h1>

        {/* Subtitle */}
        <h2 className="hero-subtitle">
          منتجات رقمية جاهزة للتخصيص والربح الفوري
        </h2>

        {/* Description */}
        <p className="hero-description">
          احصل على مكتبة ضخمة من المنتجات الرقمية — عدّلها، ضع علامتك التجارية، وابدأ البيع خلال
          <br />
          أيام دون الحاجة لإنشاء المحتوى من الصفر.
        </p>

        {/* CTA Button */}
        <button className="hero-cta" onClick={initiateCheckout}>
          <span className="hero-cta-icon">🔥</span>
          <span className="hero-cta-text">احصل على الحزمة الآن</span>
        </button>

        {/* Features */}
        <div className="hero-features">
          {features.map((feature, index) => (
            <div key={index} className="hero-feature-item">
              <span className="hero-feature-icon" style={{ color: feature.color }}>
                {feature.icon}
              </span>
              <span className="hero-feature-text">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
