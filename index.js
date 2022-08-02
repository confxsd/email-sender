const mailgun = require("mailgun-js");
const DOMAIN = 'bxld.space';
const mg = mailgun({apiKey: 'a696dd6d222fa0f60eacddf372b94515-835621cf-72eb7706', domain: DOMAIN});
const data = {
	from: 'BXLD <hello@bxld.space>',
	to: 'serhat@bxld.space',
	subject: 'Hello',
	text: 'Test Text!'
};
mg.messages().send(data, function (error, body) {
	console.log(body);
	console.log(error);
});