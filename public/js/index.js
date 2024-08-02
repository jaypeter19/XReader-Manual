/* global bootstrap: false */

(() => {
  'use strict'
  // Tooltip and popover demos
  document.querySelectorAll('.tooltip-demo')
    .forEach(tooltip => {
      new bootstrap.Tooltip(tooltip, {
        selector: '[data-bs-toggle="tooltip"]'
      })
    })

  document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach(popover => {
      new bootstrap.Popover(popover)
    })

  document.querySelectorAll('.toast')
    .forEach(toastNode => {
      const toast = new bootstrap.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  // Disable empty links and submit buttons
  document.querySelectorAll('[href="#"], [type="submit"]')
    .forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault()
      })
    })

  function setActiveItem() {
    const { hash } = window.location

    if (hash === '') {
      return
    }

    const link = document.querySelector(`.bd-aside a[href="${hash}"]`)

    if (!link) {
      return
    }

    const active = document.querySelector('.bd-aside .active')
    const parent = link.parentNode.parentNode.previousElementSibling

    link.classList.add('active')

    if (parent.classList.contains('collapsed')) {
      parent.click()
    }

    if (!active) {
      return
    }

    const expanded = active.parentNode.parentNode.previousElementSibling

    active.classList.remove('active')

    if (expanded && parent !== expanded) {
      expanded.click()
    }
  }

  setActiveItem()
  window.addEventListener('hashchange', setActiveItem)
})()


document.addEventListener('DOMContentLoaded', function () {
  //Navbar Script
  const header = document.querySelector('.bd-header');
  const navItems = document.querySelectorAll('.nav-item');
  const contactItem = document.querySelector('#contact');
  const asideMenu = document.querySelector('.bd-aside');


  function checkWidth() {
    if (window.innerWidth > 1200) {
      header.classList.remove('sticky-top');
      asideMenu.style.display = 'block';
      navItems.forEach((element) => {
        if (!element.id) {
          element.style.display = 'none';
        }
        
      })

    } else {
      header.classList.add('sticky-top');
      asideMenu.style.display = 'none';
      navItems.forEach((element) => {
        element.style.display = '';
      })
    }
  }

  

  // Adiciona um ouvinte de evento para mudanças na largura da janela
  window.addEventListener('resize', checkWidth);
  // Verifica a largura inicial da janela
  checkWidth();
});
