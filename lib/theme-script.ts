export const themeScript = `
  let preferredTheme = window.localStorage.getItem('theme')
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  
  document.documentElement.classList.add(preferredTheme || systemTheme)
`