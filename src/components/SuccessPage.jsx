import { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { verifyPaymentSession } from '../services/api';
import './SuccessPage.css';

const SuccessPage = () => {
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isVerified, setIsVerified] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const hasTracked = useRef(false); // Prevent double tracking

  useEffect(() => {
    const verifyPayment = async () => {
      const urlSessionId = searchParams.get('session_id');
      
      if (!urlSessionId) {
        // Check if user has a previously verified session
        const savedSession = localStorage.getItem('verified_payment_session');
        if (savedSession) {
          const savedData = JSON.parse(savedSession);
          setSessionId(savedData.sessionId);
          setProducts(savedData.products || []);
          setIsVerified(true);
        } else {
          setErrorMessage('لم يتم العثور على معرف الجلسة. يرجى إتمام عملية الدفع أولاً.');
        }
        setIsLoading(false);
        return;
      }

      setSessionId(urlSessionId);

      try {
        // Verify the payment with the backend
        const result = await verifyPaymentSession(urlSessionId);
        
        if (result.paid) {
          console.log('✅ Payment verified successfully!');
          setIsVerified(true);
          setProducts(result.products || []);
          
          // Save verified session to localStorage
          localStorage.setItem('verified_payment_session', JSON.stringify({
            sessionId: urlSessionId,
            products: result.products,
            verifiedAt: new Date().toISOString()
          }));
          
          // Track the purchase immediately after verification
          trackPurchase(urlSessionId);
        } else {
          console.log('❌ Payment not verified:', result);
          setErrorMessage('لم يتم التحقق من الدفع. يرجى المحاولة مرة أخرى أو التواصل معنا.');
        }
      } catch (error) {
        console.error('Error verifying payment:', error);
        setErrorMessage('حدث خطأ أثناء التحقق من الدفع. يرجى المحاولة مرة أخرى.');
      }
      
      setIsLoading(false);
    };

    verifyPayment();
  }, [searchParams]);

  // Function to track purchase - called automatically after verification
  const trackPurchase = (currentSessionId) => {
    // Prevent double tracking
    if (hasTracked.current) return;
    
    // Check if we already tracked this purchase
    const trackedSessions = JSON.parse(localStorage.getItem('tracked_purchases') || '[]');
    const alreadyTracked = currentSessionId && trackedSessions.includes(currentSessionId);
    
    if (!alreadyTracked && currentSessionId) {
      hasTracked.current = true;
      
      // Track Purchase event with Meta Pixel
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Purchase', {
          currency: 'USD',
          value: 10.00,
          content_type: 'product',
          content_name: 'Digital Products Bundle'
        }, { eventID: currentSessionId }); // Add Event ID for deduplication
        console.log('✅ Meta Pixel: Purchase tracked');
      }
      
      // Track Purchase event with TikTok Pixel
      if (typeof window.ttq !== 'undefined') {
        window.ttq.track('CompletePayment', {
          content_type: 'product',
          content_id: 'digital_bundle',
          content_name: 'Digital Products Bundle',
          quantity: 1,
          price: 10.00,
          value: 10.00,
          currency: 'USD',
          event_id: currentSessionId // Add Event ID for deduplication
        });
        console.log('✅ TikTok Pixel: Purchase tracked');
      }
      
      // Save session to prevent duplicate tracking
      trackedSessions.push(currentSessionId);
      localStorage.setItem('tracked_purchases', JSON.stringify(trackedSessions));
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="success-page" dir="rtl">
        <div className="success-loading">
          <div className="loading-spinner"></div>
          <p>جاري التحقق من الدفع...</p>
          <p className="loading-hint">يرجى الانتظار بينما نتحقق من عملية الدفع</p>
        </div>
      </div>
    );
  }

  // Error / Not verified state
  if (!isVerified) {
    return (
      <div className="success-page" dir="rtl">
        <div className="success-container unauthorized">
          <div className="error-icon">⚠️</div>
          <h1>غير مصرح</h1>
          <p>{errorMessage || 'يجب إتمام عملية الدفع أولاً للوصول لهذه الصفحة.'}</p>
          <a href="/#pricing" className="btn-primary">
            اذهب للشراء
          </a>
          <a href="https://wa.me/201065453966" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            تواصل مع الدعم
          </a>
        </div>
      </div>
    );
  }

  // Success - Show downloads directly
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
          <p>شكراً لشرائك! منتجاتك جاهزة للتحميل</p>
          <div className="verified-badge">
            <span className="verified-icon">✓</span>
            <span>تم التحقق من الدفع</span>
          </div>
        </div>

        {/* Downloads Section */}
        <div className="downloads-section">
          <h2 className="downloads-title">
            <span className="downloads-icon">📥</span>
            ملفاتك جاهزة للتحميل
          </h2>
          
          <div className="downloads-grid">
            {products.length > 0 ? (
              products.map((product, index) => (
                <a 
                  key={index}
                  href={product.url}
                  download
                  className={`download-card-success ${product.color}`}
                >
                  <span className="card-icon">{product.icon}</span>
                  <span className="card-title">{product.name}</span>
                  <div className="card-download-btn">
                    <span>تحميل</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                  </div>
                </a>
              ))
            ) : (
              // Fallback products if API doesn't return them
              <>
                <a href="/products/35-Million-Products.pdf.pdf-mayswj.pdf" download className="download-card-success green">
                  <span className="card-icon">📦</span>
                  <span className="card-title">35 مليون منتج رقمي</span>
                  <div className="card-download-btn">
                    <span>تحميل</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                  </div>
                </a>
                <a href="/products/million-digital-products-pdf.pdf-bqs5yz.pdf" download className="download-card-success purple">
                  <span className="card-icon">📚</span>
                  <span className="card-title">مليون منتج PDF</span>
                  <div className="card-download-btn">
                    <span>تحميل</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                  </div>
                </a>
                <a href="/products/الكورسات-الهدية-فقط.pdf.pdf-hu51he.pdf" download className="download-card-success pink">
                  <span className="card-icon">🎁</span>
                  <span className="card-title">الكورسات الهدية</span>
                  <div className="card-download-btn">
                    <span>تحميل</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                  </div>
                </a>
              </>
            )}
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
