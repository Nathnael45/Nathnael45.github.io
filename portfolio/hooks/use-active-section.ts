"use client"

import { useEffect, useRef, useState } from "react"

export function useActiveSection(sectionIds: string[], rootMargin = "-30% 0px -60% 0px") {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "")
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observer.current?.disconnect()
    observer.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.current?.observe(el)
    })

    return () => observer.current?.disconnect()
  }, [sectionIds, rootMargin])

  return activeId
}
