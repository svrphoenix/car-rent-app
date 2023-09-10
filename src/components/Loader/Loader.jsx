import { PropTypes } from 'prop-types';
import { CirclesWithBar } from 'react-loader-spinner';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

const loaderRoot = document.querySelector('#loader-root');

export const Loader = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return createPortal(
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        backgroundImage: 'rgba(18, 20, 23, 0.5)',
        backdropFilter: 'blur(1px)',
      }}
    >
      <CirclesWithBar
        visible={true}
        height={viewportWidth < 768 ? '90' : '120'}
        width={viewportWidth < 768 ? '90' : '120'}
        color="#3470FF"
        wrapperStyle={{}}
        wrapperClass=""
        outerCircleColor=""
        innerCircleColor=""
        barColor="#0B44CD"
        ariaLabel="blocks-loading"
      />
    </div>,
    loaderRoot
  );
};

Loader.propTypes = {
  size: PropTypes.string,
};
