// Importing SideNav component and making it accessible to all the child routes of dashboard.
import SideNav from '@/app/ui/dashboard/sidenav';
// Children prop is passed to the Layout component which is a ReactNode type.
// Includes page files within dashboard folder by default.
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}