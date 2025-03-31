import type { FileType, FolderType } from "./types"

export const mockFolders: FolderType[] = [
  {
    id: "folder-1",
    name: "Documents",
    itemCount: 15,
    path: "",
  },
  {
    id: "folder-2",
    name: "Images",
    itemCount: 42,
    path: "",
  },
  {
    id: "folder-3",
    name: "Projects",
    itemCount: 7,
    path: "",
  },
  {
    id: "folder-4",
    name: "Work",
    itemCount: 23,
    path: "",
  },
  {
    id: "folder-5",
    name: "Personal",
    itemCount: 12,
    path: "",
  },
  {
    id: "folder-6",
    name: "2023",
    itemCount: 8,
    path: "Documents",
  },
  {
    id: "folder-7",
    name: "2024",
    itemCount: 3,
    path: "Documents",
  },
  {
    id: "folder-8",
    name: "Vacation",
    itemCount: 56,
    path: "Images",
  },
  {
    id: "folder-9",
    name: "Profile Pictures",
    itemCount: 12,
    path: "Images",
  },
]

export const mockFiles: FileType[] = [
  {
    id: "file-1",
    name: "Project Proposal.docx",
    type: "document",
    size: "245 KB",
    modifiedDate: "Mar 28, 2024",
    path: "",
  },
  {
    id: "file-2",
    name: "Budget 2024.xlsx",
    type: "spreadsheet",
    size: "1.2 MB",
    modifiedDate: "Mar 25, 2024",
    path: "",
  },
  {
    id: "file-3",
    name: "Profile Photo.jpg",
    type: "image",
    size: "3.5 MB",
    modifiedDate: "Mar 20, 2024",
    path: "",
  },
  {
    id: "file-4",
    name: "Meeting Notes.docx",
    type: "document",
    size: "125 KB",
    modifiedDate: "Mar 15, 2024",
    path: "",
  },
  {
    id: "file-5",
    name: "Presentation.pptx",
    type: "document",
    size: "4.8 MB",
    modifiedDate: "Mar 10, 2024",
    path: "",
  },
  {
    id: "file-6",
    name: "Archive.zip",
    type: "archive",
    size: "15.2 MB",
    modifiedDate: "Mar 5, 2024",
    path: "",
  },
  {
    id: "file-7",
    name: "Product Demo.mp4",
    type: "video",
    size: "45.7 MB",
    modifiedDate: "Feb 28, 2024",
    path: "",
  },
  {
    id: "file-8",
    name: "Resume.pdf",
    type: "document",
    size: "520 KB",
    modifiedDate: "Mar 29, 2024",
    path: "Documents",
  },
  {
    id: "file-9",
    name: "Contract.pdf",
    type: "document",
    size: "1.8 MB",
    modifiedDate: "Mar 27, 2024",
    path: "Documents",
  },
  {
    id: "file-10",
    name: "Beach.jpg",
    type: "image",
    size: "5.2 MB",
    modifiedDate: "Mar 26, 2024",
    path: "Images/Vacation",
  },
  {
    id: "file-11",
    name: "Mountains.jpg",
    type: "image",
    size: "4.8 MB",
    modifiedDate: "Mar 26, 2024",
    path: "Images/Vacation",
  },
]

export const mockRecentFiles: FileType[] = [
  {
    id: "recent-1",
    name: "Resume.pdf",
    type: "document",
    size: "520 KB",
    modifiedDate: "Mar 29, 2024",
    path: "Documents",
  },
  {
    id: "recent-2",
    name: "Project Proposal.docx",
    type: "document",
    size: "245 KB",
    modifiedDate: "Mar 28, 2024",
    path: "",
  },
  {
    id: "recent-3",
    name: "Contract.pdf",
    type: "document",
    size: "1.8 MB",
    modifiedDate: "Mar 27, 2024",
    path: "Documents",
  },
  {
    id: "recent-4",
    name: "Beach.jpg",
    type: "image",
    size: "5.2 MB",
    modifiedDate: "Mar 26, 2024",
    path: "Images/Vacation",
  },
  {
    id: "recent-5",
    name: "Mountains.jpg",
    type: "image",
    size: "4.8 MB",
    modifiedDate: "Mar 26, 2024",
    path: "Images/Vacation",
  },
  {
    id: "recent-6",
    name: "Budget 2024.xlsx",
    type: "spreadsheet",
    size: "1.2 MB",
    modifiedDate: "Mar 25, 2024",
    path: "",
  },
]

