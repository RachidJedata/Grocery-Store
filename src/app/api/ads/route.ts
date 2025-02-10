import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";
import { Location } from "@prisma/client"; // Import Prisma enum

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const addLocation = searchParams.get('ad_location') || 'ad1';

        // Validate the location to ensure it's a valid Prisma enum
        if (!Object.values(Location).includes(addLocation as Location)) {
            return NextResponse.json(
                { error: "Invalid location value" },
                { status: 400 }
            );
        }

        // Define the query options
        const queryOptions = {
            include: {
                product: {
                    select: {
                        discount: true
                    }
                }
            },
            where: {
                AND: [
                    { location: addLocation as Location },
                    { expired: false }
                ]
            },
            ...(addLocation !== "ad1" && { take: 2 }) // Conditionally add `take`
        };

        const data = await prisma.ads.findMany(queryOptions);

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch ads", details: error },
            { status: 500 }
        );
    }
}