import { db } from "@/lib/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  //console.log("request", req);
  const { name, email, password } = await req.json();

  try {
    const userExists = await db.user.findUnique({
      where: { email },
    });

    if (userExists) {
      return new NextResponse("User already exists", { status: 409 });
    }

    const hashedPassword = await hash(password, 10);
    const user = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log("[REGISTER_USER]", error);
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
