"use client"

import Image from "next/image"

export function ProfilePhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-36 h-36 overflow-hidden rounded-sm ring-1 ring-border">
      <Image src={src} alt={alt} fill priority className="object-cover" />
    </div>
  )
}
