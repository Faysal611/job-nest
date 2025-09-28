import { NextResponse } from "next/server"
import clientPromise from "../../../../../lib/mongodb";

export async function GET(req, context) {
    const params = await context.params;
    const jobId = params.jobId;
    const userId = params.userId;

    const client = await clientPromise;
    const db = client.db("job-nest");
    const res = await db.collection("applications").findOne({jobId: parseInt(jobId), userId: parseInt(userId)});

    return NextResponse.json(res);

}