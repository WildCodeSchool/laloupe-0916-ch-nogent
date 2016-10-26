module.exports = function(app) {
    'use strict';
    var nodemailer = require('nodemailer');
    var userInfos = {
      user: "hello@mail.com",
      pass: 'if neccessary'
    };
    /*
      Configure userInfos
      Post an object to /api/sendEmail
        Must contain : Name (name), Email (email) & Message (msg)
    */
    var transport = nodemailer.createTransport({
      host: "localhost",
      port: 465,
  		// secure: false,
		//auth: {
			//user: userInfos.user,
			//pass: userInfos.pass
		//}
	});
//	transport.on('log', console.log);
    var header = '<table style="width:70%; margin-left: 15%;">' +
    '<thead align="center">' +
    '<tr>' +
    '<td colspan="4">Insérer le logo ici</td>' +
    '</tr>' +
    '</thead>' +
    '<tbody>' +
    '<tr>' ;

    var footer = '</tr>' +
    '<tr align="center" style="background-color:#64737c;width:100%;heigth:60px;padding-top: 5px;color:#fff;">' +
    '<td colspan="4" style="padding-top:10px;">&copy; 2016 - Nom de l\'entreprise </td>' +
    '</tr>' +
    '</tbody>' +
    '</table>' +
    '<table style="width:70%; margin-left: 15%;text-align:center;">' +
    '<tr style="padding-top:5px;">' +
    '<td><a href="http://exemple_lien_social"><img src="https://lh5.googleusercontent.com/-x-Hmsu_OW5Q/V1XXAqCuWrI/AAAAAAAAAZc/0VFBChKUDNk1jmcXAdQwUsG_Srlk89xPACL0B/s44-no/facebook.png"/></a></td>' +
    '</tr>' +
    '</table>';

    var send = function(mailOptions) {
        transport.sendMail(mailOptions, function(err, info) {
	    if (err)
		console.log(err);
            transport.close();
        });
    };

    app.post('/sendEmail', function(req, res) {

        var htmlContent =
            header +
            '<td style="padding-top:15px;padding-left:10px;"><p>Name: <b>' + req.body.prenom + '</b>,</p></td>' +
            '</tr>' +
            '<tr>' +
            '<td style="padding-top:15px;padding-left:10px;"><p>Email: <b>' + req.body.nom + '</b>,</p></td>' +
            '</tr>' +
            '<tr>' +
            '<td style="padding-top:15px;padding-left:10px;"><p>Email: <b>' + req.body.mail + '</b>,</p></td>' +
            '</tr>' +
            '<tr>' +
            '<td style="padding-top:15px;padding-left:10px;"><p>Email: <b>' + req.body.tel + '</b>,</p></td>' +
            '</tr>' +
            '<tr>' +
            '<td style="padding-top:15px;padding-left:10px;"><p>Email: <b>' + req.body.contactpar + '</b>,</p></td>' +
            '</tr>' +
            '<tr>' +
            '<td align="left" style="padding-left:10px;"><p> Message: ' + req.body.msg + '</p></td>' +
            footer;

        send({
            from: userInfos.user, // your email here
            subject: 'Formulaire de contact',
            to: req.body.dest,
            sender: 'mailer <' + userInfos.user + '>',
            html: htmlContent
        });
        res.sendStatus(200);


    });

};
