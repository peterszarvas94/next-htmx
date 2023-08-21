export async function renderAsync(asyncComponent: Promise<JSX.Element>): Promise<string> {
  const component = await asyncComponent;
  const ReactDOMServer = (await import('react-dom/server')).default;
  const html = ReactDOMServer.renderToString(component);
  return html;
}

export async function render(component: JSX.Element): Promise<string> {
  const ReactDOMServer = (await import('react-dom/server')).default;
  const html = ReactDOMServer.renderToString(component);
  return html;
}
