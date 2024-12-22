import {ServerComponent} from "@/components/ServerComponent.jsx";
import Link from "next/link.js";

const ServerOnlyPage = () => {
  return (
    <div>
      <h1>server-only-component</h1>
      <ServerComponent/>
      <br/>
      <Link prefetch={false} href="/">Back to Home</Link>
    </div>
  );
};

export default ServerOnlyPage;
