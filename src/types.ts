export interface NuiVisibilityFrame {
  setVisible: (visible: boolean) => void
  visible: boolean
}

export interface NuiMessageDataFrame<T = unknown> {
  action: string;
  data: T
}

export interface NuiDebugEventFrame {
  action: string;
  data: unknown
}
