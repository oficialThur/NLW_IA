const elements = {
  promptTitle: document.getElementById('prompt-title'),
  promptContent: document.getElementById('prompt-content'),
  titleWrapper: document.getElementById('title-wrapper'),
  contentWrapper: document.getElementById('content-wrapper'),
  btnOpen: document.getElementById('btn-open'),
  btnCollapse: document.getElementById('btn-collapse'),
  sidebar: document.querySelector('.sidebar')
}

function toggleSidebar() {
  elements.sidebar.style.display = elements.sidebar.style.display === 'none' ? 'flex' : 'none'
  elements.btnOpen.style.display = elements.sidebar.style.display === 'none' ? 'block' : 'none'
}

function updateEditableWrapperState(element, wrapper) {
    const hasText = element.textContent.trim().length > 0

    wrapper.classList.toggle('is-empty', !hasText)
}

function updateAllEditableStates() {
  updateEditableWrapperState(elements.promptTitle, elements.titleWrapper)
  updateEditableWrapperState(elements.promptContent, elements.contentWrapper)
}

function attachAllEditableHandlers() {
  elements.promptTitle.addEventListener('input', () => {
    updateEditableWrapperState(elements.promptTitle, elements.titleWrapper)
  })

  elements.promptContent.addEventListener('input', () => {
    updateEditableWrapperState(elements.promptContent, elements.contentWrapper)
  })
}

function init() {
  attachAllEditableHandlers()
  updateAllEditableStates()

  elements.btnOpen.addEventListener('click', toggleSidebar)
  elements.btnCollapse.addEventListener('click', toggleSidebar)
}

init()
