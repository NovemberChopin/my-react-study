import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle `
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }


@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1546484009889'); /* IE9*/
  src: url('./iconfont.eot?t=1546484009889#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('./iconfont.ttf?t=1546484009889') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont.svg?t=1546484009889#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-fangdajing:before { content: "\e617"; }

.icon-spin:before { content: "\e851"; }

.icon-pen:before { content: "\e61c"; }

.icon-phone:before { content: "\e610"; }

.icon-Aa:before { content: "\e636"; }

.icon-zhinanzhen:before { content: "\e627"; }
`
  
