import bcrypt from 'bcrypt'; 

import NextAuth from 'next-auth/next';
import CredentiaslProvider from 'next-auth/providers/credentials'; 
import dbConnect from '@/libs/dbConnect';
import userModel from '@/models/userModel';

export const authOptions = {
    providers: [
        CredentiaslProvider({
           name: "credentials",
           credentials: {
            email: { label: "email", type: "email"},
            password: { label: "password", type: "password"}
           }, 
           async authorize(credentials) {
            if(!credentials?.email || !credentials?.password) {
                throw new Error("Invalid Credentials")
            }

            await dbConnect(); 

            const user = await userModel.findOne({
                email: credentials.email
            }); 

            if(!user || !user.password) {
                throw new Error("Invalid Credentials")
            }

            const isCorrectPassword = await bcrypt.compare(
                credentials.password, user.password
            )

            if(!isCorrectPassword) {
                throw new Error("Wrong Credentials")
            }

            return user; 
           }
        })
    ], 
    pages: {
        signIn: "/"
    },
    debug: process.env.NODE_ENV === "development",
    session: {
        strategy: "jwt"
    },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET,
    }, 
    secret: process.env.NEXTAUTH_SECRET

}

export default NextAuth(authOptions); 