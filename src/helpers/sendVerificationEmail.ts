import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/verificationEmail";
import { ApiResponse } from "@/types/apiResponse";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string
): Promise<ApiResponse>{
    try {
        await resend.emails.send({
            from: 'onboarding@resend.com',
            to: email,
            subject: 'Feedback Message Verification Code',
            react: VerificationEmail({username, otp: verifyCode}),
          });
        return {
            success: true,
            message: "Send verification email is successful"
        }
    } catch (emailError) {
        console.error("Error sending verification email", emailError);
        return {
            success: false,
            message: "Send verification email is failed"
        }
    }
}