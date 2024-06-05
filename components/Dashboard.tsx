"use client";
import { users } from "@/lib/user-info";
import data from "@/lib/data.json";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { banner } from "@/lib/banner";

interface DashboardProps {
  username: string;
}

export default function Dashboard({ username }: DashboardProps) {
  const user = users.find((user) => user.name === username);
  const [timeframe, setTimeframe] = useState<"daily" | "weekly" | "monthly">(
    "daily",
  );

  const bannerVariants = {
    work: "bg-tt-light-red-work",
    play: "bg-tt-soft-blue-play",
  };

  return (
    <div className="text-white">
      <div className="relative h-10 w-10">
        <Image
          src={user?.image as string | StaticImport}
          fill
          loading="eager"
          alt="user avatar"
        />
      </div>
      <h1 className="text-3xl font-bold text-zinc-500">{user?.name}</h1>
      <nav className="flex gap-2">
        <div>
          <button
            className={cn(
              "text-white/40",
              timeframe === "daily" ? "text-white" : "",
            )}
            onClick={() => setTimeframe("daily")}
          >
            Daily
          </button>
        </div>
        <div>
          <button
            className={cn(
              "text-white/40",
              timeframe === "weekly" ? "text-white" : "",
            )}
            onClick={() => setTimeframe("weekly")}
          >
            Weekly
          </button>
        </div>
        <div>
          <button
            className={cn(
              "text-white/40",
              timeframe === "monthly" ? "text-white" : "",
            )}
            onClick={() => setTimeframe("monthly")}
          >
            Monthly
          </button>
        </div>
      </nav>
      {/* timetrackCard */}
      <section className="grid gap-y-4">
        {data.map((item, index) => {
          const bannerEntry = banner[item.title.toLowerCase()];
          const backgroundClass = bannerEntry
            ? bannerEntry.bg
            : "bg-tt-dark-blue";
          const test = [item.title.toLowerCase()];
          const testClass = `${test}-bg`;

          return (
            <div
              className={cn("border-2 border-red-300", testClass)}
              key={index}
            >
              <h2>{item.title}</h2>
              <p>{item.timeframes[timeframe].current}hrs</p>
              <p>Last Week - {item.timeframes[timeframe].previous}hrs</p>
            </div>
          );
        })}

        <div className={`${[data[0].title.toLowerCase()]}-bg`}>
          {/* <div className="bg-tt-light-red-work"> */}
          <div className={cn("border-2 border-red-300")}>
            <h2>{data[0].title}</h2>
            <p>{data[0].timeframes[timeframe].current}hrs</p>
            <p>Last Week - {data[0].timeframes[timeframe].previous}hrs</p>
          </div>
        </div>
      </section>
    </div>
  );
}
