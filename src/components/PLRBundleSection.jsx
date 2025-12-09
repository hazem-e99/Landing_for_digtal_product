import './PLRBundleSection.css';

const PLRBundleSection = () => {
  const bundles = [
    { id: 1, image: 'https://ivomarket.com/wp-content/uploads/2025/07/wordpress-templates.webp', alt: 'Bundle 1' },
    { id: 2, image: 'https://ivomarket.com/wp-content/uploads/2025/07/That_Girl_Planner_Cover_Photo_86.webp', alt: 'Bundle 2' },
    { id: 3, image: 'https://ivomarket.com/wp-content/uploads/2025/07/il_1588xN.6147655960_gmlm.webp', alt: 'Bundle 3' },
    { id: 4, image: 'http://www.plrfast.com/wp-content/uploads/2025/09/MOCKUP_15000_PLANNERS_IMAGE_6_2-1.webp', alt: 'Bundle 4' },
    { id: 5, image: 'http://www.plrfast.com/wp-content/uploads/2025/09/il_1588xN.5921313678_nyku_1.webp', alt: 'Bundle 5' },
    { id: 6, image: 'https://ivomarket.com/wp-content/uploads/2025/01/1000-PREMIUM-LANDING-PAGES-AND-SALES-PAGES-EDITABLES-IN-ELEMENTOR.webp', alt: 'Bundle 6' },
    { id: 7, image: 'http://www.plrfast.com/wp-content/uploads/2025/09/T-SHIRT_BUNDLE_PLRHOW_1.webp', alt: 'Bundle 7' },
    { id: 8, image: 'https://ivomarket.com/wp-content/uploads/2025/07/plr-DIGITAL-PRODUCTS.webp', alt: 'Bundle 8' },
    { id: 9, image: 'https://ivomarket.com/wp-content/uploads/2025/07/Anadir-un-titulo-4.webp', alt: 'Bundle 9' },
    { id: 10, image: 'https://ivomarket.com/wp-content/uploads/2025/07/487506522_9464135037040487_24648.webp', alt: 'Bundle 10' },
    { id: 11, image: 'https://ivomarket.com/wp-content/uploads/2025/07/Diseno-sin-titulo-15.webp', alt: 'Bundle 11' },
    { id: 12, image: 'https://ivomarket.com/wp-content/uploads/2025/07/JPG_100_PAGES_KDP_COLORING_BOOKS.webp', alt: 'Bundle 12' },
    { id: 13, image: 'https://ivomarket.com/wp-content/uploads/2025/07/144_Pages_Prayer_Journal_1.webp', alt: 'Bundle 13' },
    { id: 14, image: 'https://ivomarket.com/wp-content/uploads/2025/07/Diseno-sin-titulo-30.webp', alt: 'Bundle 14' },
    { id: 15, image: 'https://ivomarket.com/wp-content/uploads/2025/07/4-1-1.jpg', alt: 'Bundle 15' },
    { id: 16, image: 'http://www.plrfast.com/wp-content/uploads/2024/12/1000-Fully-Editable-Pages.webp', alt: 'Bundle 16' },
    { id: 17, image: 'https://ivomarket.com/wp-content/uploads/2025/07/wa-sender-pro-1022x1024-png-500x-Editada.webp', alt: 'Bundle 17' },
    { id: 18, image: 'https://ivomarket.com/wp-content/uploads/2025/07/200-Business-Ebook-Bundle.webp', alt: 'Bundle 18' },
  ];

  return (
    <section className="plr-bundle-section" dir="rtl">
      <div className="plr-bundle-container">
        {/* Section Header */}
        <div className="plr-bundle-header">
          <h2 className="plr-bundle-title">
            <span className="rocket-icon">🚀</span>
            احصل على حزمة PLR النهائية
          </h2>
          <p className="plr-bundle-description">
            داخل هذه الحزمة الشاملة ستحصل على مجموعة قوية من المنتجات الرقمية القابلة للتعديل مع حقوق
            <br />
            العلامة البيضاء الكاملة (Private Label Rights). كل ما تراه أدناه <span className="highlight-text">مشمول</span> — جاهز لإعادة البيع، أو إعادة
            <br />
            العلامة التجارية، أو إطلاق إمبراطوريتك الرقمية القادمة.
          </p>
        </div>

        {/* Bundles Grid */}
        <div className="bundles-grid">
          {bundles.map((bundle) => (
            <div key={bundle.id} className="bundle-card">
              <div className="bundle-image-wrapper">
                <img
                  src={bundle.image}
                  alt={bundle.alt}
                  className="bundle-image"
                  loading="lazy"
                />
              </div>
              <div className="bundle-badge-wrapper">
                <span className="bundle-badge">مشمول</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PLRBundleSection;
