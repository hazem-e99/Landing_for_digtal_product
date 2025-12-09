import './WhyDifferentSection.css';

const WhyDifferentSection = () => {
  return (
    <section className="why-different-section" dir="rtl">
      <div className="why-different-container">
        {/* Header */}
        <div className="why-different-header">
          <h2 className="why-different-title">لماذا هذا العرض مختلف؟</h2>
          <p className="why-different-subtitle">
            لأنك لا تشتري مجرد ملفات... بل تشتري <span className="subtitle-highlight">مشروعًا جاهزًا مدعومًا بالسرعة والدعم المباشر.</span>
          </p>
        </div>

        {/* Features Cards */}
        <div className="why-different-cards">
          {/* Card 1 - نتائج فورية */}
          <div className="why-different-card">
            <div className="card-header">
              <span className="card-icon">⚡</span>
              <h3 className="card-title">نتائج فورية</h3>
            </div>
            <p className="card-description">
              ابدأ البيع خلال دقائق بدون تعقيدات تقنية.
            </p>
          </div>

          {/* Card 2 - مرافقة عبر الميسنجر */}
          <div className="why-different-card">
            <div className="card-header">
              <span className="card-icon">💬</span>
              <h3 className="card-title">مرافقة عبر الميسنجر</h3>
            </div>
            <p className="card-description">
              تواصل معنا مباشرة عبر Messenger لأي سؤال أو استفسار.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="why-different-cta">
          <button className="messenger-button">
            راسلنا عبر الميسنجر
            <span className="button-icon">⚡</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferentSection;
