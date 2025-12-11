import './DownloadSection.css';

const DownloadSection = () => {
  return (
    <section className="download-section" dir="rtl">
      <div className="download-container">
        <div className="download-card">
          {/* Header */}
          <div className="download-header">
            <span className="download-icon">📦</span>
            <h2 className="download-title">تحميل فوري بعد الشراء</h2>
          </div>

          {/* Description */}
          <p className="download-description">
            بمجرد إتمام عملية الدفع بنجاح من خلال التواصل معنا عبر الواتساب، سيتم ارسال كل الملفات التي تحتوي علي المنتجات الرقمية + الكورسات، وستجد جميع المنتجات التي اشتريتها جاهزة للتحميل فورًا بدون أي انتظار.
          </p>

          {/* Features List */}
          <ul className="download-features">
            <li className="download-feature-item">
              <span className="download-bullet">◆</span>
              لن تحتاج لانتظار أي بريد إلكتروني
            </li>
            <li className="download-feature-item">
              <span className="download-bullet">◆</span>
              لن تحتاج لتفعيل أو موافقة يدوية
            </li>
            <li className="download-feature-item">
              <span className="download-bullet">◆</span>
              جميع الملفات ستكون متاحة فورًا بعد الدفع
            </li>
            <li className="download-feature-item">
              <span className="download-bullet">◆</span>
              يمكنك الرجوع لاحقًا وتحميل المنتجات بأي وقت وبدون حد
            </li>
          </ul>

          {/* Highlighted Tags */}
          <div className="download-tags">
            <span className="download-tag">
              <span className="download-tag-check">✔️</span>
              سهولة
            </span>
            <span className="download-tag-separator">-</span>
            <span className="download-tag">
              <span className="download-tag-check">✔️</span>
              سرعة
            </span>
            <span className="download-tag-separator">-</span>
            <span className="download-tag">
              <span className="download-tag-check">✔️</span>
              وصول فوري لجميع المنتجات بعد الدفع
            </span>
          </div>

          {/* Final Text */}
          <p className="download-final-text">
            بعد إتمام الشراء ستجد جميع روابط التحميل الخاصة بكل <span className="download-highlight">منتج قمت بشرائه</span>
            <br />
            داخل الملفات التي سيتم ارسالها لك. اضغط على زر الواتساب واكمل عملية الشراء الأن
          </p>

          {/* CTA Button */}
          <a href="https://wa.me/201065453966" target="_blank" rel="noopener noreferrer" className="download-cta-button">
            الشراء الأن من خلال واتساب
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
