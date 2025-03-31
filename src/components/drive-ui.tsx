"use client"

import { useState } from "react"
import { Breadcrumbs } from "~/components/breadcrumbs"
import { FileList } from "~/components/file-list"
import { Sidebar } from "~/components/sidebar"
import { Header } from "~/components/header"
import { mockFolders, mockFiles, mockRecentFiles } from "~/lib/mock-data"

export function DriveUI() {
  const [currentPath, setCurrentPath] = useState<string[]>(["My Drive"])
  const [currentView, setCurrentView] = useState<"my-drive" | "recent" | "starred" | "trash">("my-drive")

  // Filter files based on current path
  const getCurrentFiles = () => {
    if (currentView === "recent") return mockRecentFiles

    // For My Drive view, filter based on the current path
    let pathString = currentPath.join("/")
    if (pathString === "My Drive") pathString = ""

    return mockFiles.filter((file) => file.path === pathString)
  }

  const getCurrentFolders = () => {
    let pathString = currentPath.join("/")
    if (pathString === "My Drive") pathString = ""

    return mockFolders.filter((folder) => folder.path === pathString)
  }

  const navigateToFolder = (folderName: string) => {
    setCurrentPath([...currentPath, folderName])
  }

  const navigateToBreadcrumb = (index: number) => {
    setCurrentPath(currentPath.slice(0, index + 1))
  }

  const changeView = (view: "my-drive" | "recent" | "starred" | "trash") => {
    setCurrentView(view)
    if (view === "my-drive") {
      setCurrentPath(["My Drive"])
    } else {
      setCurrentPath([view.charAt(0).toUpperCase() + view.slice(1)])
    }
  }

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar currentView={currentView} onChangeView={changeView} />
        <main className="flex-1 flex flex-col overflow-hidden">
          <div className="border-b p-4">
            <Breadcrumbs path={currentPath} onNavigate={navigateToBreadcrumb} />
          </div>
          <div className="flex-1 overflow-auto p-6">
            <FileList files={getCurrentFiles()} folders={getCurrentFolders()} onFolderClick={navigateToFolder} />
          </div>
        </main>
      </div>
    </div>
  )
}

