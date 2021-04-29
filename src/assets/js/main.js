window.onload = () => {
  setupTooltip.init()
  setupExpandProduct.init()
  setupExpandMenu.init()
}

const setupTooltip = {
  init: function() {
    this.config()
  },
  config: function() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  }
}

const setupExpandProduct = {
  init: function() {
    this.config()
  },
  config: function() {
    const btnExpand = document.querySelector('.line-expand')
    const mainExpand = document.querySelector('.expand-groups')
    if (btnExpand && mainExpand) {
      btnExpand.addEventListener('click', () => {
        btnExpand.classList.toggle('active')
        mainExpand.classList.toggle('active')
      })
    }
  }
}

const setupExpandMenu = {
  init: function() {
    this.config()
  },
  config: function() {
    const btnExpand = document.querySelector('header .header-btn-sidebar')
    const mainExpand = document.querySelector('section.section-sidebar')
    if (btnExpand && mainExpand) {
      const overlayExpand = mainExpand.querySelector('.sidebar-overlay')
      const closeExpand = mainExpand.querySelector('.sidebar-header .header-icon')

      btnExpand.addEventListener('click', () => {
        mainExpand.classList.add('active')
      })

      overlayExpand.addEventListener('click', () => {
        mainExpand.classList.remove('active')
      })

      closeExpand.addEventListener('click', () => {
        mainExpand.classList.remove('active')
      })
    }
  }
}
