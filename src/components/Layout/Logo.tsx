import { Link } from 'react-router'

import { ROUTES } from '@/consts'

export const Logo = () => {
  return (
    <Link aria-current="page" className="inline-block" to={ROUTES.HOME}>
      <div className="block rounded bg-black p-2 md:hidden dark:bg-none">
        <img
          alt="Tenpo logo mobile"
          className="h-6 w-auto"
          loading="lazy"
          src="https://cdn.prod.website-files.com/647f4d1c528358bdb9d8ef3e/670ec03da254b747669d8061_Size%3DXS%2C%20Type%3DDefault.svg"
        />
      </div>
      <img
        alt="Tenpo logo desktop"
        className="hidden h-10 w-auto md:block"
        loading="lazy"
        src="https://cdn.prod.website-files.com/647f4d1c528358bdb9d8ef3e/64e3a0a372c75160c61be423_tenpo.svg"
      />
    </Link>
  )
}
