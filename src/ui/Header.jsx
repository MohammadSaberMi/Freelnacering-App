//import useUser from '../features/authentication/useUser';

import UserAvatar from '../features/authentication/UserAvatar';
import useUser from '../features/authentication/useUser';
import HeaderMenu from './HeaderMenu';
import App from './../App';

function Header() {
  //const { data } = useUser();
  //console.log(data);
  const { isLoading, user } = useUser();

  return (
    <div className="bg-secondary-0 py-4 px-8 border-b border-secondery-200">
      <div
        className={`container xl:max-w-screen-lg flex items-center justify-end gap-x-8 *:first-letterfirst-line:App
    ${isLoading ? 'blur-sm opacity-50' : ''}
    `}
      >
        <UserAvatar />
        <HeaderMenu />
      </div>
    </div>
  );
}

export default Header;
