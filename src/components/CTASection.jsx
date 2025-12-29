import './CTASection.css';
import { trackInitiateCheckout } from '../utils/tracking';
import { initiateCheckout } from '../services/api';

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
          <button 
            className="cta-main-button" 
            onClick={() => {
              trackInitiateCheckout();
              initiateCheckout();
            }}
          >
            <span className="button-fires">🔥🔥</span>
            احصل على الحزمة الآن
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
