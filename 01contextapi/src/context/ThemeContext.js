import React, { createContext } from 'react'
import { useContext } from 'react'
const ThemeContext=createContext({
    ThemeMode:'light',
    lightThem:()=>{},
    darkThem:()=>{}
})
export default ThemeContext

export const ThemeProvider=ThemeContext.Provider
export const useThem=()=>{
    return useContext(ThemeContext)
}