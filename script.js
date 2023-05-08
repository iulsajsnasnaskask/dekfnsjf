      setTimeout(() => {
            let container = document.querySelector('.container')
            let body = document.querySelector('body')
            let loader = document.querySelector('.loaderev')
            loader.style.display = 'none'
            container.style.display = "flex";
            body.setAttribute('class', 'afterload')
      }, 1000)
