export interface User {
  email: string
  id: string
  name: string
}

export interface AuthState {
  isAuthenticated: boolean
  isLoading: boolean
  token: string | null
  user: User | null
}

export interface LoginResponse {
  token: string
  user: User
}
