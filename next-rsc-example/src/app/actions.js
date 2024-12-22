'use server'

import {revalidatePath} from "next/cache.js";

export async function addToServerStateAction(value) {
  await fetch('http://localhost:3000/api/server-count', {method: "PUT"})
  revalidatePath('/client-nested-server-component')
}
