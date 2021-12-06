// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor, fontStyle) for the color and the font style
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`

function App() {
  return (
    <div>
      <Box size="small" style={{ backgroundColor: 'lightblue' }}>
        small lightblue box
      </Box>
      <Box size="medium" style={{ backgroundColor: 'pink' }}>
        medium pink box
      </Box>
      <Box size="large" style={{ backgroundColor: 'orange' }}>
        large orange box
      </Box>
      <Box>sizeless box</Box>
    </div>
  )
}

function Box(props) {
    const { className: givenClassName, size, style: givenStyle, ...rest } = props;
    const className = `box ${getClassNameForSize(size)} ${givenClassName}`;
    const style = { fontStyle: 'italic', ...givenStyle };
    return <div className={className} style={style} {...rest} />
}

function getClassNameForSize(size) {
    switch (size) {
        case 'small':
            return 'box--small';
        case 'medium':
            return 'box--medium';
        case 'large':
            return 'box--large';
        default:
            return '';
    }
}

export default App
