import { redirect } from 'react-router'

import { getToken } from '@/api'
import { ROUTES } from '@/consts'

export const publicLoader = () => {
  const token = getToken()
  if (token) return redirect(ROUTES.HOME)

  return null
}
