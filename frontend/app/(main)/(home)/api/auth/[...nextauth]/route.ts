import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/github"
import type { AuthOptions } from 'next-auth'
import NextAuth from 'next-auth'

export const authConfig: AuthOptions = {
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID!,
			clientSecret: process.env.GITHUB_CLIENT_SECRET!
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!
		})
	]
}

const handler = NextAuth(authConfig)

export { handler as GET, handler as POST }