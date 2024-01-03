import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <>
      <div className='container error_maindiv pt-5'>
        <div className='row error_div'>
          <span>404</span>
          <span>Page Not Found</span>
        </div>
          <Link  to='/' className='btn pulse m-5 ps-5 pe-5'>
            Go Back Home
          </Link>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Page404;
