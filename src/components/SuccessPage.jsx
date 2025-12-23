import './SuccessPage.css';

// رابط تحميل المنتج
const PRODUCT_DOWNLOAD_LINK = "https://drive.google.com/drive/folders/1xaz0weZqnVqn_btBwk8UDQLhcGr1ZpgG";

const SuccessPage = () => {
  return (
    <div className="success-page" dir="rtl">
      <div className="success-container">
        <div className="success-icon-wrapper">
          <div className="success-icon">
            <svg viewBox="0 0 52 52" className="checkmark">
              <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
              <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
          </div>
        </div>
        
        <h1 className="success-title">🎉 تم الدفع بنجاح!</h1>
        
        <p className="success-message">
          شكراً لشرائك! يمكنك تحميل المنتج الآن.
        </p>
        
        {/* زر التحميل المباشر */}
        <a 
          href={PRODUCT_DOWNLOAD_LINK} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="success-download-button"
        >
          <span className="download-icon">📥</span>
          تحميل المنتج الآن
        </a>
        
        <div className="success-info-box">
          <div className="success-info-icon">�</div>
          <div className="success-info-text">
            <strong>نصيحة</strong>
            <span>احفظ هذه الصفحة أو الرابط للرجوع إليه لاحقاً</span>
          </div>
        </div>
        
        <div className="success-next-steps">
          <h3>ماذا ستحصل عليه:</h3>
          <ul>
            <li>
              <span className="step-number">✓</span>
              <span>أكثر من مليون منتج رقمي قابل للتخصيص</span>
            </li>
            <li>
              <span className="step-number">✓</span>
              <span>حقوق إعادة البيع (PLR/MRR)</span>
            </li>
            <li>
              <span className="step-number">✓</span>
              <span>تحديثات مجانية مدى الحياة</span>
            </li>
          </ul>
        </div>
        
        <div className="success-support">
          <p>هل تواجه مشكلة في التحميل؟ <a href="https://wa.me/201065453966" target="_blank" rel="noopener noreferrer">تواصل معنا</a></p>
        </div>
        
        <a href="/" className="success-home-button">
          العودة للصفحة الرئيسية
        </a>
      </div>
    </div>
  );
};

export default SuccessPage;
