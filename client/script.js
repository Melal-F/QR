document.getElementById('qr-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const qrId = document.getElementById('qr-id').value;
    const qrPrice = document.getElementById('qr-price').value;

    if (!qrId || !qrPrice) {
        alert('Please fill in all fields');
        return;
    }

    // Simulate QR code generation (replace with actual API call)
    const qrData = `   ID: ${qrId}, Price: ${qrPrice}`;
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrData)}`;

    // Display QR code in popup
    const qrResult = document.getElementById('qr-result');
    qrResult.innerHTML = `<img src="${qrCodeUrl}" alt="QR Code">`;

    // Show the popup
    const qrPopup = document.getElementById('qr-popup');
    qrPopup.style.display = 'flex';
});

// Close the popup
document.getElementById('close-popup').addEventListener('click', function () {
    const qrPopup = document.getElementById('qr-popup');
    qrPopup.style.display = 'none';
});