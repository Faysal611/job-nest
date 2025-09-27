import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";

export async function POST(req) {
    const data = await req.json();
    console.log(data)
    const client = await clientPromise;
    const db = client.db("job-nest");
    const res = await db.collection("applications").insertOne(data)
    return NextResponse.json(res)
}