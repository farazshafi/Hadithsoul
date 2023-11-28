import React from 'react';

const ScrollToTopButton = () => {

  const handleScroll = () => {
    const scrollThreshold = 200;  // Adjust this value as needed

    if (window.scrollY > scrollThreshold) {
    } else {
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={"scroll-to-top-button"}
    >
      <i className="fa fa-chevron-up" aria-hidden="true"></i>
    </button>
  );
};

export default ScrollToTopButton;
