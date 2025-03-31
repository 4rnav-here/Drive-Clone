export interface FileType {
  id: string
  name: string
  type: "document" | "image" | "spreadsheet" | "archive" | "video" | "other"
  size: string
  modifiedDate: string
  path: string
}

export interface FolderType {
  id: string
  name: string
  itemCount: number
  path: string
}

