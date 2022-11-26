import { IonIcon } from '@ionic/react'
import './styles.scss'
import { SidebarProps } from './types'
import { useHistory } from "react-router";


export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const history = useHistory()

  if (isOpen) {
    return (
      <div className='sidebar'>
        <nav className='sidebar__content'>
          <button onClick={() => history.push('/select-divisions')}>
            Voltar para divisões
          </button>
        </nav>
        <div onClick={onClose} className='sidebar__overlay'></div>
      </div>
    )
  } else {
    return <></>
  }
}