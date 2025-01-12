import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { jwtVerify, SignJWT } from "jose";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payloads) {
  return await new SignJWT(payloads)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10 sec from now")
    .sign(key);
}

export async function decrypt(input) {
  const payload = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function login(FormData) {
  const user = { email: FormData.get("email"), name: "azeez" };

  //create session for user
  const expires = new Date(Date.now() + 10 * 1000);
  const session = await encrypt({ user, expires });

  //Save the session in a cookie
  cookies().set("session", session, { expires, httpOnly: true });
}

export async function logout() {
  //Destroy the session saved in cookie
  cookies().delete("session", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(NextRequest) {
  const session = NextRequest.cookies.get("session")?.value;
  if (!session) return null;

  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 10 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
    path: "/",
  });

  return res;
}
