import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './SuccessPage.css';

// روابط تحميل الملفات الثلاثة
const DOWNLOAD_FILES = [
  {
    name: "35 مليون منتج رقمي",
    filename: "35-Million-Products.pdf.pdf-mayswj.pdf",
    icon: "📦",
    description: "مجموعة ضخمة من المنتجات الرقمية",
    color: "green"
  },
  {
    name: "مليون منتج PDF",
    filename: "million-digital-products-pdf.pdf-bqs5yz.pdf",
    icon: "📚",
    description: "كتب ومستندات PDF جاهزة",
    color: "purple"
  },
  {
    name: "الكورسات الهدية",
    filename: "الكورسات-الهدية-فقط.pdf.pdf-hu51he.pdf",
    icon: "🎁",
    description: "كورسات تعليمية مجانية",
    color: "pink"
  }
];

const SuccessPage = () => {
  const [searchParams] = useSearchParams();
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showDownloads, setShowDownloads] = useState(false);
  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    const urlSessionId = searchParams.get('session_id');
    
    if (urlSessionId) {
      setIsValid(true);
      setSessionId(urlSessionId);
      localStorage.setItem('payment_verified', urlSessionId);
      
      // Check if user already claimed downloads (show downloads directly)
      const claimedSessions = JSON.parse(localStorage.getItem('claimed_downloads') || '[]');
      if (claimedSessions.includes(urlSessionId)) {
        setShowDownloads(true);
      }
    } else {
      const savedSession = localStorage.getItem('payment_verified');
      if (savedSession) {
        setIsValid(true);
        setSessionId(savedSession);
        // Check if already claimed
        const claimedSessions = JSON.parse(localStorage.getItem('claimed_downloads') || '[]');
        if (claimedSessions.includes(savedSession)) {
          setShowDownloads(true);
        }
      }
    }
    setIsLoading(false);
  }, [searchParams]);

  // Function to handle claim button click - THIS IS WHERE TRACKING HAPPENS
  const handleClaimProducts = () => {
    // Check if we already tracked this purchase to avoid duplicates
    const trackedSessions = JSON.parse(localStorage.getItem('tracked_purchases') || '[]');
    const alreadyTracked = sessionId && trackedSessions.includes(sessionId);
    
    if (!alreadyTracked && sessionId) {
      // Track Purchase event with Meta Pixel
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Purchase', {
          currency: 'USD',
          value: 14.00,
          content_type: 'product',
          content_name: 'Digital Products Bundle'
        });
        console.log('✅ Meta Pixel: Purchase tracked');
      }
      
      // Track Purchase event with TikTok Pixel
      if (typeof window.ttq !== 'undefined') {
        window.ttq.track('CompletePayment', {
          content_type: 'product',
          content_id: 'digital_bundle',
          content_name: 'Digital Products Bundle',
          quantity: 1,
          price: 14.00,
          value: 14.00,
          currency: 'USD'
        });
        console.log('✅ TikTok Pixel: Purchase tracked');
      }
      
      // Save session to prevent duplicate tracking
      trackedSessions.push(sessionId);
      localStorage.setItem('tracked_purchases', JSON.stringify(trackedSessions));
    }
    
    // Save that user claimed downloads
    const claimedSessions = JSON.parse(localStorage.getItem('claimed_downloads') || '[]');
    if (sessionId && !claimedSessions.includes(sessionId)) {
      claimedSessions.push(sessionId);
      localStorage.setItem('claimed_downloads', JSON.stringify(claimedSessions));
    }
    
    // Show downloads
    setShowDownloads(true);
  };

  if (isLoading) {
    return (
      <div className="success-page" dir="rtl">
        <div className="success-loading">
          <div className="loading-spinner"></div>
          <p>جاري التحقق...</p>
        </div>
      </div>
    );
  }

  if (!isValid) {
    return (
      <div className="success-page" dir="rtl">
        <div className="success-container unauthorized">
          <div className="error-icon">⚠️</div>
          <h1>غير مصرح</h1>
          <p>يجب إتمام عملية الدفع أولاً للوصول لهذه الصفحة.</p>
          <a href="/#pricing" className="btn-primary">
            اذهب للشراء
          </a>
        </div>
      </div>
    );
  }

  // Step 1: Show claim button (before tracking)
  if (!showDownloads) {
    return (
      <div className="success-page" dir="rtl">
        <div className="success-wrapper">
          {/* Header Section */}
          <div className="success-header">
            <div className="success-checkmark">
              <svg viewBox="0 0 52 52">
                <circle cx="26" cy="26" r="25" fill="none"/>
                <path fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
              </svg>
            </div>
            <h1>🎉 تم الدفع بنجاح!</h1>
            <p>شكراً لشرائك! اضغط على الزر أدناه للحصول على منتجاتك</p>
          </div>

          {/* Claim Button - This triggers the tracking */}
          <div className="claim-section">
            <button onClick={handleClaimProducts} className="claim-button">
              <span className="claim-icon">🎁</span>
              <span className="claim-text">اضغط هنا للحصول على منتجاتك</span>
              <span className="claim-arrow">→</span>
            </button>
            <p className="claim-hint">سيتم تحويلك لصفحة التحميلات فوراً</p>
          </div>

          {/* Trust Badges */}
          <div className="trust-section">
            <div className="trust-badge">
              <span>✓</span> دفع آمن ومضمون
            </div>
            <div className="trust-badge">
              <span>✓</span> تحميل فوري
            </div>
            <div className="trust-badge">
              <span>✓</span> دعم على مدار الساعة
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 2: Show downloads (after clicking claim button)
  return (
    <div className="success-page" dir="rtl">
      <div className="success-wrapper">
        {/* Header Section */}
        <div className="success-header">
          <div className="success-checkmark">
            <svg viewBox="0 0 52 52">
              <circle cx="26" cy="26" r="25" fill="none"/>
              <path fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
          </div>
          <h1>🎉 منتجاتك جاهزة!</h1>
          <p>يمكنك تحميل جميع الملفات الآن</p>
        </div>

        {/* Downloads Section */}
        <div className="downloads-section">
          <h2 className="downloads-title">
            <span className="downloads-icon">📥</span>
            ملفاتك جاهزة للتحميل
          </h2>
          
          <div className="downloads-grid">
            {DOWNLOAD_FILES.map((file, index) => (
              <a 
                key={index}
                href={`/products/${file.filename}`}
                download={file.filename}
                className={`download-card-success ${file.color}`}
              >
                <span className="card-icon">{file.icon}</span>
                <span className="card-title">{file.name}</span>
                <div className="card-download-btn">
                  <span>تحميل</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Info Box */}
        <div className="info-box">
          <span className="info-icon">💡</span>
          <div className="info-content">
            <strong>نصيحة مهمة</strong>
            <span>احفظ هذه الصفحة في المفضلة للرجوع إليها لاحقاً</span>
          </div>
        </div>

        {/* What You Get Section */}
        <div className="benefits-section">
          <h3>ماذا ستحصل عليه:</h3>
          <div className="benefits-list">
            <div className="benefit-item">
              <span className="benefit-check">✓</span>
              <span>أكثر من مليون منتج رقمي قابل للتخصيص</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-check">✓</span>
              <span>حقوق إعادة البيع (PLR/MRR)</span>
            </div>
            <div className="benefit-item">
              <span className="benefit-check">✓</span>
              <span>تحديثات مجانية مدى الحياة</span>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="support-section">
          <p>هل تواجه مشكلة في التحميل؟</p>
          <a href="https://wa.me/201065453966" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            تواصل معنا على واتساب
          </a>
        </div>

        {/* Home Button */}
        <a href="/" className="home-btn">
          العودة للصفحة الرئيسية
        </a>
      </div>
    </div>
  );
};

export default SuccessPage;
