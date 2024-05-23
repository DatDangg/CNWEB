import React, { useState } from 'react';
import Swal from 'sweetalert2';

import './style.css';

function Payment({ product, quantity, onClose }) {
    const unitPrice = product.current_seller.price;
    const totalPrice = unitPrice * quantity;
    const qrCodeUrl = `https://qr.sepay.vn/img?acc=4220112003&bank=MBBANK&amount=${totalPrice}`;
    const [showQRCode, setShowQRCode] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState('');

    const handlePaymentClick = () => {
        setShowQRCode(true);
        checkPaymentStatus();
    };

    const checkPaymentStatus = () => {
        fetch('https://dangkyhoctlu.000webhostapp.com/test.php')
            .then(response => response.json()) 
            .then(data => {
                // console.log('Response:', data); 
                if (data.transactions && data.transactions.length > 0) {
                    for (let i = 0; i < data.transactions.length; i++) {
                        const transaction = data.transactions[i];
                        if (parseFloat(transaction.amount_in) === totalPrice) {
                            const transactionDate = new Date(transaction.transaction_date);
                            // console.log(transactionDate)
                            const currentDate = new Date();
                            const timeDifference = Math.abs(currentDate - transactionDate) / 1000; 
    
                            if (timeDifference <= 300) { 
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Thanh toán thành công',
                                    text: 'Giao dịch của bạn đã được xác nhận.',
                                    confirmButtonText: 'OK'
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        onClose(); 
                                    }
                                });
                                return;
                            } else {
                                setPaymentStatus('time-out');
                                return;
                            }
                        }
                    }
                    setPaymentStatus('failed');
                } else {
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
                        {paymentStatus === 'failed' && <div className="payment-failed">Thanh toán thất bại</div>}
                        {paymentStatus === 'error' && <div className="payment-error">Lỗi khi kiểm tra thanh toán.</div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
