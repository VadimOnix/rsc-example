import Link from "next/link.js";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link prefetch={false} href="/server-only-component">/server-only-component</Link>
          </li>
          <li>
            <Link prefetch={false} href="/client-only-component">/client-only-component</Link>
          </li>
          <li>
            <Link prefetch={false} href="/client-component-hydrate-error">/client-component-with-hydrate-error</Link>
          </li>
          <li>
            <Link prefetch={false} href="/client-nested-server-component">/client-nested-server-component</Link>
          </li>
          <li>
            <Link prefetch={false} href="/client-import-server-component">/client-import-server-component</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
