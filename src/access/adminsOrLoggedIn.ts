import type { Access, AccessArgs } from 'payload/config'

import { checkRole } from './checkRole'
import type { User } from '../payload-types'

export const adminsOrLoggedIn: Access = ({ req }: AccessArgs<User>) => {
  if (checkRole(['admin'], req.user)) {
    return true
  }

  return !!req.user
}
