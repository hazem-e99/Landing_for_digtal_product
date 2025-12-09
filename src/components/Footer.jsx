import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" dir="rtl">
      <div className="footer-container">
        {/* Logo/Brand */}
        <div className="footer-brand">
          متجر رقمي
        </div>

        {/* Links */}
        <div className="footer-links">
          <a href="#" className="footer-link">سياسة الخصوصية</a>
          <a href="#" className="footer-link">الشروط والأحكام</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
