// Keep in sync with scss/_breakpoints.scss
export default {
  mobile: 480,
  phablet: 600,
  tablet: 768,
  desktop: 960,
  wide: 1280,
  xl: 1600,
  hd: 1920,
  twocolumns: 560,
  fourcolumns: 1100,
};

// Ideally we just import from scss, but parcel doesn't support this, so now this needs to be done twice :(
// import breakpoints from '../scss/_breakpoints.scss';

// export default {
// 	mobile: parseInt(breakpoints.mobile),
// 	phablet: parseInt(breakpoints.phablet),
// 	tablet: parseInt(breakpoints.tablet),
// 	desktop: parseInt(breakpoints.desktop),
// 	wide: parseInt(breakpoints.wide),
// 	xl: parseInt(breakpoints.xl),
// 	hd: parseInt(breakpoints.hd),
// 	twocolumns: parseInt(breakpoints.twocolumns),
// 	fourcolumns: parseInt(breakpoints.fourcolumns)
// };
