import {extendTheme} from '@chakra-ui/react';

const theme = extendTheme({
    config:{
        initialColorMode :"dark",
        useSystemColormode: true
    },
    styles:{
        global:{
            body:{
                margin: 0,
                fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif",
                WebKitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
            },
            code: {
                fontFamily:
                  "source-code-pro, Menlo, Monaco, Consolas, 'Courier New',monospace",
              },        
        }
    }
})

export default theme;