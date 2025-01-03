import { Links, Meta, Outlet, Scripts } from '@remix-run/react';
import Header from "./routes/header";

export default function App() {
  return (
    <html>
      <head>
        <link rel='icon' href='data:image/x-icon;base64,AA' />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}