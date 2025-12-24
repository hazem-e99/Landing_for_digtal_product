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
            بمجرد إتمام عملية الدفع بنجاح، سيتم تحويلك مباشرة إلى حسابك داخل الموقع، وستجد جميع المنتجات التي اشتريتها جاهزة للتحميل فورًا بدون أي انتظار.
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
              جميع الملفات ستكون متاحة فورًا داخل قسم <span className="download-highlight">"حسابي → التحميلات"</span>
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
            بعد إتمام الشراء ستجد جميع روابط التحميل الخاصة بكل <span className="download-highlight">منتج قمت بشرائه</span> داخل صفحة التحميلات الخاصة بك. اضغط على الزر التالي للانتقال مباشرة:
          </p>

          {/* CTA Button */}
          <a href="https://m.me/storex2026" target="_blank" rel="noopener noreferrer" className="download-cta-button">
            انتقل إلى صفحة التحميلات
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
