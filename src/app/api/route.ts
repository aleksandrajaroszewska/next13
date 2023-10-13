import { NextRequest, NextResponse } from "next/server";

export async function GET(_request: NextRequest): Promise<Response> {
	return NextResponse.json("Hello worldsdsdsd!", {
		headers: {
			"Content-Type": "application/json",
		},
		status: 200,
	});
}
