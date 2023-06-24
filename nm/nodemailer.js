const nodemailer = require("nodemailer");
const googleApis = require("googleapis");

const REDIRECT_URI = `https://developers.google.com/oauthplayground`;
const CLIENT_ID = `603349147077-hvl2qbc356sfqjuoq9ga4m729ifp1gb8.apps.googleusercontent.com`;
const CLIENT_SECRET = `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`;
const REFRESH_TOKEN = `1//04_KUWGgdaoTyCgYIARAAGAQSNwF-L9IrIaUK0QbUNPibhzZuDhwfGeDlJZy6WQmNGp8-aQRfYKRT93XgOh1IaPIM9-6__zzXSfw`;

const authClient = new googleApis.google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
authClient.setCredentials({refresh_token: REFRESH_TOKEN});


async function mailer(){
    try{
        const ACCESS_TOKEN = await authClient.getAccessToken();

        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: "msakshams24@gmail.com",
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: ACCESS_TOKEN
            }
        })

        const details = {
            from: "saksham<msakshams24@gmail.com>",
            to: "sakshamsoni06.24@gmail.com",
            subject: "your account has been hacked",
            text: "hii there",
            html: "<h2>lund se</h2>"
        }

        const result =  await transport.sendMail(details);
        return result;

    }
    catch(err){
        return err;
    }
}

mailer().then(res => {
    console.log("sent mail !", res);
})