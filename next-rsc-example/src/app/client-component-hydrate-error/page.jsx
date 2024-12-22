import {ClientComponentWithHydrateError} from "@/components/ClientComponentWithHydrateError.jsx";
import Link from "next/link.js";

const ClientOnlyHydrateErrorPage = () => {
  return (
    <div>
      <h1>client-component-hydrate-error</h1>
      <br/>
      <span style={{color: "red"}}>This Component has mismatch hydration content!</span>
      <br/>
      <ClientComponentWithHydrateError/>
      <br/>
      <Link prefetch={false} href="/">Back to Home</Link>
    </div>
  );
};

export default ClientOnlyHydrateErrorPage;
