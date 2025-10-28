import clsx from "clsx"

export const addActiveClass = (isActive, activeClass) => {
  return clsx(isActive && activeClass)
}
