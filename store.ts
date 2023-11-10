import { create } from 'zustand'

interface Store {
    viewLogin: boolean
    viewSignUp: boolean
    isAuthenticated: boolean
    setViewLogin: () => void
    setViewSignUp: () => void
}

export const store = create<Store>((set) => ({
    viewLogin: false,
    viewSignUp: false,
    isAuthenticated: false,
    setViewLogin: () => {
        set((state) => ({ 
            viewLogin: state.viewLogin = !state.viewLogin
        }))
    },
    setViewSignUp: () => {
        set((state) => ({
            viewSignUp: state.viewSignUp = !state.viewSignUp
        }))
    }
}))

// You can use get().{name} to get a particular value within the function
// You can return multiple values in the function {toggleMenu: true, total: newTotal}