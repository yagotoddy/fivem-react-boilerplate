import { create } from "zustand"

interface VisibilityState {
  visible: boolean
  setVisible: (visible: boolean) => void
}

export const useVisibilityStore = create<VisibilityState>((set) => ({
  visible: false,
  setVisible: (visible) => set({ visible })
}))