# react-document-portal

React component that renders its children inside a portal attached to the document.

- :gift: Lightweight ![npm bundle size](https://badgen.net/bundlephobia/minzip/react-document-portal)
- :smile: Easy to use with simple API
- :printer: Server-side rendering out of the box

## Usage

```jsx
import { useRef } from "react";
import DocumentPortal from "react-document-portal";

const Example = (props) => {
  const portalRef = useRef(null);

  return (
    <DocumentPortal as="section" ref={portalRef}>
      <p>This content is rendered inside a portal.</p>
    </DocumentPortal>
  );
};
```

### Props

- `as` tag name used to create the portal container, defaults to `"div"`.
- `children` elements to render inside the portal.
- `ref` optional [React ref](https://react.dev/reference/react/useRef) that receives the created DOM element.

### Returns

A [React portal](https://react.dev/reference/react-dom/createPortal), or `null` before the DOM node exists.

## Requirements

Requires React v16.8.0 or higher.

## Server-Side Rendering

This component will not break SSR. On the server, the portal will render `null` until the DOM is available in the browser.
