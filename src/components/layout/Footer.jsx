import './Footer.css' // Import file CSS cho Footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Phần thông tin công ty */}
        <div className="footer-section">
          <h3>Công ty XYZ</h3>
          <p>Địa chỉ: 123 Đường ABC, Quận 1, TP. Hồ Chí Minh</p>
          <p>Email: contact@xyz.com</p>
        </div>

        {/* Phần liên kết nhanh */}
        <div className="footer-section">
          <h3>Liên kết nhanh</h3>
          <ul>
            <li>
              <a href="#">Trang chủ</a>
            </li>
            <li>
              <a href="#">Giới thiệu</a>
            </li>
            <li>
              <a href="#">Dịch vụ</a>
            </li>
            <li>
              <a href="#">Liên hệ</a>
            </li>
          </ul>
        </div>

        {/* Phần mạng xã hội */}
        <div className="footer-section">
          <h3>Mạng xã hội</h3>
          <div className="social-icons"></div>
        </div>
      </div>

      {/* Phần bản quyền */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Công ty XYZ. Bảo lưu mọi quyền.</p>
      </div>
    </footer>
  )
}

export default Footer
