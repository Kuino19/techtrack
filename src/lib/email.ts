import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
// Note: If you have a verified domain, replace this with your actual from email
// e.g. 'hello@yourdomain.com'
const FROM_EMAIL = 'onboarding@resend.dev'; 

export async function sendRegistrationConfirmation(email: string, studentName: string) {
  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY is not set. Skipping email send.");
    return { success: true };
  }

  try {
    console.log(`Sending registration confirmation email to ${email} for student ${studentName}...`);
    
    const data = await resend.emails.send({
      from: `AI & Robotics Academy <${FROM_EMAIL}>`,
      to: email,
      subject: 'Registration Confirmed: AI & Robotics Fundamentals',
      html: `
        <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto;">
          <h2>Registration Confirmed!</h2>
          <p>Hi there,</p>
          <p>This email is to confirm that we have successfully received the registration for <strong>${studentName}</strong> for the AI & Robotics Fundamentals track.</p>
          <p>We are so excited to have them join us. We will send you more details about the program schedule and requirements shortly.</p>
          <br/>
          <p>Blessings,</p>
          <p>The A&I Tech / Foursquare Isheri Team</p>
        </div>
      `
    });
    
    return { success: true, data };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
}

export async function sendCertificateEmail(email: string, studentName: string, certificateUrl: string) {
  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY is not set. Skipping email send.");
    return { success: true };
  }

  try {
    console.log(`Sending certificate email to ${email}...`);
    
    const data = await resend.emails.send({
      from: `AI & Robotics Academy <${FROM_EMAIL}>`,
      to: email,
      subject: 'Congratulations! Your Certificate of Completion',
      html: `
        <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto;">
          <h2>Congratulations ${studentName}!</h2>
          <p>We are incredibly proud of what you've achieved during the AI & Robotics Fundamentals track.</p>
          <p>You can view, download, and share your official Certificate of Completion here:</p>
          <a href="${certificateUrl}" style="display: inline-block; padding: 10px 20px; background-color: #0f62fe; color: white; text-decoration: none; border-radius: 5px; margin-top: 10px;">View Certificate</a>
          <br/><br/>
          <p>Keep building and innovating!</p>
          <p>The A&I Tech / Foursquare Isheri Team</p>
        </div>
      `
    });

    return { success: true, data };
  } catch (error) {
    console.error("Failed to send certificate email:", error);
    return { success: false, error };
  }
}
