import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { StyledMain } from './SharedLayout.styled';
import SideBar from '../SideBar/SideBar';
import { Toaster } from 'react-hot-toast';
// import { Loader } from './Loader/Loader';

const SharedLayout = () => {
  return (
    <StyledMain>
      <SideBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            // color: 'var(--toast-main-color)',
            // background: 'var(--toast-background-color)',
            // overflow: 'hidden',
          },
        }}
      />
    </StyledMain>
  );
};

export default SharedLayout;
