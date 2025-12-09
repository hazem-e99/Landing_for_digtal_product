import './SuccessStoriesSection.css';

const SuccessStoriesSection = () => {
  return (
    <section className="success-stories-section" dir="rtl">
      <div className="success-stories-container">
        {/* Badge */}
        <div className="success-stories-badge">
          <span className="badge-icon">📋</span>
          <span>قصص نجاح حقيقية</span>
        </div>

        {/* Main Heading */}
        <h2 className="success-stories-title">
          اكتشف ما هو ممكن مع <span className="title-gradient">قوالبنا</span>
        </h2>

        {/* Subtitle */}
        <p className="success-stories-subtitle">
          هذه مواقع حقيقية تم إنشاؤها وبيعها باستخدام منتجاتنا الرقمية المميزة
        </p>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
