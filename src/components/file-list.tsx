"use client"

import { useState } from "react"
import {
  File,
  FileImage,
  FileText,
  FileSpreadsheet,
  FileArchive,
  Video,
  Folder,
  MoreVertical,
  ChevronUp,
  ChevronDown,
} from "lucide-react"
import { Button } from "~/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "~/components/ui/dropdown-menu"
import { Checkbox } from "~/components/ui/checkbox"
import type { FileType, FolderType } from "~/lib/types"

interface FileListProps {
  files: FileType[]
  folders: FolderType[]
  onFolderClick: (folderName: string) => void
}

type SortField = "name" | "modified" | "size" | "type"
type SortDirection = "asc" | "desc"

export function FileList({ files, folders, onFolderClick }: FileListProps) {
  const [sortField, setSortField] = useState<SortField>("name")
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc")
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  const getFileIcon = (type: string) => {
    switch (type) {
      case "image":
        return <FileImage className="h-5 w-5 text-blue-500" />
      case "document":
        return <FileText className="h-5 w-5 text-green-500" />
      case "spreadsheet":
        return <FileSpreadsheet className="h-5 w-5 text-emerald-500" />
      case "archive":
        return <FileArchive className="h-5 w-5 text-yellow-500" />
      case "video":
        return <Video className="h-5 w-5 text-red-500" />
      default:
        return <File className="h-5 w-5 text-gray-500" />
    }
  }

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  const sortedFolders = [...folders].sort((a, b) => {
    if (sortField === "name") {
      return sortDirection === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    }
    return 0
  })

  const sortedFiles = [...files].sort((a, b) => {
    if (sortField === "name") {
      return sortDirection === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    } else if (sortField === "modified") {
      const dateA = new Date(a.modifiedDate)
      const dateB = new Date(b.modifiedDate)
      return sortDirection === "asc" ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime()
    } else if (sortField === "size") {
      const sizeA = Number.parseFloat(a.size.split(" ")[0])
      const sizeB = Number.parseFloat(b.size.split(" ")[0])
      return sortDirection === "asc" ? sizeA - sizeB : sizeB - sizeA
    } else if (sortField === "type") {
      return sortDirection === "asc" ? a.type.localeCompare(b.type) : b.type.localeCompare(a.type)
    }
    return 0
  })

  const toggleSelectItem = (id: string) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id))
    } else {
      setSelectedItems([...selectedItems, id])
    }
  }

  const toggleSelectAll = () => {
    if (selectedItems.length === folders.length + files.length) {
      setSelectedItems([])
    } else {
      const allIds = [...folders.map((f) => f.id), ...files.map((f) => f.id)]
      setSelectedItems(allIds)
    }
  }

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return null
    return sortDirection === "asc" ? <ChevronUp className="h-4 w-4 ml-1" /> : <ChevronDown className="h-4 w-4 ml-1" />
  }

  return (
    <div className="w-full">
      {folders.length > 0 || files.length > 0 ? (
        <div className="rounded-md border">
          <div className="grid grid-cols-12 py-3 px-4 border-b bg-muted/40 text-sm font-medium">
            <div className="col-span-6 md:col-span-5 flex items-center gap-2">
              <Checkbox
                checked={selectedItems.length === folders.length + files.length && folders.length + files.length > 0}
                onCheckedChange={toggleSelectAll}
                aria-label="Select all"
              />
              <button
                className="flex items-center hover:bg-muted/80 px-2 py-1 rounded"
                onClick={() => handleSort("name")}
              >
                Name
                <SortIcon field="name" />
              </button>
            </div>
            <div className="col-span-2 hidden md:flex items-center">
              <button
                className="flex items-center hover:bg-muted/80 px-2 py-1 rounded"
                onClick={() => handleSort("type")}
              >
                Type
                <SortIcon field="type" />
              </button>
            </div>
            <div className="col-span-3 md:col-span-3 flex items-center">
              <button
                className="flex items-center hover:bg-muted/80 px-2 py-1 rounded"
                onClick={() => handleSort("modified")}
              >
                Modified
                <SortIcon field="modified" />
              </button>
            </div>
            <div className="col-span-3 md:col-span-2 flex items-center justify-end">
              <button
                className="flex items-center hover:bg-muted/80 px-2 py-1 rounded"
                onClick={() => handleSort("size")}
              >
                Size
                <SortIcon field="size" />
              </button>
            </div>
          </div>

          {/* Folders */}
          {sortedFolders.map((folder) => (
            <div key={folder.id} className="grid grid-cols-12 py-3 px-4 border-b hover:bg-muted/30 transition-colors">
              <div className="col-span-6 md:col-span-5 flex items-center gap-3">
                <Checkbox
                  checked={selectedItems.includes(folder.id)}
                  onCheckedChange={() => toggleSelectItem(folder.id)}
                  aria-label={`Select ${folder.name}`}
                />
                <div className="flex items-center gap-3 cursor-pointer" onClick={() => onFolderClick(folder.name)}>
                  <Folder className="h-5 w-5 text-primary" />
                  <span className="font-medium truncate">{folder.name}</span>
                </div>
              </div>
              <div className="col-span-2 hidden md:flex items-center text-muted-foreground text-sm">Folder</div>
              <div className="col-span-3 md:col-span-3 flex items-center text-muted-foreground text-sm">—</div>
              <div className="col-span-3 md:col-span-2 flex items-center justify-end text-muted-foreground text-sm">
                {folder.itemCount} items
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8 ml-2">
                      <MoreVertical className="h-4 w-4" />
                      <span className="sr-only">Menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Rename</DropdownMenuItem>
                    <DropdownMenuItem>Share</DropdownMenuItem>
                    <DropdownMenuItem>Move</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}

          {/* Files */}
          {sortedFiles.map((file) => (
            <div key={file.id} className="grid grid-cols-12 py-3 px-4 border-b hover:bg-muted/30 transition-colors">
              <div className="col-span-6 md:col-span-5 flex items-center gap-3">
                <Checkbox
                  checked={selectedItems.includes(file.id)}
                  onCheckedChange={() => toggleSelectItem(file.id)}
                  aria-label={`Select ${file.name}`}
                />
                <div className="flex items-center gap-3">
                  {getFileIcon(file.type)}
                  <span className="truncate">{file.name}</span>
                </div>
              </div>
              <div className="col-span-2 hidden md:flex items-center text-muted-foreground text-sm capitalize">
                {file.type}
              </div>
              <div className="col-span-3 md:col-span-3 flex items-center text-muted-foreground text-sm">
                {file.modifiedDate}
              </div>
              <div className="col-span-3 md:col-span-2 flex items-center justify-end text-muted-foreground text-sm">
                {file.size}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8 ml-2">
                      <MoreVertical className="h-4 w-4" />
                      <span className="sr-only">Menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Download</DropdownMenuItem>
                    <DropdownMenuItem>Rename</DropdownMenuItem>
                    <DropdownMenuItem>Share</DropdownMenuItem>
                    <DropdownMenuItem>Move</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-64 bg-muted/30 rounded-xl p-8">
          <File className="h-16 w-16 text-muted-foreground mb-4" />
          <h3 className="text-xl font-medium">No files or folders</h3>
          <p className="text-muted-foreground">Upload files or create a new folder to get started</p>
        </div>
      )}
    </div>
  )
}

