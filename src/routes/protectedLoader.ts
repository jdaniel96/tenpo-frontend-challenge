import { redirect } from 'react-router'

import { getToken } from '@/api'
import { ROUTES } from '@/consts'

export const protectedLoader = () => {
  const token = getToken()
  if (!token) return redirect(ROUTES.LOGIN)

  return null
}
