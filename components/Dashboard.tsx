"use client";
import { users } from "@/lib/user-info";
import data from "@/lib/data.json";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import CountUpAnimation from "./CountUpAnimation";

interface DashboardProps {
  username: string;
}

export default function Dashboard({ username }: DashboardProps) {
  const user = users.find((user) => user.name === username);
  const [timeframe, setTimeframe] = useState<"daily" | "weekly" | "monthly">(
    "daily",
  );
  const [fade, setFade] = useState(false);

  const changeTimeframe = (newTimeframe: "daily" | "weekly" | "monthly") => {
    if (timeframe !== newTimeframe) {
      setFade(true);
      setTimeout(() => {
        setTimeframe(newTimeframe);
        setFade(false);
      }, 500);
    }
  };

  return (
    <div className="text-white sm:grid sm:max-w-[1112px] sm:grid-cols-4 sm:gap-8">
      <section className="mb-6 overflow-hidden rounded-[1.10rem] bg-tt-dark-blue sm:mb-0 sm:flex sm:flex-col">
        <div className="flex items-center justify-center gap-x-4 rounded-b-[1.10rem] bg-tt-blue px-[30px] py-[32px] sm:flex-grow sm:flex-col sm:items-start sm:justify-start sm:pb-0">
          <div className="relative h-[70px] w-[70px] flex-shrink-0 rounded-full border-[3px] border-white sm:h-[86px] sm:w-[86px]">
            <Image
              src={user?.image as string | StaticImport}
              fill
              loading="eager"
              alt="user avatar"
            />
          </div>
          <div>
            <p className="text-sm text-tt-pale-blue sm:mt-11">Report for</p>
            <h1 className="text-2xl font-semibold text-white/80 sm:text-[2.50rem] sm:font-normal sm:leading-[1.25]">
              {user?.name}
            </h1>
          </div>
        </div>
        <nav className="flex justify-between gap-2 bg-tt-dark-blue px-7 pb-6 pt-5 sm:flex-col sm:gap-y-3 sm:pt-6">
          <div>
            <button
              className={cn(
                "text-white/40 transition-all duration-300 hover:text-white/80",
                timeframe === "daily" ? "text-white" : "",
              )}
              onClick={() => changeTimeframe("daily")}
            >
              Daily
            </button>
          </div>
          <div>
            <button
              className={cn(
                "text-white/40 transition-all duration-300 hover:text-white/80",
                timeframe === "weekly" ? "text-white" : "",
              )}
              onClick={() => changeTimeframe("weekly")}
            >
              Weekly
            </button>
          </div>
          <div>
            <button
              className={cn(
                "text-white/40 transition-all duration-300 hover:text-white/80",
                timeframe === "monthly" ? "text-white" : "",
              )}
              onClick={() => changeTimeframe("monthly")}
            >
              Monthly
            </button>
          </div>
        </nav>
      </section>
      {/* timetrackCard */}
      <section className="grid gap-y-6 sm:col-span-3 sm:grid-cols-3 sm:place-content-center sm:gap-x-8 sm:gap-y-7">
        {data.map((item, index) => {
          const activity = item.title.toLowerCase().replace(/\s+/g, "-");
          const activityBgClass = `${activity}-bg`;

          return (
            <section key={index} className="overflow-hidden rounded-[1.1rem]">
              <div
                className={cn(
                  "cursor-pointer rounded-b-[2rem] pt-[36px] sm:pt-[46px]",
                  activityBgClass,
                )}
              >
                <div className="rounded-t-[1.1rem] bg-tt-dark-blue px-6 transition-all duration-300 hover:bg-[#34397b] sm:px-7">
                  <div className="flex items-center justify-between pt-7">
                    <h2 className="font-bold">{item.title}</h2>
                    <div className="relative h-[5px] w-[28px] opacity-50 transition-all duration-200 hover:opacity-100">
                      <Image
                        src="./images/icon-ellipsis.svg"
                        className="object-contain"
                        alt="icon"
                        fill
                      />
                    </div>
                  </div>
                  <div
                    className={cn(
                      "flex items-center justify-between pb-7 sm:flex-col  sm:items-start sm:pb-8",
                      fade ? "fadeIn" : "",
                    )}
                  >
                    <p className="text-3xl font-normal sm:pb-6 sm:pt-9 sm:text-[3.5rem]">
                      <span className="tabular-nums">
                        <CountUpAnimation>
                          {item.timeframes[timeframe].current}
                        </CountUpAnimation>
                      </span>
                      hrs
                    </p>
                    <p className="text-sm text-tt-pale-blue">
                      Last Week - {item.timeframes[timeframe].previous}hrs
                    </p>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </section>
    </div>
  );
}
