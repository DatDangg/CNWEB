import React, { useState } from 'react';
import './style.css';

function Payment({ product, quantity, onClose }) {
    const unitPrice = product.current_seller.price;
    const totalPrice = unitPrice * quantity;
    const qrCodeUrl = `https://qr.sepay.vn/img?acc=4220112003&bank=MBBANK&amount=${totalPrice}`;
    const [showQRCode, setShowQRCode] = useState(false);

    const handlePaymentClick = () => {
        setShowQRCode(true);
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;