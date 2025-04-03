// adapted from Bootstrap docs, see: https://getbootstrap.com/docs/5.3/customize/color-modes/#javascript

import * as syntaxHighlighterThemes from '@params';

function getStoredTheme() {
  return localStorage.getItem('theme')
}
function setStoredTheme(theme) {
  localStorage.setItem('theme', theme)
}

function getPreferredTheme() {
  const storedTheme = getStoredTheme()
  if (storedTheme)
    return storedTheme
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function setTheme(themeOrAuto) {
  const theme = themeOrAuto === 'auto'
    ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    : themeOrAuto;
  document.documentElement.setAttribute('data-bs-theme', theme)
  const syntaxHighlightingTheme = (theme === 'dark')
    ? 'vim'
    : 'emacs'
  const syntaxHighlightingStylesheet = document.getElementById('syntaxHighlightingStylesheet')
  if (syntaxHighlightingStylesheet)
    syntaxHighlightingStylesheet.href = syntaxHighlighterThemes[syntaxHighlightingTheme];
  if (!sendGiscusMessage({ setConfig: { theme: `noborder_${theme}` } })) {
    const giscusClientScript = document.getElementById('giscus-client')
    if (giscusClientScript)
      giscusClientScript.dataset.theme = `noborder_${theme}`;
  }
}

function showActiveTheme(theme, focus = false) {
  const themeSwitcher = document.querySelector('#bd-theme')

  if (!themeSwitcher)
    return

  const themeSwitcherText = document.querySelector('#bd-theme-text')
  const activeThemeIcon = document.querySelector('.theme-icon-active')
  const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
  const activeIcon = btnToActive.children[0];

  document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
    element.classList.remove('active')
    element.setAttribute('aria-pressed', 'false')
  })

  btnToActive.classList.add('active')
  btnToActive.setAttribute('aria-pressed', 'true')
  activeThemeIcon.children[0].replaceWith(activeIcon.cloneNode(true));
  const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
  themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)

  if (focus)
    themeSwitcher.focus()
}

function sendGiscusMessage(message) {
  const iframe = document.querySelector('iframe.giscus-frame');
  if (!iframe)
    return false;
  iframe.contentWindow.postMessage({ giscus: message }, 'https://giscus.app');
  return true;
}

setTheme(getPreferredTheme())

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  const storedTheme = getStoredTheme()
  if (storedTheme !== 'light' && storedTheme !== 'dark')
    setTheme(getPreferredTheme())
})

window.addEventListener('DOMContentLoaded', () => {
  showActiveTheme(getPreferredTheme())
  setTheme(getPreferredTheme())

  document.querySelectorAll('[data-bs-theme-value]')
    .forEach(toggle => {
      toggle.addEventListener('click', () => {
        const theme = toggle.getAttribute('data-bs-theme-value')
        setStoredTheme(theme)
        setTheme(theme)
        showActiveTheme(theme, true)
      })
    })
})
