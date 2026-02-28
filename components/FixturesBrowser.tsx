"use client";

import { useState } from "react";
import { type Fixture } from "@/lib/fpl";
import FixtureCard from "./FixtureCard";

interface Props {
  groupedFixtures: { gw: string; fixtures: Fixture[] }[];
  currentGwIndex: number;
}

export default function FixturesBrowser({
  groupedFixtures,
  currentGwIndex,
}: Props) {
  const [activeIndex, setActiveIndex] = useState(currentGwIndex);

  const active = groupedFixtures[activeIndex];
  const isFirst = activeIndex === 0;
  const isLast = activeIndex === groupedFixtures.length - 1;

  return (
    <div>
      {/* Pagination controls */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => setActiveIndex((i) => i - 1)}
          disabled={isFirst}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-800 bg-gray-900 text-gray-400 text-sm font-semibold uppercase tracking-wider hover:border-gray-700 hover:text-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Prev
        </button>

        {/* GW selector — scrollable pill list */}
        <div className="flex items-center gap-1.5 overflow-x-auto px-2 scrollbar-none max-w-[420px]">
          {groupedFixtures.map((g, i) => (
            <button
              key={g.gw}
              onClick={() => setActiveIndex(i)}
              className={`shrink-0 px-3 py-1 rounded-md text-[11px] font-extrabold uppercase tracking-widest transition-all ${
                i === activeIndex
                  ? "bg-emerald-400 text-emerald-950"
                  : "bg-gray-900 border border-gray-800 text-gray-500 hover:border-gray-700 hover:text-gray-300"
              }`}
            >
              {g.gw}
            </button>
          ))}
        </div>

        <button
          onClick={() => setActiveIndex((i) => i + 1)}
          disabled={isLast}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-800 bg-gray-900 text-gray-400 text-sm font-semibold uppercase tracking-wider hover:border-gray-700 hover:text-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          Next
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Active gameweek label */}
      <div className="flex items-center gap-3 mb-4">
        <div className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-emerald-400 border-l-2 border-emerald-400 bg-emerald-400/5 px-3 py-1.5">
          {active.gw}
        </div>
        <span className="text-[11px] text-gray-600 uppercase tracking-widest">
          {active.fixtures.length} fixtures
        </span>
      </div>

      {/* Fixture cards */}
      <div className="grid grid-col-2 gap-2">
        {active.fixtures.map((f) => (
          <FixtureCard key={f.id} fixture={f} />
        ))}
      </div>
    </div>
  );
}
