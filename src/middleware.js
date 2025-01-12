import { NextRequest } from "next/server";
import { updateSession } from "./lib";

export async function middleware(NextRequest) {
  return await updateSession(NextRequest);
}
