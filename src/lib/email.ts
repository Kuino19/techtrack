// Mock Email Utility for Resend Integration
// In a real application, you would run: npm install resend
// import { Resend } from 'resend';
// const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendRegistrationConfirmation(email: string, studentName: string) {
  console.log(`Sending registration confirmation email to ${email} for student ${studentName}...`)
  
  // return resend.emails.send({
  //   from: 'hello@goanitech.com',
  //   to: email,
  //   subject: 'Registration Confirmed: AI & Robotics Fundamentals',
  //   html: `<p>Hi there,</p><p>Your registration for <strong>${studentName}</strong> has been confirmed.</p>`
  // });
  
  return { success: true }
}

export async function sendCertificateEmail(email: string, studentName: string, certificateUrl: string) {
  console.log(`Sending certificate email to ${email}...`)
  
  // return resend.emails.send({
  //   from: 'hello@goanitech.com',
  //   to: email,
  //   subject: 'Congratulations! Certificate of Completion',
  //   html: `<p>Congratulations ${studentName}!</p><p>You can view and download your certificate here: <a href="${certificateUrl}">${certificateUrl}</a></p>`
  // });

  return { success: true }
}
