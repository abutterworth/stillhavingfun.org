// example theme file
import theme from '@theme-ui/preset-dark';

export default {
  ...theme,
  sizes: {
    ...theme.sizes,
    container: 768,
  },
  styles: {
    ...theme.styles
  },
  fonts: {
    ...theme.fonts,
    body: 'Nunito Sans, sans-serif',
  },
  links: {
    nav: {
      display: 'inline-block',
      px: 2,
      py: 2,
      mr: 1,
      color: 'rgba(255,255,255,.65)',
      textDecoration: 'none',
      fontSize: 2,
      fontWeight: 'bold',
      bg: 'transparent',
      transitionProperty: 'background-color',
      transitionTimingFunction: 'ease-out',
      transitionDuration: '.2s',
      borderRadius: 2,
      '&:hover': {
        bg: 'highlight',
      },
      '&.active': {
        color: 'white',
        bg: 'highlight',
      },
    },
  },
  text: {
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '.2em',
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    display: {
      // extends the text.heading styles
      variant: 'text.heading',
      fontSize: [6, 7, 8],
      fontWeight: 'display',
    },
  },
}