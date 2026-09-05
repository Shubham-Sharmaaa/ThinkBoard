export default function RateLimitComponent() {
  return (
    <div className="w-full border border-emerald-950 bg-[#001a0a] rounded-sm px-4 py-3 flex items-center gap-4">
      {/* Icon */}
      <div className="w-10 h-10 rounded-full bg-emerald-950 flex items-center justify-center shrink-0">
        <svg
          className="w-5 h-5 text-emerald-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      </div>

      {/* Text */}
      <div className="flex flex-col gap-0.5">
        <h3 className="text-[11px] font-semibold text-gray-200">
          Rate Limit Reached
        </h3>

        <p className="text-[9px] text-gray-300">
          You've made too many requests in a short period. Please wait a moment.
        </p>

        <p className="text-[8px] text-gray-400">
          Try again in a few seconds for the best experience.
        </p>
      </div>
    </div>
  );
}
