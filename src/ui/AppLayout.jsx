import { Outlet } from 'react-router-dom';
import Header from './Header';
function AppLayout({ children }) {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] grid-cols-[15rem_1fr]">
      <Header />
      {/*<Sidebar />*/}
      {children}
      <div className="bg-secondary-100 p-8 overflow-y-auto">
        <div className="mx-auto max-w-screen-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;

//owner ,admin , freelancer, multi layout
//OWNER => Dashboard ,projects
//freelancer => Dashboard,proposals ,tnx,..
//admin=> Dashboard,projects,proposals,...
