import { Dispatch, SetStateAction, } from 'react'


export interface State {
  menu: boolean,
  setMenu: Dispatch<SetStateAction<boolean>>
}
