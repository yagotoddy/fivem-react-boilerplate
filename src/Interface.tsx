import { useEffect } from "react"
import { listen } from "./hooks/listen"
import { observe } from "./hooks/observe"
import { useVisibilityStore } from "./stores/visibility"
import { Post } from "./hooks/post"
import { isEnvBrowser } from "./utils/misc"
import './debug.ts'
import { cn } from "./utils/cn.ts"

const Interface = () => {
  const { visible,setVisible } = useVisibilityStore()

  useVisibilityLogic(visible,setVisible)

  return (
    <div
      className={cn(
        "h-screen flex items-center justify-center",
        isEnvBrowser() && "bg-slate-500"
      )}
      style={{
        visibility: visible ? "visible" : "hidden"
      }}
    >
      <h1
        className="text-2xl text-white font-medium animate-pulse"
      >
        Interface
      </h1>
    </div>
  )
}

const useVisibilityLogic = (visible: boolean,setVisible: (visible: boolean) => void) => {
  observe('visible',setVisible)

  listen<KeyboardEvent>('keydown',(event) => {
    const shouldHide = visible && event.code == 'Escape'
    if (!shouldHide) return
  
    setVisible(false)
  })

  useEffect(() => {
    if (!visible) return

    Post.create("removeFocus")
  },[visible])
}

export default Interface