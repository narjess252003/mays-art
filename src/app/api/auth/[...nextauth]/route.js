import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "240020309077-ns1ventq465vh9l25oubl0j423s2jg9k.apps.googleusercontent.com",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "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",
    }),
  ],
  session: {
    strategy: "jwt",
  },
})

export { handler as GET, handler as POST }