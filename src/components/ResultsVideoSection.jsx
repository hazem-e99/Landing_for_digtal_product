import './ResultsVideoSection.css';

const ResultsVideoSection = () => {
  return (
    <section className="results-video-section" dir="rtl">
      <div className="results-video-container">
        {/* Header */}
        <div className="results-video-header">
          <h2 className="results-video-title">
            نتائج بيع حزمة <span className="title-gradient">مليون منتج رقمي</span>
          </h2>
          <p className="results-video-subtitle">
            شاهد كيف حولنا المحتوى الرقمي إلى دخل حقيقي بالدولارات
          </p>
        </div>

        {/* Vimeo Video Embed */}
        <div className="results-video-wrapper">
          <div className="results-video-embed">
            <iframe
              src="https://player.vimeo.com/video/1121003911?h=8e4d788276"
              title="نتائج بيع حزمة مليون منتج رقمي"
              frameBorder="0"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              allowFullScreen
              className="results-video-iframe"
            ></iframe>
          </div>
        </div>

        {/* Description */}
        <p className="results-video-description">
          هذه الأرقام <span className="desc-highlight">حقيقية وموثقة</span> — يمكنك أن تبدأ اليوم وتحقق دخلك بنفسك <span className="desc-emoji">🚀</span>
        </p>

        {/* CTA Button */}
        <div className="results-video-cta">
          <a href="https://wa.me/201065453966" target="_blank" rel="noopener noreferrer" className="results-cta-button">
            <span className="cta-icon">💎</span>
            ابدأ مشروعك الرقمي الآن
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResultsVideoSection;
