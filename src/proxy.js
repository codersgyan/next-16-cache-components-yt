// proxy.ts (Next.js 16)
import { NextResponse } from 'next/server';
import * as fs from 'fs'; // Node.js native module

export default function proxy(request) {
    try {
        // This will WORK on Node.js Runtime
        const files = fs.readdirSync('./');

        return NextResponse.json({
            runtime: 'nodejs',
            files: files.slice(0, 5), // First 5 files
            success: true,
        });
    } catch (error) {
        return NextResponse.json({
            runtime: 'edge',
            error: error.message,
            success: false,
        });
    }
}

export const config = {
    matcher: '/api/test-runtime',
};
