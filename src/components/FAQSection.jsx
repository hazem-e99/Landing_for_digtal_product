import { useState } from 'react';
import './FAQSection.css';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'ما هو PLR',
      answer: 'PLR هي اختصار لـ Private Label Rights وتمنحك استخدام محتوى جاهز (كتب، مقالات، فيديوهات...) مع إمكانية التعديل ووضع علامتك وإعادة بيعه كأنه من إنتاجك.',
    },
    {
      id: 2,
      question: 'ما هي فوائد استخدام PLR',
      answer: 'تختصر الوقت والتكلفة، تمنحك محتوى احترافي قابل للتخصيص، وتساعد على إطلاق منتجات بسرعة مع جودة عالية.',
    },
    {
      id: 3,
      question: 'كيف يمكن استخدام محتوى PLR',
      answer: 'تحويله إلى كتب إلكترونية أو دورات، مقالات مدونة، نشرات بريدية، قوالب جاهزة، أو إضافته ضمن حزم بعلامتك.',
    },
    {
      id: 4,
      question: 'كيف يُمكنني أن أدفع لشراء هذه الحزمة ؟',
      answer: 'بطاقات الائتمان وخيارات محلية، بعد الدفع يصلك رابط التحميل الفوري إلى بريدك.',
    },
    {
      id: 5,
      question: 'كيف سأحصل على الحزمة عند شرائها ؟',
      answer: 'تسليم فوري عبر لوحة التحميل + تحديثات مستقبلية مجانية عند توفر تحسينات.',
    },
    {
      id: 6,
      question: 'لماذا الأسعار رخيصة ؟',
      answer: 'نبيع حقوق PLR بمقياس كبير وتكاليف تشغيل أقل، فنقدم سعرًا تنافسيًا مع قيمة عالية للعملاء.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" dir="rtl">
      <div className="faq-container">
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={faq.id} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span className="faq-arrow">▼</span>
                <span className="faq-question-text">{faq.question}</span>
              </button>
              <div className="faq-answer-wrapper">
                <p className="faq-answer">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
