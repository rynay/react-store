
import { TItem } from '../../../../types'
import s from './Modal.module.css'

type PropTypes = {
  item: TItem | null
  isOpen: boolean
  close: () => void
  message?: string
}

const Modal = ({ item, isOpen, message }: PropTypes) => {
  const classes = isOpen ? `${s.title} ${s.open}` : s.title
  return (
    <div className={classes}>
      <p>
        {item?.title || 'Item'} {message || 'was added to the cart'}
      </p>
    </div>
  )
}

export default Modal
