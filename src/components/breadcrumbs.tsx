"use client"

import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbsProps {
  path: string[]
  onNavigate: (index: number) => void
}

export function Breadcrumbs({ path, onNavigate }: BreadcrumbsProps) {
  return (
    <div className="flex items-center space-x-1 text-sm">
      {path.map((item, index) => (
        <div key={index} className="flex items-center">
          {index === 0 ? (
            <button
              onClick={() => onNavigate(index)}
              className="flex items-center hover:bg-muted rounded-full px-2 py-1 transition-colors"
            >
              <Home className="h-4 w-4 mr-1" />
              <span>{item}</span>
            </button>
          ) : (
            <>
              <ChevronRight className="h-4 w-4 text-muted-foreground mx-1" />
              <button
                onClick={() => onNavigate(index)}
                className="hover:bg-muted rounded-full px-2 py-1 transition-colors"
              >
                {item}
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

