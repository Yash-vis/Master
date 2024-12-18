import { NextResponse } from "next/server";
import { connectdb } from "../../../mongo/db";
import User from "../../../model/user";

export async function POST(request) {
  try {
    const { name, email } = await request.json();
    await connectdb();
    await User.create({ name, email });
    return NextResponse.json(
      { message: "User Registered" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error registering user:", error);
    return NextResponse.json(
      { message: "Error registering user", error: error.message },
      { status: 500 }
    );
  }
}
