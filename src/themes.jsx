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
  gradDark: '#e3f8f1',
  gradLight: '#ecf881',
  textColor: '#000',
  iconColor: '#f8c350',
  bgIconColor: '#5ebaf0ac',
  bgElementColor: '#60d09c',
  modalBgColor: '#f0f5f3',
  bgHeader: '#d9e092',
  bgSearchBar: '#4eadb4',
  bgCastCard: '#bbc4c58d',
  elementColor: '#fff',
  bgElementHoverColor: '#50aaa6',
  boxShadow: ' 0px 5px 10px 2px rgba(34, 60, 80, 0.2)',
};

export const dark = {
  ...light,
  name: 'dark',
  gradDark: 'rgba(31,24,17,1)',
  gradLight: 'rgba(78,71,67,1)',
  textColor: '#ffffffb5',
  iconColor: '#8f8f8f',
  bgIconColor: '#5f5e5a',
  bgElementColor: '#8c6fcf',
  modalBgColor: '#6c6d6d',
  bgHeader: '#6d6d6b',
  bgCastCard: '#8f8f8f',
  bgSearchBar: '#8c6fcf',
  bgElementHoverColor: '#715ba7',
};
