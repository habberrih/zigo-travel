import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const COUNTER_KEY = "zigo_visitor_count";
const COOKIE_NAME = "zigo_visited";
const ONE_YEAR = 60 * 60 * 24 * 365;

function getRedis() {
  // Vercel's Storage integration injects KV_REST_API_URL/TOKEN (legacy KV
  // naming); fall back to the plain Upstash names for portability.
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token || !url.startsWith("https://")) return null;
  return new Redis({ url, token });
}

export async function GET(req: NextRequest) {
  try {
    const redis = getRedis();

    if (!redis) {
      // Not configured (e.g. local dev without env vars pulled from Vercel).
      return NextResponse.json({ count: null, configured: false });
    }

    const alreadyVisited = req.cookies.get(COOKIE_NAME)?.value === "1";
    const count = alreadyVisited
      ? await redis.get<number>(COUNTER_KEY)
      : await redis.incr(COUNTER_KEY);

    const res = NextResponse.json({ count: count ?? 0, configured: true });

    if (!alreadyVisited) {
      res.cookies.set(COOKIE_NAME, "1", {
        maxAge: ONE_YEAR,
        path: "/",
        sameSite: "lax",
      });
    }

    return res;
  } catch {
    return NextResponse.json({ count: null, configured: false });
  }
}
