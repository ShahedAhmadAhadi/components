
let auto = {
    width: '100%',
    padding: '4px 8px',
    border: '1px solid #00000014',
    fontSize: '14px',
    lineHeight: '1.4285714286',
    color: '#424242',
    backgroundColor: '#ffffff',
    verticalAlign: 'middle',
    position: 'relative',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    borderRadius: '4px',
    outline: 'none',
}
let onFocus = {
    outlineOffset: '0px',
    border: '1px solid #00000029',
    boxShadow: '0 0 0 2px #00000014',
    outline: 'none',
    ...auto
}

module.exports = {
    inputStyles: {
        auto: auto,
        focus: onFocus
    }
}
