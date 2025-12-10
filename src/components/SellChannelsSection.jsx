import './SellChannelsSection.css';

const SellChannelsSection = () => {
  const channels = [
    {
      id: 1,
      icon: '📱',
      title: 'في مواقع التواصل',
      description: 'بع عبر فيسبوك، إنستغرام، تيك توك، وتطبيقات العمل الحر.',
    },
    {
      id: 2,
      icon: '🛍️',
      title: 'منصة إتسي',
      description: 'اعرض القوالب والملفات الإبداعية في سوق عالمي يليق به المشترون.',
    },
    {
      id: 3,
      icon: '🌐',
      title: 'في موقعك الخاص',
      description: 'كوّن عرضًا قويًا بووردبريس + ووكومرس مع تحكم كامل بالعلامة.',
    },
    {
      id: 4,
      icon: '🔥',
      title: 'منصة هوتمارت',
      description: 'منصة رائدة للمنتجات الرقمية مع أدوات دفع وتسويق متكاملة.',
    },
  ];

  return (
    <section className="sell-channels-section" dir="rtl">
      <div className="sell-channels-container">
        {/* Section Header */}
        <div className="sell-channels-header">
          <div className="header-title-badge">
            <h2 className="sell-channels-title">
              أين يمكنك بيع هذه المنتجات الرقمية؟
            </h2>
          </div>
          <p className="sell-channels-subtitle">
            أربع قنوات أساسية لزيادة فرص الربح وبناء علامتك الخاصة
          </p>
        </div>

        {/* Channels Grid */}
        <div className="channels-grid">
          {channels.map((channel) => (
            <div key={channel.id} className="channel-card">
              <div className="channel-icon">{channel.icon}</div>
              <h3 className="channel-title">{channel.title}</h3>
              <p className="channel-description">{channel.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="sell-cta-section">
          <p className="cta-text">
            <span className="cta-rocket">🚀</span>
            ابدأ الآن واستثمر في مستقبلك الرقمي!
          </p>
          <a href="https://wa.me/201065453966" target="_blank" rel="noopener noreferrer" className="sell-cta-button">
            نعم أريد هذا العرض الآن
          </a>
        </div>
      </div>
    </section>
  );
};

export default SellChannelsSection;
