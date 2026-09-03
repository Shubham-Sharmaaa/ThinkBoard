import ratelimit from "../config/upstash.js";

export const ratelimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit("ratelimit_key");
    if (!success) {
      return res.status(429).json({ error: "Too many requests" });
    }
    next();
  } catch (error) {
    console.error("Rate limit error:", error);
    next(error);
  }
};
