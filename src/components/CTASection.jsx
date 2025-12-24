import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section" dir="rtl">
      <div className="cta-container">
        {/* Main Heading */}
        <h2 className="cta-heading">
          <span className="cta-rocket">🚀</span>
          فقط بـ <span className="cta-gradient">14 دولار</span> تغيّر مستقبلك!
        </h2>

        {/* Description */}
        <div className="cta-description">
          <p>
            ستحصل على <span className="cta-gradient">8 كورسات تدريبية احترافية</span> + مليون منتج رقمي جاهز للبيع.
          </p>
          <p>
            <span className="cta-emoji">🎯</span>
            لا تفوّت الفرصة — خطوة واحدة قد <span className="cta-gradient">تغيّر حياتك الرقمية للأبد!</span>
          </p>
        </div>

        {/* CTA Button */}
        <div className="cta-button-wrapper">
          <a href="https://buy.stripe.com/eVqaEY0hQ8aF3KXcY8dAk29" target="_blank" rel="noopener noreferrer" className="cta-main-button">
            <span className="button-fires">🔥🔥</span>
            احصل على الحزمة الآن
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
