export const textVariants = {
  open: { opacity: 1, y: 0, transition: { delay: 0.5 } },
  closed: { opacity: 0, y: '50%' },
  exit: { opacity: 0, y: 0, transition: { duration: 0.3, delay: 0.3 } },
};

export const modalVariants = {
  open: { opacity: 1, scale: 1.0, x: '-50%', y: '-50%' },
  closed: { opacity: 0, scale: 0.7, x: '-50%', y: '-50%' },
};

export const pageVariants = {
  open: { opacity: 1, height: '100%' },
  closed: { opacity: 0, height: 0 },
  exit: {
    y: window.innerHeight,
    opacity: 0,
    transition: { duration: 0.3, delay: 0.4 },
  },
};

export const pageInfoVariants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};
