const service = require('./service');

exports.generateQR = async (req, res) => {
  try {
    console.log('Request body:', req.body); 

    const { data } = req.body;

    if (!data) {
      return res.status(400).send({ error: 'Data is required' });
    }

    const qrCodeText = service.formatData(data);
    console.log('Formatted QR code text:', qrCodeText); 

    const qrCodeBuffer = await service.generateQRCode(qrCodeText);
    console.log('QR code generated successfully'); 

    res.setHeader('Content-Disposition', 'attachment; filename=qrcode.png');
    res.type('image/png').send(qrCodeBuffer);
  } catch (err) {
    console.error('Error generating QR code:', err); 
    res.status(500).send({ error: 'Internal Server Error' });
  }
};