const base = {
  mainTextFontWeight: '500',
  listItemBcgColor: 'rgba(157, 153, 153, 0.253)',
  backdropColor: 'rgba(0, 0, 0, 0.2)',
  hoverTransition: '300ms',
  hoverTimeFunction: 'linear',
  animationDuration: '500ms',
  animationTimeFunction: `linear`,
};

export const light = {
  ...base,
  name: 'light',
  gradDark: 'hsl(144, 100%, 89%)',
  gradLight: 'hsl(42, 94%, 76%)',
  textColor: '#000',
  iconColor: '#f8c350',
  bgIconColor: '#5481d392',
  bgElementColor: '#60D0CA',
  bgHeader: '#f5e170',
  elementColor: '#fff',
  bgElementHoverColor: '#50aaa6',
  boxShadow: ' 0px 5px 10px 2px rgba(34, 60, 80, 0.2)',
};

export const dark = {
  ...light,
  name: 'dark',
  gradDark: 'rgba(31,24,17,1)',
  gradLight: 'rgba(78,71,67,1)',
  textColor: '#fff',
  iconColor: '#8f8f8f',
  bgIconColor: '#5f5e5a',
  bgElementColor: '#8c6fcf',
  bgHeader: '#6d6d6b',
  bgElementHoverColor: '#715ba7',
};
