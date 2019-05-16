;(window.webpackJsonp = window.webpackJsonp || []).push([
  [48],
  {
    204: function(e, t, n) {
      'use strict'
      n.r(t)
      var s = n(0),
        a = Object(s.a)(
          {},
          function() {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t
            return n('div', { staticClass: 'content' }, [
              e._m(0),
              e._v(' '),
              n('p', [
                e._v(
                  'Components are divided up into different types and prefixed in a way that makes it easy for the reader to understand the purpose of each component. The component files follow the official '
                ),
                n(
                  'a',
                  {
                    attrs: {
                      href:
                        'https://vuejs.org/v2/style-guide/#Component-files-strongly-recommended',
                      target: '_blank',
                      rel: 'noopener noreferrer'
                    }
                  },
                  [e._v('Vue style guide'), n('OutboundLink')],
                  1
                ),
                e._v(' recommendations for naming components:')
              ]),
              e._v(' '),
              n('ul', [
                n('li', [
                  n(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://vuejs.org/v2/style-guide/#Component-files-strongly-recommended',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [e._v('Component files'), n('OutboundLink')],
                    1
                  )
                ]),
                e._v(' '),
                n('li', [
                  n(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://vuejs.org/v2/style-guide/#Single-file-component-filename-casing-strongly-recommended',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [
                      e._v('Single-file component filename casing'),
                      n('OutboundLink')
                    ],
                    1
                  )
                ]),
                e._v(' '),
                n('li', [
                  n(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://vuejs.org/v2/style-guide/#Base-component-names-strongly-recommended',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [e._v('Base component names'), n('OutboundLink')],
                    1
                  )
                ]),
                e._v(' '),
                n('li', [
                  n(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://vuejs.org/v2/style-guide/#Single-instance-component-names-strongly-recommended',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [
                      e._v('Single-instance component names'),
                      n('OutboundLink')
                    ],
                    1
                  )
                ]),
                e._v(' '),
                n('li', [
                  n(
                    'a',
                    {
                      attrs: {
                        href:
                          'https://vuejs.org/v2/style-guide/#Tightly-coupled-component-names-strongly-recommended',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [
                      e._v('Tightly coupled component names'),
                      n('OutboundLink')
                    ],
                    1
                  )
                ])
              ]),
              e._v(' '),
              e._m(1),
              e._v(' '),
              n('p', [
                e._v(
                  'The Vue style guide defines base components as presentational, dumb, or pure components that apply app-specific styling and conventions should all begin with a specific prefix.'
                )
              ]),
              e._v(' '),
              e._m(2),
              e._m(3),
              e._v(' '),
              n('p', [
                e._v(
                  'The Vue style guide defines single-instance components as only ever having a single active instance. They should begin with the "The" prefix, to denote that there can be only one.'
                )
              ]),
              e._v(' '),
              n('p', [
                e._v(
                  'This does not mean the component is only used in a single page, but it will only be used once per page. This project deviates from the Vue style guide by allowing props in single-instance components, to allow for more dynamic layouts and use-cases.'
                )
              ]),
              e._v(' '),
              e._m(4)
            ])
          },
          [
            function() {
              var e = this.$createElement,
                t = this._self._c || e
              return t('h1', { attrs: { id: 'component-types' } }, [
                t(
                  'a',
                  {
                    staticClass: 'header-anchor',
                    attrs: { href: '#component-types', 'aria-hidden': 'true' }
                  },
                  [this._v('#')]
                ),
                this._v(' Component types')
              ])
            },
            function() {
              var e = this.$createElement,
                t = this._self._c || e
              return t('h2', { attrs: { id: 'base-components' } }, [
                t(
                  'a',
                  {
                    staticClass: 'header-anchor',
                    attrs: { href: '#base-components', 'aria-hidden': 'true' }
                  },
                  [this._v('#')]
                ),
                this._v(' Base components')
              ])
            },
            function() {
              var e = this,
                t = e.$createElement,
                n = e._self._c || t
              return n('div', { staticClass: 'language-html extra-class' }, [
                n('pre', { pre: !0, attrs: { class: 'language-html' } }, [
                  n('code', [
                    n('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      e._v('\x3c!-- Example of a base component --\x3e')
                    ]),
                    e._v('\n'),
                    n('span', { pre: !0, attrs: { class: 'token tag' } }, [
                      n('span', { pre: !0, attrs: { class: 'token tag' } }, [
                        n(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('<')]
                        ),
                        e._v('base-button')
                      ]),
                      n(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [e._v('>')]
                      )
                    ]),
                    n('span', { pre: !0, attrs: { class: 'token tag' } }, [
                      n('span', { pre: !0, attrs: { class: 'token tag' } }, [
                        n(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('</')]
                        ),
                        e._v('base-button')
                      ]),
                      n(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [e._v('>')]
                      )
                    ]),
                    e._v('\n')
                  ])
                ])
              ])
            },
            function() {
              var e = this.$createElement,
                t = this._self._c || e
              return t('h2', { attrs: { id: 'single-instance-components' } }, [
                t(
                  'a',
                  {
                    staticClass: 'header-anchor',
                    attrs: {
                      href: '#single-instance-components',
                      'aria-hidden': 'true'
                    }
                  },
                  [this._v('#')]
                ),
                this._v(' Single-instance components')
              ])
            },
            function() {
              var e = this,
                t = e.$createElement,
                n = e._self._c || t
              return n('div', { staticClass: 'language-html extra-class' }, [
                n('pre', { pre: !0, attrs: { class: 'language-html' } }, [
                  n('code', [
                    n('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      e._v(
                        '\x3c!-- Example of a single-instance component --\x3e'
                      )
                    ]),
                    e._v('\n'),
                    n('span', { pre: !0, attrs: { class: 'token tag' } }, [
                      n('span', { pre: !0, attrs: { class: 'token tag' } }, [
                        n(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('<')]
                        ),
                        e._v('the-header')
                      ]),
                      n(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [e._v('>')]
                      )
                    ]),
                    n('span', { pre: !0, attrs: { class: 'token tag' } }, [
                      n('span', { pre: !0, attrs: { class: 'token tag' } }, [
                        n(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [e._v('</')]
                        ),
                        e._v('the-header')
                      ]),
                      n(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [e._v('>')]
                      )
                    ]),
                    e._v('\n')
                  ])
                ])
              ])
            }
          ],
          !1,
          null,
          null,
          null
        )
      t.default = a.exports
    }
  }
])
