import ImageKit from "imagekit";
import { NextResponse } from "next/server";

export async function GET() {
  const privateKey = process.env.PRIVATE_KEY;


  if (!privateKey) {
    return NextResponse.json(
      { error: "Server misconfiguration: Missing private key" },
      { status: 500 }
    );
  }

  const imagekit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!, 
    privateKey, 
    urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT!,
  });

  const authParams = imagekit.getAuthenticationParameters();

  return NextResponse.json(authParams);
}