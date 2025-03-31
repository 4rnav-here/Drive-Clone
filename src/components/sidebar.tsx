"use client"

import {
  Clock,
  HardDrive,
  Plus,
  Star,
  Trash2,
  FileText,
  Image,
  FileSpreadsheet,
  FileArchive,
  Video,
} from "lucide-react"
import { Button } from "~/components/ui/button"
import { Progress } from "~/components/ui/progress"
import { Separator } from "~/components/ui/separator"

interface SidebarProps {
  currentView: "my-drive" | "recent" | "starred" | "trash"
  onChangeView: (view: "my-drive" | "recent" | "starred" | "trash") => void
}

export function Sidebar({ currentView, onChangeView }: SidebarProps) {
  return (
    <div className="w-64 border-r p-4 flex flex-col h-full bg-background/95 backdrop-blur-sm">
      <div className="mb-6">
        <Button className="w-full justify-start gap-2 mb-6 rounded-full">
          <Plus className="h-4 w-4" />
          New
        </Button>

        <nav className="space-y-1">
          <Button
            variant={currentView === "my-drive" ? "secondary" : "ghost"}
            className="w-full justify-start gap-2 rounded-full"
            onClick={() => onChangeView("my-drive")}
          >
            <HardDrive className="h-4 w-4" />
            My Drive
          </Button>
          <Button
            variant={currentView === "recent" ? "secondary" : "ghost"}
            className="w-full justify-start gap-2 rounded-full"
            onClick={() => onChangeView("recent")}
          >
            <Clock className="h-4 w-4" />
            Recent
          </Button>
          <Button
            variant={currentView === "starred" ? "secondary" : "ghost"}
            className="w-full justify-start gap-2 rounded-full"
            onClick={() => onChangeView("starred")}
          >
            <Star className="h-4 w-4" />
            Starred
          </Button>
          <Button
            variant={currentView === "trash" ? "secondary" : "ghost"}
            className="w-full justify-start gap-2 rounded-full"
            onClick={() => onChangeView("trash")}
          >
            <Trash2 className="h-4 w-4" />
            Trash
          </Button>
        </nav>
      </div>

      <Separator className="my-4" />

      <div className="mt-2">
        <h3 className="text-sm font-medium mb-2 px-3">Storage</h3>
        <div className="px-3 py-2 bg-muted/50 rounded-lg mb-2">
          <Progress value={35} className="h-2 mb-2" />
          <p className="text-xs text-muted-foreground">3.5 GB of 15 GB used</p>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="mt-2 flex-1 overflow-auto">
        <h3 className="text-sm font-medium mb-2 px-3">File Types</h3>
        <div className="space-y-1">
          <Button variant="ghost" size="sm" className="w-full justify-start gap-2 rounded-full">
            <FileText className="h-4 w-4 text-blue-500" />
            Documents
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start gap-2 rounded-full">
            <Image className="h-4 w-4 text-green-500" />
            Images
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start gap-2 rounded-full">
            <Video className="h-4 w-4 text-red-500" />
            Videos
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start gap-2 rounded-full">
            <FileSpreadsheet className="h-4 w-4 text-emerald-500" />
            Spreadsheets
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start gap-2 rounded-full">
            <FileArchive className="h-4 w-4 text-yellow-500" />
            Archives
          </Button>
        </div>
      </div>
    </div>
  )
}

