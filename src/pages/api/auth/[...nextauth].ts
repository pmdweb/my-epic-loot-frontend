import NextAuth, { AuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === 'google' && account?.id_token) {
        try {
          // Send the Google ID token to our Django backend
          const response = await fetch('http://backend:8000/users/auth/google/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              token: account.id_token,
              clientId: process.env.GOOGLE_CLIENT_ID!,
            }),
          })

          if (response.ok) {
            const data = await response.json()
            // Store the Django JWT tokens in the user object
            user.accessToken = data.access
            user.refreshToken = data.refresh
            user.backendUser = data.user
            return true
          } else {
            console.error('Backend authentication failed:', await response.text())
            return false
          }
        } catch (error) {
          console.error('Error authenticating with backend:', error)
          return false
        }
      }
      return true
    },
    async jwt({ token, user, account }) {
      // Initial sign in
      if (user) {
        token.accessToken = user.accessToken
        token.refreshToken = user.refreshToken
        token.backendUser = user.backendUser
      }
      return token
    },
    async session({ session, token }) {
      // Send properties to the client
      session.accessToken = token.accessToken as string
      session.refreshToken = token.refreshToken as string
      session.backendUser = token.backendUser
      return session
    },
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
  },
}

export default NextAuth(authOptions)