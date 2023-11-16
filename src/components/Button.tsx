import { ReactElement } from 'react'
import classNames from 'classnames'
import { ButtonProps } from '../util/types'
import LoadingIcon from '../assets/LoadingIcon'

export default function Button({
  buttonType,
  text,
  clickHandler,
  variant = 'primary',
  id,
  isLoading,
}: ButtonProps): ReactElement {
  return (
    <button
      type={buttonType}
      className={classNames('w-full rounded-full py-3 font-mono text-lg font-bold', {
        'bg-secondary-50 text-primary-150': variant === 'primary',
        'border-2 text-secondary-50 border-secondary-50 bg-primary-150': variant === 'secondary',
        'border-2 text-warning-50 border-warning-50': variant === 'warning',
      })}
      onClick={
        id
          ? () => clickHandler(undefined, id)
          : (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => clickHandler(event)
      }
    >
      {isLoading ? <LoadingIcon className="mx-auto h-9 w-9" /> : text}
    </button>
  )
}
