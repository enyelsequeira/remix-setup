import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '/build/_shared/chunk-FM37HHYK.js';
import { React, init_react } from '/build/_shared/chunk-P2FTGPOX.js';

// browser-route-module:/Users/enyelsequeira/Desktop/personal/remix/app/root.tsx?browser
init_react();

// app/root.tsx
init_react();

// app/tailwind.css
const tailwind_default = '/build/_assets/tailwind-NGR3NGJZ.css';

// app/root.tsx
function links() {
  return [{ rel: 'stylesheet', href: tailwind_default }];
}
const meta = () => {
  return { title: 'New Remix App' };
};
function App() {
  return /* @__PURE__ */ React.createElement(
    'html',
    {
      lang: 'en',
    },
    /* @__PURE__ */ React.createElement(
      'head',
      null,
      /* @__PURE__ */ React.createElement('meta', {
        charSet: 'utf-8',
      }),
      /* @__PURE__ */ React.createElement('meta', {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1',
      }),
      /* @__PURE__ */ React.createElement(Meta, null),
      /* @__PURE__ */ React.createElement(Links, null)
    ),
    /* @__PURE__ */ React.createElement(
      'body',
      null,
      /* @__PURE__ */ React.createElement(Outlet, null),
      /* @__PURE__ */ React.createElement(ScrollRestoration, null),
      /* @__PURE__ */ React.createElement(Scripts, null),
      /* @__PURE__ */ React.createElement(LiveReload, null)
    )
  );
}
export { App as default, links, meta };
// # sourceMappingURL=/build/root-TIB6GJEX.js.map
