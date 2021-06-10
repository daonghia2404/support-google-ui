window.onload = () => {
  setupTooltip.init()
  setupExpandProduct.init()
  setupExpandMenu.init()
  dropdownBootstrap.init()
  tabEvent.init()
  viewProduct.init()
  owlCarousel.init()
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


const dropdownBootstrap = {
  init: function() {
    this.configHeaderAccount()
  },
  configHeaderAccount: function() {
    $(document).on('click', '.dropdown-header-account', function (e) {
      e.stopPropagation();
    });
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

const owlCarousel = {
  init: function () {
    this.setupProductCarousel();
  },
  setupProductCarousel: function () {
    var $owl = $("#product-carousel ").owlCarousel({
      responsive: {
        0: {
          items: 2.5,
        },
        768: {
          items: 3.5,
        },
        991: {
          items: 5,
        },
      },
      loop: false,
      nav: true,
      dots: false,
      margin: 15,
      navText: [
        "<img src='./assets/icons/icon-angle-left-blue.svg'>",
        "<img src='./assets/icons/icon-angle-right-blue.svg'>",
      ],
    });
    $owl.trigger("refresh.owl.carousel");
  },
};

const tabEvent = {
	init: function () {
		this.setupTabEvent()
	},
	setupTabEvent: function () {
		const main = document.querySelectorAll('.tab-wrapper')
		if (main.length !== 0) {
			main.forEach((mainTarget) => {
				const tabClick = mainTarget.querySelectorAll('.tabs-group .tab-item')
				const tabMain = mainTarget.querySelectorAll('.tabs-main-group .tab-item')

				tabClick.forEach((item, index) => item.addEventListener('click', () => {
					tabClick.forEach(i => i.classList.remove('active'))
					tabMain.forEach(i => i.classList.remove('active'))

					tabClick[index].classList.add('active')
					tabMain[index].classList.add('active')
				}))
			})
		}
	}
}


const viewProduct = {
  init: function() {
    this.setup()
  },
  setup: function() {
    const viewBtn = document.querySelectorAll('.list-view-btn')
    const viewMain = document.querySelector('.section-main-view')

    if (viewMain) {
      viewBtn.forEach((item) => item.addEventListener('click', () => {
        viewBtn.forEach(i => i.classList.remove('active'))
        item.classList.add('active')

        viewMain.classList.remove('grid')
        viewMain.classList.remove('list')
        viewMain.classList.add(item.dataset.view)
      }))
    }
  }
}