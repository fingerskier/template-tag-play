function template(tag, dat) {
  let el

  const proxy = new Proxy(dat, {
    get(target, property) {

    },


    set(target, property, value) {
      target[property] = value

      try {
        el[property] = value
      } catch (error) {
        el.setAttribute(property, value)
      } finally {
        console.error(`cannot set`, el, property, value)
      }
    }
  })


  el = document.createElement(tag)


  el.addEventListener('change', event=>{
    proxy.value = event.target.value
  })
}



template = node('div', data)