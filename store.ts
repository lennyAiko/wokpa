import { create } from 'zustand'

interface Store {
    viewLogin: boolean
    viewSignUp: boolean
    isAuthenticated: boolean
    rssModal: boolean
    setViewLogin: () => void
    setViewSignUp: () => void
    setViewRSS: () => void
}

export const store = create<Store>((set) => ({
    viewLogin: false,
    viewSignUp: false,
    isAuthenticated: false,
    rssModal: false,
    setViewLogin: () => {
        set((state) => ({ 
            viewLogin: state.viewLogin = !state.viewLogin
        }))
    },
    setViewSignUp: () => {
        set((state) => ({
            viewSignUp: state.viewSignUp = !state.viewSignUp
        }))
    },
    setViewRSS: () => {
        set((state) => ({
            rssModal: state.rssModal = !state.rssModal
        }))
    }
}))

// You can use get().{name} to get a particular value within the function
// You can return multiple values in the function {toggleMenu: true, total: newTotal}