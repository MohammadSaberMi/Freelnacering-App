import { HiCollection, HiHome } from 'react-icons/hi';
import AppLayout from '../../ui/AppLayout';
import CustomNavLink from '../../ui/CustomNavlink';
import Sidebar from '../../ui/Sidebar';

function OwnerLayout() {
  return (
    <div>
      <AppLayout>
        <Sidebar>
          <CustomNavLink to="dashboard">
            <HiHome />
            <span>خانه</span>
          </CustomNavLink>
          <CustomNavLink to="projects">
            <HiCollection />
            <span>پروژه ها</span>
          </CustomNavLink>
        </Sidebar>
      </AppLayout>
    </div>
  );
}

export default OwnerLayout;
