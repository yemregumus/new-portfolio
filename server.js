const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

//server used to send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "yemregumus83@gmail.com",
    pass: "qmtt nfox oywe fmmz",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.get("/", (req, res) => {
  res.send("Server is running!");
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + " " + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "yemregumus83@gmail.com",
    subject: "Someone wants to connect with you through your portfolio website",
    html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
