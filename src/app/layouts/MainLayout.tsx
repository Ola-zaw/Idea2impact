import { Outlet } from 'react-router';
import { BottomNav } from '../components/BottomNav';

export function MainLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Outlet />
      <BottomNav />
    </div>
  );
}
