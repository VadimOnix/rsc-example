import Link from "next/link.js";
import {ImNestedServerComponent} from "@/components/nestedDemo/ImNestedServerComponent.jsx";
import {ServerComponentWithoutProps} from "@/components/nestedDemo/ServerComponentWithoutProps.jsx";

async function ClientNestedServerComponentPage(props) {
  return (
    <div>
      <h1>client-nested-server-component</h1>
      <ImNestedServerComponent>
        <ServerComponentWithoutProps/>
      </ImNestedServerComponent>
      <br/>
      <Link prefetch={false} href="/">Back to Home</Link>
    </div>
  )
}

export default ClientNestedServerComponentPage;
