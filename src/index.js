import { forwardRef, useState } from "react";
import { createPortal } from "react-dom";
import { updateRef } from "./updateRef";
import { useBrowserLayoutEffect } from "./useBrowserLayoutEffect";

/**
 * React component that renders its children into a portal attached to the
 * document. A container element is created using the given tag name and
 * inserted into `document.body`, then cleaned up automatically on unmount.
 *
 * Works in environments with server-side rendering and supports older browsers.
 * The forwarded ref receives the created DOM element.
 * @param {object} props
 * @param {string} [props.as="div"] - Tag name for the DOM node that will host the portal.
 * @param {import("react").ReactNode} [props.children=null] - Content to render inside the portal.
 * @param {import("react").Ref<HTMLElement>} [props.ref] - Forwarded ref receiving the created DOM element.
 * @returns {import("react").ReactPortal|null} A React portal, or `null` before the DOM node exists.
 */
const DocumentPortal = forwardRef(({ as = "div", children = null }, ref) => {
  const [node, setNode] = useState(null);

  useBrowserLayoutEffect(() => {
    setNode(document.createElement(as));
  }, [as]);

  useBrowserLayoutEffect(() => {
    if (node) {
      document.body.appendChild(node);
      return () => {
        node.parentNode.removeChild(node);
      };
    }
  }, [node]);

  useBrowserLayoutEffect(() => {
    if (ref) {
      updateRef(ref, node);
      return () => updateRef(ref, null);
    }
  }, [node, ref]);

  return node && createPortal(children, node);
});

DocumentPortal.displayName = "DocumentPortal";

export default DocumentPortal;
