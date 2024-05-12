import {z} from 'zod'

export const userNameValidation = z
.string()
.min(2, "UserName must be atleast 2 characters")
.max(20, "UserName must be atmost 20 characters")
.regex(/^[a-zA-Z0-9_]+$/, "User Name must not contain special character")

export const signUpSchema = z.object({
    userName: userNameValidation,
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().min(8, {message: "Password must be atleast 8 characters"}),
});