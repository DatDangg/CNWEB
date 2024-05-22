import React, { useState } from 'react';
import './style.css';

function Payment({ product, quantity, onClose }) {
    const unitPrice = product.current_seller.price;
    const totalPrice = unitPrice * quantity;
    const qrCodeUrl = `https://qr.sepay.vn/img?acc=4220112003&bank=MBBANK&amount=${totalPrice}`;
    const [showQRCode, setShowQRCode] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState('');

    const handlePaymentClick = () => {
        setShowQRCode(true);
        // Gọi hàm kiểm tra thanh toán khi thanh toán được bắt đầu
        checkPaymentStatus();
    };

    const checkPaymentStatus = () => {
    fetch('https://dangkyhoctlu.000webhostapp.com/test.php')
        .then(response => response.json())
        .then(data => {
            if (data.success && data.transaction && data.transaction.amount_in === totalPrice) {
                const transactionDate = new Date(data.transaction.transaction_date);
                const currentDate = new Date();
                const timeDifference = Math.abs(currentDate - transactionDate) / 1000; // in seconds

                // Kiểm tra xem giao dịch có diễn ra trong vòng 5 phút gần nhất không
                if (timeDifference <= 300) { // 300 giây = 5 phút
                    // Nếu giao dịch thành công và thời gian diễn ra hợp lệ
                    setPaymentStatus('success');
                    onClose(); // Đóng modal sau khi thanh toán thành công
                } else {
                    // Nếu thời gian giao dịch không hợp lệ
                    setPaymentStatus('time-out');
                }
            } else {
                // Nếu giao dịch chưa thành công hoặc số tiền không chính xác
                setPaymentStatus('failed');
            }
        })
        .catch(error => {
            console.error('Error checking payment status:', error);
            setPaymentStatus('error');
        });
};


    return (
        <div className="payment-modal">
            <div className="payment-content">
                <button className="close-button" onClick={onClose}>X</button>
                <h2>Thanh toán</h2>
                <div className="payment-layout">
                    <div className="book-info">
                        <table className="book-table">
                            <thead>
                                <tr>
                                    <th>Tên sách</th>
                                    <th>Giá</th>
                                    <th>Số lượng</th>
                                    <th>Tổng thành tiền</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{product.name}</td>
                                    <td>{unitPrice.toLocaleString()} đ</td>
                                    <td>{quantity}</td>
                                    <td>{totalPrice.toLocaleString()} đ</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="payment-action">
                        <button className="payment-button" onClick={handlePaymentClick}>Thanh toán</button>
                        {showQRCode && (
                            <div className="qr-code">
                                <img src={qrCodeUrl} alt="QR Code for Payment" />
                            </div>
                        )}
                        {paymentStatus === 'success' && <div className="payment-success">Thanh toán thành công!</div>}
                        {paymentStatus === 'failed' && <div className="payment-failed">Thanh toán thất bại hoặc số tiền không chính xác.</div>}
                        {paymentStatus === 'error' && <div className="payment-error">Lỗi khi kiểm tra thanh toán.</div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
