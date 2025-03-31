import { Search, Bell, HelpCircle } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"

export function Header() {
  return (
    <header className="border-b px-6 py-3 flex items-center justify-between sticky top-0 z-10 bg-background">
      <div className="flex items-center gap-2 lg:gap-4 w-full">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search in Drive"
            className="w-full bg-muted/40 pl-8 rounded-full focus-visible:ring-primary/50"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Button variant="ghost" size="icon" className="rounded-full">
          <HelpCircle className="h-5 w-5" />
          <span className="sr-only">Help</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
        <Avatar className="h-8 w-8">
          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}

