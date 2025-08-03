import { useState } from 'react'
import {
  useLocation,
  useOutlet,
  useNavigationType,
  type NavigationType,
} from 'react-router'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

export const RouteTransition = () => {
  const location = useLocation()
  const outlet = useOutlet()
  const navigationType = useNavigationType()
  const [animating, setAnimating] = useState(false)

  const classNamesMap: Record<NavigationType, string> = {
    POP: 'fade-back',
    PUSH: 'fade',
    REPLACE: 'fade',
  }

  const classNames = classNamesMap[navigationType] ?? 'fade'

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        classNames={classNames}
        key={location.pathname}
        onEnter={() => setAnimating(true)}
        onEntered={() => setAnimating(false)}
        timeout={250}
        unmountOnExit
      >
        <div
          aria-hidden={animating}
          className="container"
          data-blocked={animating}
        >
          {outlet}
        </div>
      </CSSTransition>
    </SwitchTransition>
  )
}
