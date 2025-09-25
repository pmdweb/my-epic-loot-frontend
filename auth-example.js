// Example: pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import DiscordProvider from 'next-auth/providers/discord'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    })
  ],
  callbacks: {
    async session({ session, token }) {
      // Send JWT to backend for user sync
      session.accessToken = token.accessToken
      return session
    },
    async jwt({ token, user, account }) {
      if (account) {
        // Sync with Django backend
        const response = await fetch(`${process.env.BACKEND_URL}/api/auth/social-login/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            provider: account.provider,
            access_token: account.access_token,
            user: {
              name: user.name,
              email: user.email,
              image: user.image
            }
          })
        })
        const backendUser = await response.json()
        token.backendUserId = backendUser.id
        token.subscriptionStatus = backendUser.subscription_status
      }
      return token
    }
  },
  pages: {
    signIn: '/auth/signin',  // Custom login page
    error: '/auth/error',    // Error page
  }
})