import './style.css'

function Footer() {
    return (
        <div className="footer mt-12">
            <div className="wide footer__content">
                <div className="row grid grid-cols-5">
                    <div className="col l-2-4 m-6 c-6">
                        <h3 className="footer__heading">Hỗ trợ khách hàng</h3>
                            <p href="#" className="footer-item__link">Hotline: 1900-6035 <br /> (1000 đ/phút, 8-21h kể cả T7, CN)</p>
                            <a href="#" className="footer-item__link" id="footer-item-text">Các câu hỏi thường gặp</a>
                            <a href="#" className="footer-item__link" id="footer-item-text">Gửi yêu cầu hỗ trợ</a>
                            <a href="#" className="footer-item__link" id="footer-item-text">Hướng dẫn đặt hàng</a>
                            <a href="#" className="footer-item__link" id="footer-item-text">Phương thức vận chuyển</a>
                            <a href="#" className="footer-item__link" id="footer-item-text">Chính sách đổi trả</a>
                            <a href="#" className="footer-item__link" id="footer-item-text">Hướng dẫn trả góp</a>
                            <a href="#" className="footer-item__link" id="footer-item-text">Chính sách hàng nhập khẩu</a>
                            <p href="#" className="footer-item__link">Hỗ trợ khách hàng: hotro@tiki.vn</p>
                            <p href="#" className="footer-item__link">Báo lỗi bảo mật: security@tiki.vn</p>
                    </div>
                    <div className="col l-2-4 m-6 c-6">
                        <h3 className="footer__heading">Về Tiki</h3>
                            <a href="#" className="footer-item__link" id="footer-item-text">Giới thiệu Tiki</a>
                            <a href="#" className="footer-item__link" id="footer-item-text">Tiki Blog</a>
                            <a href="#" className="footer-item__link" id="footer-item-text">Tuyển dụng</a>
                            <a href="#" className="footer-item__link" id="footer-item-text">Chính sách bảo mật thanh toán</a>
                            <a href="#" className="footer-item__link" id="footer-item-text">Chính sách bảo mật thông tin cá nhân</a>
                            <a href="#" className="footer-item__link" id="footer-item-text">Chính sách giải quyết khiếu nại</a>
                            <a href="#" className="footer-item__link" id="footer-item-text">Điều khoản sử dụng</a>
                            <a href="#" className="footer-item__link" id="footer-item-text">Giới thiệu Tiki Xu</a>
                            <a href="#" className="footer-item__link" id="footer-item-text">Gói hội viên VIP</a>
                            <a href="#" className="footer-item__link" id="footer-item-text">Tiếp thị liên kết cùng Tiki</a>
                            <a href="#" className="footer-item__link" id="footer-item-text">Bán hàng doanh nghiệp</a>
                            <a href="#" className="footer-item__link" id="footer-item-text">Điều kiện vận chuyển</a>
                    </div>
                    <div className="col l-2-4 m-6 c-6">
                        <h3 className="footer__heading">Hợp tác và liên kết</h3>
                        <a href="#" className="footer-item__link" id="footer-item-text">Quy chế hoạt động Sàn GDTMĐT</a>
                        <a href="#" className="footer-item__link" id="footer-item-text">Bán hàng cùng Tiki</a>
                        <br />
                        <h3 className="footer__heading">Chứng nhận bởi</h3>
                        <div className="footer__heading--payment-img">
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg" alt="" className="" />
                        </div>
                    </div>
                    <div className="col l-2-4 m-6 c-6">
                        <h3 className="footer__heading">Phương thức thanh toán</h3>
                        <br />  
                        <h3 className="footer__heading">Dịch vụ giao hàng</h3>
                    </div>
                    <div className="col l-2-4 m-6 c-12">
                        <h3 className="footer__heading">Kết nối với chúng tôi</h3>
                        <div class="contact">
                            <a href="#"><img src="../fb.jpg" alt="" className="footer__heading--transport-img" /></a>
                            <a href="#"><img src="../yt.jpg" alt="" className="footer__heading--transport-img" /></a>
                            <a href="#"><img src="../zalo.jpg" alt="" className="footer__heading--transport-img" /></a>
                        </div>
                        <br />
                        <h3 className="footer__heading">Tải ứng dụng trên điện thoại</h3>
                    </div>
                </div>
            </div>
            <hr />
                <h5 className="footer__heading">Công ty TNHH TIKI</h5>
                <p className="footer-item__link">
                    Địa chỉ trụ sở: Tòa nhà Viettel, Số 285, Đường Cách Mạng Tháng 8, Phường 12, Quận 10, Thành phố Hồ Chí Minh
                </p>
                <p className="footer-item__link">
                    Giấy chứng nhận đăng ký doanh nghiệp số 0309532909 do Sở Kế Hoạch và Đầu Tư Thành phố Hồ Chí Minh cấp lần đầu vào ngày 06/01/2010.
                </p>
                <p className="footer-item__link">Hotline: <a href="/" className="text-blue-600">1900 6035</a></p>
        </div>
    )
}

export default Footer