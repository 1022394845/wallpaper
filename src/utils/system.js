const SYSTEM_INFO = uni.getSystemInfoSync()

export const getStatusBarHeight = () => SYSTEM_INFO.statusBarHeight || 15

export const getTitleBarHeight = () => {
  if (!uni.getMenuButtonBoundingClientRect) return 50
  const { top, height } = uni.getMenuButtonBoundingClientRect()
  return (top - getStatusBarHeight()) * 2 + height
}

export const getNavBarHeight = () => getStatusBarHeight() + getTitleBarHeight()

// 获取屏幕高度
export const getWindowHeight = () => SYSTEM_INFO.windowHeight || 1080

// 获取屏幕宽度
export const getWindowWidth = () => SYSTEM_INFO.windowWidth || 1920
