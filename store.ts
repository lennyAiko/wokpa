import { create } from 'zustand'

interface Store {
    toggleMenu: boolean
    setToggleMenu: () => void
}

export const store = create<Store>((set) => ({
    toggleMenu: false,
    setToggleMenu: () => {
        set((state) => ({ 
            toggleMenu: state.toggleMenu = !state.toggleMenu
        }))
    }
}))

// You can use get().{name} to get a particular value within the function
// You can return multiple values in the function {toggleMenu: true, total: newTotal}