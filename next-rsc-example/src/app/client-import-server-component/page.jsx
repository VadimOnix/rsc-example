import {ImImportServerComponentWithProps} from "@/components/nestedDemo/ImImportServerComponentWithProps.jsx";
import Link from "next/link.js";

function ClientImportServerComponentPage(props) {
  return (
    <div>
      <h1>client-import-server-component</h1>
      <ImImportServerComponentWithProps/>
      <br/>
      <Link prefetch={false} href="/">Back to Home</Link>
    </div>
  );
}

export default ClientImportServerComponentPage;
