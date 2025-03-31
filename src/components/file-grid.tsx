"use client"

import { File, FileImage, FileText, FileSpreadsheet, FileArchive, Video, Folder, MoreVertical } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Card, CardContent } from "~/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "~/components/ui/dropdown-menu"
import type { FileType, FolderType } from "~/lib/types"

interface FileGridProps {
  files: FileType[]
  folders: FolderType[]
  onFolderClick: (folderName: string) => void
}

export function FileGrid({ files, folders, onFolderClick }: FileGridProps) {
  const getFileIcon = (type: string) => {
    switch (type) {
      case "image":
        return <FileImage className="h-10 w-10 text-blue-500" />
      case "document":
        return <FileText className="h-10 w-10 text-green-500" />
      case "spreadsheet":
        return <FileSpreadsheet className="h-10 w-10 text-emerald-500" />
      case "archive":
        return <FileArchive className="h-10 w-10 text-yellow-500" />
      case "video":
        return <Video className="h-10 w-10 text-red-500" />
      default:
        return <File className="h-10 w-10 text-gray-500" />
    }
  }

  return (
    <div>
      {folders.length > 0 && (
        <>
          <h2 className="text-lg font-medium mb-3">Folders</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-8">
            {folders.map((folder) => (
              <Card
                key={folder.id}
                className="cursor-pointer hover:bg-muted/50 transition-colors border border-muted/60 shadow-sm"
              >
                <CardContent className="p-4 flex items-start justify-between">
                  <div className="flex items-center gap-3" onClick={() => onFolderClick(folder.name)}>
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Folder className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium truncate max-w-[120px]">{folder.name}</p>
                      <p className="text-xs text-muted-foreground">{folder.itemCount} items</p>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full opacity-0 group-hover:opacity-100 hover:opacity-100 focus:opacity-100"
                      >
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
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}

      {files.length > 0 && (
        <>
          <h2 className="text-lg font-medium mb-3">Files</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {files.map((file) => (
              <Card
                key={file.id}
                className="group cursor-pointer hover:bg-muted/50 transition-colors border border-muted/60 shadow-sm"
              >
                <CardContent className="p-4 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/5 p-2 rounded-lg">{getFileIcon(file.type)}</div>
                    <div>
                      <p className="font-medium truncate max-w-[120px]">{file.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {file.size} • {file.modifiedDate}
                      </p>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full opacity-0 group-hover:opacity-100 hover:opacity-100 focus:opacity-100"
                      >
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
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}

      {folders.length === 0 && files.length === 0 && (
        <div className="flex flex-col items-center justify-center h-64 bg-muted/30 rounded-xl p-8">
          <File className="h-16 w-16 text-muted-foreground mb-4" />
          <h3 className="text-xl font-medium">No files or folders</h3>
          <p className="text-muted-foreground">Upload files or create a new folder to get started</p>
        </div>
      )}
    </div>
  )
}

