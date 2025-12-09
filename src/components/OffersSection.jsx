import './OffersSection.css';

const OffersSection = () => {
  const offers = [
    {
      id: 1,
      image: 'https://www.raqmiy.com/wp-content/uploads/2025/06/%D8%AA%D8%B5%D8%A7%D9%85%D9%8A%D9%85-%D8%A7%D9%84%D8%AA%D9%8A%D8%B4%D8%B1%D8%AA.webp',
      alt: 'تصاميم التيشرتات',
    },
    {
      id: 2,
      image: 'https://www.raqmiy.com/wp-content/uploads/2025/06/%D9%82%D9%88%D8%A7%D9%84%D8%A8-%D8%A7%D9%83%D8%B3%D9%84.webp',
      alt: 'قوالب اكسل',
    },
    {
      id: 3,
      image: 'https://www.raqmiy.com/wp-content/uploads/2025/06/%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-%D9%88%D8%A7%D8%AA%D8%B3%D8%A7%D8%A8-%D8%B3%D9%86%D8%AF%D8%B1.webp',
      alt: 'برنامج واتساب سندر',
    },
  ];

  return (
    <section className="offers-section" dir="rtl">
      <div className="offers-container">
        <div className="offers-grid">
          {offers.map((offer) => (
            <div key={offer.id} className="offer-card">
              <div className="offer-image-container">
                <img
                  src={offer.image}
                  alt={offer.alt}
                  className="offer-image"
                  loading="lazy"
                />
              </div>
              <div className="offer-button-wrapper">
                <button className="offer-button">ضمن العرض</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
