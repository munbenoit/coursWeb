import { Request, Response } from "express";

const express = require("express");
const http = require("http");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { google } = require("googleapis");

const nodemailer = require("nodemailer");
require("dotenv").config();
const axios = require("axios");

const sha = require("js-sha256");
const sha256 = sha.sha256;

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const oAuth2Client = new google.auth.OAuth2(
  process.env.NEXT_APP_GMAIL_CLIENT_ID,
  process.env.NEXT_APP_GMAIL_CLIENT_SECRET,
  process.env.NEXT_APP_SITE_URL
);

const verifyCaptcha = async (token: string) => {
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_APP_RECAPTCHA_SECRET}&response=${token}`;
  const { data } = await axios.get(url);
  return data.success;
};

const mailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

app.use(
  cors({
    credentials: true,
    origins: ["http://localhost:3000"],
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/send", (req: Request, res: Response) => {
  oAuth2Client.setCredentials({
    refresh_token: process.env.NEXT_APP_GMAIL_REFRESH_TOKEN,
  });

  const accessToken = oAuth2Client.getAccessToken();
  const captcha = verifyCaptcha(req.body.captcha);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: String(process.env.NEXT_APP_MAIL_ADDRESS),
      clientId: String(process.env.NEXT_APP_GMAIL_CLIENT_ID),
      clientSecret: String(process.env.NEXT_APP_GMAIL_CLIENT_SECRET),
      refreshToken: String(process.env.NEXT_APP_GMAIL_REFRESH_TOKEN),
      accessToken: String(accessToken),
      expires: Date.now() + 3600,
    },
  });

  const message = {
    from: req.body.email,
    to: "benoit.munoz@agaetis.fr",
    subject: "Demande de contact via site web cours Web",
    html: req.body.message,
  };

  const key = Buffer.from(
    req.body.firstname +
      req.body.lastname +
      process.env.NEXT_APP_CONTACT_SALT +
      req.body.email +
      req.body.content +
      req.body.date +
      req.body.captcha,
    "base64"
  );

  if (
    req.body.hash === sha256(key) &&
    captcha &&
    req.body.lastname.length > 0 &&
    req.body.firstname.length > 0 &&
    req.body.company.length > 0 &&
    mailRegex.test(req.body.email) &&
    req.body.message.length > 0
  ) {
    transporter.sendMail(message, (err: any) => {
      if (err) {
        console.log(err);
        res.status(500).send();
      } else {
        res.status(200).send();
      }
    });
  } else {
    res.status(400).send();
  }
});

http.createServer(app).listen(5000);
