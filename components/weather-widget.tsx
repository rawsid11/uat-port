"use client"

import { useEffect, useState } from "react"
import { Cloud, Sun, CloudRain, CloudSnow, Wind } from "lucide-react"

export function WeatherWidget() {
  const [time, setTime] = useState<string>("")
  const [weather] = useState({ temp: 24, condition: "sunny" })

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
          timeZone: "Asia/Kolkata",
        }),
      )
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const WeatherIcon =
    weather.condition === "sunny"
      ? Sun
      : weather.condition === "cloudy"
        ? Cloud
        : weather.condition === "rainy"
          ? CloudRain
          : weather.condition === "snowy"
            ? CloudSnow
            : Wind

  return (
    <div className="text-center sm:text-right">
      <p className="font-mono tracking-wider text-xs">MUMBAI, IST</p>
      <div className="flex items-center justify-center sm:justify-end gap-1 mt-0.5">
        <WeatherIcon className="w-3 h-3" />
        <span className="text-[10px] text-muted-foreground">{weather.temp}°C</span>
        <span className="text-[10px] text-muted-foreground">•</span>
        <span className="text-[10px] text-muted-foreground">{time}</span>
      </div>
    </div>
  )
}
