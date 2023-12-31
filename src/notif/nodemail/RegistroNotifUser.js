const { createTransporter } = require("../nodemail/transporter");
 
 const sendConfirmationEmail = (userEmail) => {
     const transporter = createTransporter();
 
     const mailOptions = {
         from: 'ruukazu@gmail.com',
         to: userEmail,
         subject: 'Confirmacion de registro de usuario',
         text: 'Gracias por registrarse en la aplicacion'
     };
 
     transporter.sendMail(mailOptions, (error, info) => {
         if (error) {
             console.error('Error sending email:', error);
         } else {
             console.log('Email sent:', info.response);
         }
     });
 };
 module.exports = {
    sendConfirmationEmail,
};