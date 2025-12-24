import './VideoSection.css';

const VideoSection = () => {
  return (
    <section className="video-section" dir="rtl">
      <div className="video-container">
        {/* Header */}
        <div className="video-header">
          <h2 className="video-title">
            شاهد الحزمة الرقمية في دقيقة واحدة
          </h2>
          <p className="video-subtitle">
            تعرف على ما ستحصل عليه وكيف تبدأ فورًا
          </p>
        </div>

        {/* Video Embed */}
        <div className="video-wrapper">
          <div className="video-embed">
            <iframe
              src="https://www.youtube.com/embed/w7WcQt1zEgA"
              title="شاهد الحزمة الرقمية"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="video-iframe"
            ></iframe>
          </div>
        </div>

        {/* Description */}
        <div className="video-description">
          <p>
            <span className="desc-highlight">هذه الحزمة المتكاملة</span> تمنحك أكثر من مليون منتج رقمي جاهز للتخصيص وإعادة البيع — من <span className="desc-link">قوالب Canva</span> إلى <span className="desc-link">عروض تقديمية</span>،
          </p>
          <p>
            حزم سوشيال، فيديوهات 4K والمزيد. كل ما تحتاجه لتطلق مشروعك الرقمي <span className="desc-highlight">اليوم</span> بخطوات بسيطة.
          </p>
        </div>

        {/* CTA Button */}
        <div className="video-cta-wrapper">
          <a href="https://m.me/storex2026" target="_blank" rel="noopener noreferrer" className="video-cta-button">
            <span className="cta-link-icon">🔗</span>
            احصل على الحزمة الآن
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
