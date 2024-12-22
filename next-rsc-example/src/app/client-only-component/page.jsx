'use server'
import {ClientComponent} from "@/components/ClientComponent.jsx";
import Link from "next/link.js";

const ClientOnlyPage = async () => {
  return (
    <div>
      <h1>client-only-component</h1>
      <ClientComponent initialValue={Date.now()}/>
      <br/>
      <Link prefetch={false} href="/">Back to Home</Link>
    </div>
  );
};

export default ClientOnlyPage;
