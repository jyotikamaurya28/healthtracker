import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0 w-full">
          <header className="h-14 flex items-center border-b border-border/50 bg-card/50 backdrop-blur-sm px-4 sticky top-0 z-10">
            <SidebarTrigger className="mr-4" />
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">
                AI Disease Prediction System
              </span>
            </div>
          </header>
          <main className="flex-1 overflow-auto w-full">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}