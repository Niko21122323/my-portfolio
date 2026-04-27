"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const organization = formData.get("organization") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !organization || !message) {
    return { success: false, error: "Missing required fields" };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      replyTo: email,
      subject: `Portfolio Contact: ${name} from ${organization}`,
      text: `Name: ${name}\nEmail: ${email}\nOrganization: ${organization}\n\nMessage:\n${message}`,
    });

    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to send email" };
  }
}
