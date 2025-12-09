import './CoursesSection.css';

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      image: 'https://www.raqmiy.com/wp-content/uploads/2025/10/الكورسات-4.webp',
      label: 'كورس',
      subtitle: 'الطباعة عند الطلب بالذكاء الاصطناعي',
      title: 'الطباعة عند الطلب بالذكاء الاصطناعي',
      description: 'أطلق مشروعك الخاص في الطباعة عند الطلب وابدأ البيع عالميًا دون تكاليف أو مخزون.',
    },
    {
      id: 2,
      image: 'https://www.raqmiy.com/wp-content/uploads/2025/10/الكورسات-3.webp',
      label: 'كورس',
      subtitle: 'التسويق بالعمولة',
      title: ' الربح من بيع الكتب الإلكترونية',
      description: 'اصنع كتبًا رقمية احترافية وابدأ بيعها في أمازون ومنصات النشر العالمية.',
    },
    {
      id: 3,
      image: 'https://www.raqmiy.com/wp-content/uploads/2025/10/الكورسات-2.webp',
      label: 'كورس',
      subtitle: 'الربح من بيع الكتب الإلكترونية',
      title: 'التسويق بالعمولة',
      description: 'تعلم أسرار التسويق بالعمولة وكيفية اختيار العروض التي تحقق أرباحًا مستمرة.'
    },
    {
      id: 4,
      image: 'https://www.raqmiy.com/wp-content/uploads/2025/10/الكورسات-1.webp',
      label: 'كورس',
      subtitle: 'الطباعة عند الطلب بالذكاء الاصطناعي',
      title: 'الطباعة عند الطلب بالذكاء الاصطناعي',
      description: 'حوّل النصوص إلى فيديوهات جذابة بصوت واقعي وابدأ نشر محتوى احترافي بسهولة.',
    },
    {
      id: 5,
      image: 'https://www.raqmiy.com/wp-content/uploads/2025/06/1-1.webp',
      label: 'كورس التسويق',
      subtitle: 'الرقمي الاحترافي',
      title: 'كورس Canva ماستر كلاس',
      description: 'تعلّم إنشاء تصاميم احترافية وقوالب قابلة للبيع بسهولة باستخدام أدوات Canva الحديثة.',
    },
    {
      id: 6,
      image: 'https://www.raqmiy.com/wp-content/uploads/2025/06/2-1.webp',
      label: 'كورس احتراف',
      subtitle: 'إعلانات الفايسبوك و الإنستجرام',
      title: 'كورس بيع المنتجات الرقمية',
      description: 'اكتشف كيفية بناء متجرك، التسعير الذكي، واستراتيجيات التحويل لزيادة المبيعات بأقل تكلفة.',
    },
    {
      id: 7,
      image: 'https://www.raqmiy.com/wp-content/uploads/2025/06/3-3.webp',
      label: 'كورس بيع',
      subtitle: 'المنتجات الرقمية',
      title: 'احتراف إعلانات فيسبوك وإنستجرام',
      description: 'تعلم إعداد الحملات الإعلانية، الاستهداف بدقة، وتحليل الأداء لتحقيق نتائج مذهلة.',
    },
    {
      id: 8,
      image: 'https://www.raqmiy.com/wp-content/uploads/2025/06/4-1.webp',
      label: 'كورس Canva ماستر',
      subtitle: 'كلاس',
      title: 'كورس التسويق الرقمي الاحترافي',
      description: 'أساسيات المحتوى، البريد الإلكتروني، تحسين الصفحات، وتحليل البيانات لتطوير أعمالك الرقمية.',
    },
  ];

  return (
    <section className="courses-section" dir="rtl">
      <div className="courses-container">
        {/* Section Header */}
        <div className="courses-header">
          <div className="header-badge">
            <span className="diamond-icon">💎</span>
            <h2 className="courses-title">
              <span className="number-highlight">٨</span> كورسات حصرية هدية مع الحزمة الرقمية
            </h2>
          </div>
          <p className="courses-subtitle">
            احصل على أقوى الدورات العملية لتبدأ مشروعك الرقمي وتربح من الإنترنت بسهولة.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="courses-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              {/* Image Section */}
              <div className="card-image-section">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="card-image"
                  loading="lazy"
                />
              </div>

              {/* Free Badge - Centered */}
              <div className="free-badge-wrapper">
                <div className="free-badge">
                  <span className="badge-flames">🔥</span>
                  <span className="badge-text">هدية مجانية</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="card-content">
                <h3 className="card-title">{course.title}</h3>
                <p className="card-description">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
