import './ProductsSection.css';

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      image: 'https://ivomarket.com/wp-content/uploads/2025/08/67ef50a139379a143a018679.webp',
      title: 'قوالب Canva',
      count: '+5,300',
      description: 'قوالب جاهزة للتصميم لوسائل التواصل، البطاقات التجارية والعروض التقديمية مع حقوق PLR كاملة.',
      buttonText: 'بعها كقوالب بعلامتك التجارية',
    },
    {
      id: 2,
      image: 'https://ivomarket.com/wp-content/uploads/2025/08/67ef50a1f504ae463ba10468.webp',
      title: 'قوالب Notion',
      count: '+1,200',
      description: 'أنظمة جاهزة لتنظيم المشاريع، الحملات والمهام. أعد تسميتها ثم أعد بيعها.',
      buttonText: 'بعها كأدوات إنتاجية',
    },
    {
      id: 3,
      image: 'https://ivomarket.com/wp-content/uploads/2025/08/67ef50a1391ca165b4d69f5e.webp',
      title: 'دورات فيديو',
      count: '+640',
      description: 'دورات فيديو من التسويق، الأعمال، وتطوير الذات مع حقوق PLR.',
      buttonText: 'أعد تصميمها وبِع الدورات',
    },
    {
      id: 4,
      image: 'https://ivomarket.com/wp-content/uploads/2025/08/67ef50a1019de0446766bae4.webp',
      title: 'قوالب مواقع',
      count: '+2,350',
      description: 'حزم مواقع متجاوبة وجاهزة للسيو ومهيأة للتحويلات.',
      buttonText: 'بعها لعملاء تصميم المواقع',
    },
    {
      id: 5,
      image: 'https://ivomarket.com/wp-content/uploads/2025/08/67ef50a19044f7c0f4b21a63.webp',
      title: 'قوالب Excel',
      count: '+12,400',
      description: 'جداول مالية، مخزون وأدوات بيانات مع حقوق إعادة البيع.',
      buttonText: 'بعها كأدوات أعمال',
    },
    {
      id: 6,
      image: 'https://ivomarket.com/wp-content/uploads/2025/08/67ef50a19044f77f33b21a62.webp',
      title: 'حزم عروض تقديمية',
      count: '+18,700',
      description: 'قوالب شرائح للأعمال، التعليم والتسويق مع حقوق PLR كاملة.',
      buttonText: 'بعها كحزم عروض تقديمية',
    },
    {
      id: 7,
      image: 'https://ivomarket.com/wp-content/uploads/2025/08/67ef50a19044f7c050b21a64.webp',
      title: 'كتب تلوين للأطفال',
      count: '+6,200',
      description: 'كتب تلوين وأنشطة تعليمية جاهزة للطباعة أو البيع أونلاين.',
      buttonText: 'بعها كنشاطات للأطفال',
    },
    {
      id: 8,
      image: 'https://ivomarket.com/wp-content/uploads/2025/08/67ef50a139379ab03b018678.webp',
      title: 'مواد Adobe Suite',
      count: '+3,200',
      description: 'فرش، تأثيرات وقوالب لبرامج PS/AI/PR مع حقوق PLR.',
      buttonText: 'بعها كموارد تصميم',
    },
    {
      id: 9,
      image: 'https://ivomarket.com/wp-content/uploads/2025/08/67ef50a1f504ae179da10466.webp',
      title: 'قوالب Reels',
      count: '+10,800',
      description: 'قوالب جاهزة لريلز إنستغرام وتيك توك مع مؤثرات قوية.',
      buttonText: 'بعها كمحتوى سوشيال ميديا',
    },
    {
      id: 10,
      image: 'https://ivomarket.com/wp-content/uploads/2025/08/67ef50a19044f71b40b21a61.webp',
      title: 'منشورات سوشيال ميديا',
      count: '+22,100',
      description: 'قوالب منشورات وكاروسيل مع حقوق إعادة البيع PLR.',
      buttonText: 'بعها كحزم محتوى',
    },
    {
      id: 11,
      image: 'https://ivomarket.com/wp-content/uploads/2025/08/67ef50a139379aa90c01867a.webp',
      title: 'موسيقى خالية من الحقوق',
      count: '+5,600',
      description: 'مقاطع موسيقية تجارية للفيديوهات البودكاست والإعلانات.',
      buttonText: 'بعها كحزم موسيقى',
    },
    {
      id: 12,
      image: 'https://ivomarket.com/wp-content/uploads/2025/08/67ef50a139379a338b018677.webp',
      title: 'فيديوهات ستوك عالية الدقة',
      count: '+2,700',
      description: 'مقاطع ستوك بدقة 4K لمشاريع التسويق والسوشيال ميديا.',
      buttonText: 'بعها كحزم فيديو',
    },
  ];

  return (
    <section className="products-section" dir="rtl">
      <div className="products-container">
        {/* Section Header */}
        <div className="products-header">
          <div className="products-badge">
            <span>مكتبة منتجات رقمية</span>
          </div>
          <h2 className="products-title">
            كل ما تحتاجه لبدء إمبراطوريتك الرقمية
          </h2>
          <p className="products-subtitle">
            اختر من بين أكثر من 35,000 منتج رقمي مميز
          </p>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-wrapper">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                  loading="lazy"
                />
              </div>
              <div className="product-content">
                <div className="product-header">
                  <h3 className="product-title">{product.title}</h3>
                  <span className="product-count">{product.count}</span>
                </div>
                <p className="product-description">{product.description}</p>
                <button className="product-button">
                  <span className="button-dot"></span>
                  {product.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
