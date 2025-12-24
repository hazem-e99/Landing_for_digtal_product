import { useState, useEffect } from 'react';
import './PricingSection.css';

// رابط Stripe Payment Link
const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/eVqaEY0hQ8aF3KXcY8dAk29";

const PricingSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 25,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const totalSeconds = prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1;
        if (totalSeconds <= 0) {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
        return {
          hours: Math.floor(totalSeconds / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num) => String(num).padStart(2, '0');

  const features = [
    'أكثر من مليون منتج رقمي قابل للتخصيص وإعادة البيع',
    'وصول غير محدود إلى التحميلات والتحديثات',
    {
      text: 'أكثر من 30 تصنيفًا متنوعًا',
      subtext: 'قوالب Canva، عروض تقديمية، حزم سوشيال، فيديوهات 4K والمزيد',
    },
    'حقوق إعادة البيع (PLR/MRR) بعلامتك التجارية',
  ];

  return (
    <section className="pricing-section" dir="rtl" id="pricing">
      <div className="pricing-container">
        {/* Pricing Card */}
        <div className="pricing-card">
          <div className="pricing-original-price">
            السعر الأصلي <span className="pricing-strikethrough">100 دولار</span>
          </div>
          
          <div className="pricing-current-price">
            14 دولار
          </div>
          
          <div className="pricing-offer-text">اليوم فقط — عرض خاص لمدة ٢٤ ساعة</div>
          
          <a href={STRIPE_PAYMENT_LINK} target="_blank" rel="noopener noreferrer" className="pricing-cta-button">
            <span className="pricing-cta-icon">🔥</span>
            احصل على الحزمة الآن
          </a>
          
          <div className="pricing-payment-info">
            تحميل رقمي فوري • دفعة واحدة
          </div>
          
          <div className="pricing-trust-badges">
            <span className="pricing-badge">
              <span className="pricing-badge-icon">🔒</span>
              دفع آمن
            </span>
            <span className="pricing-badge">
              <span className="pricing-badge-icon">⚡</span>
              تسليم فوري
            </span>
            <span className="pricing-badge">
              <span className="pricing-badge-icon">🌍</span>
              استخدام عالمي
            </span>
          </div>
          
          <div className="pricing-timer-box">
            <div className="pricing-timer-icon">⏰</div>
            <div className="pricing-timer-display">
              {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
            </div>
            <div className="pricing-timer-text">
              انتهى العرض — قد تُطبّق أسعار أعلى لاحقًا
            </div>
          </div>
        </div>

        {/* Features Card */}
        <div className="pricing-features-card">
          <ul className="pricing-features-list">
            {features.map((feature, index) => (
              <li key={index} className="pricing-feature-item">
                <span className="pricing-feature-check">✓</span>
                <div className="pricing-feature-content">
                  <span className="pricing-feature-text">
                    {typeof feature === 'string' ? feature : feature.text}
                  </span>
                  {typeof feature !== 'string' && feature.subtext && (
                    <span className="pricing-feature-subtext">{feature.subtext}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
