import 'reveal.js/dist/reveal.css'
// See available themes in https://revealjs.com/themes/
import 'reveal.js/dist/theme/{{ cookiecutter.revealjs_theme }}.css'

import Reveal from 'reveal.js'
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js'
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js'
import Notes from 'reveal.js/plugin/notes/notes.esm.js'

// More info for plugins in https://revealjs.com/plugins/
const deck = new Reveal({ plugins: [Markdown, Highlight, Notes] })

deck.initialize({ hash: true, slideNumber: true })

/* Workaround to reinitialize gifs
  e.g:
  <section data-gif="repeat">
    <img className="r-stretch" data-src="url/to/your/gif" />
  </section>
 */
deck.addEventListener(
  'slidechanged',
  function (event) {
    const gifAttr = event.currentSlide.getAttribute('data-gif')
    if (gifAttr && gifAttr === 'repeat') {
      const img = event.currentSlide.querySelector('img')
      const gif = img.getAttribute('src')
      img.setAttribute('src', gif + '?t=' + new Date().getTime())
    }
  },
  false
)
