import { renderToString } from "react-dom/server";
import { expect, test } from "vitest";
import DocumentPortal from "..";

const TestComponent = () => (
  <main data-testid="main">
    <p>Example application</p>
    <DocumentPortal>
      <dialog data-testid="dialog">Hello!</dialog>
    </DocumentPortal>
  </main>
);

test("does not render on server", () => {
  expect(renderToString(<TestComponent />)).not.toContain(
    'data-testid="dialog"',
  );
});
