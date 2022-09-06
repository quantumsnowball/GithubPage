import { Dispatch, SetStateAction, } from 'react'
import { createContext, } from 'react'


export interface State {
  menu: boolean,
  setMenu: Dispatch<SetStateAction<boolean>>
}

export const StateContext = createContext({} as State)

