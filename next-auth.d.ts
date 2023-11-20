import NextAuth from "next-auth"

declare module "next-auth" {

    interface Session {
        user: {
            jwt_token: string
        }
    }
}