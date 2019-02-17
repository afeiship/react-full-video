const STYLE = { textDecoration: 'underline' };

export default {
  renderMark(inProps, inEditor, inNext) {
    const { children, ...attributes } = inProps;
    switch (inProps.mark.type) {
      case 'underline':
        return (
          <span style={STYLE}>
            {children}
          </span>
        );
      default:
        return inNext();
    }
  }
};
