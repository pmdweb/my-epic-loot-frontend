import { DefaultSession, DefaultUser } from "next-auth"
import { DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session extends DefaultSession {
    accessToken?: string
    refreshToken?: string
    backendUser?: {
      id: number
      username: string
      email: string
      first_name: string
      last_name: string
      avatar_url: string
      is_premium: boolean
      subscription_tier: string
      is_email_verified: boolean
      date_joined: string
    }
  }

  interface User extends DefaultUser {
    accessToken?: string
    refreshToken?: string
    backendUser?: {
      id: number
      username: string
      email: string
      first_name: string
      last_name: string
      avatar_url: string
      is_premium: boolean
      subscription_tier: string
      is_email_verified: boolean
      date_joined: string
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    accessToken?: string
    refreshToken?: string
    backendUser?: {
      id: number
      username: string
      email: string
      first_name: string
      last_name: string
      avatar_url: string
      is_premium: boolean
      subscription_tier: string
      is_email_verified: boolean
      date_joined: string
    }
  }
}