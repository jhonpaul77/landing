"use strict";
exports.id = 406;
exports.ids = [406];
exports.modules = {

/***/ 9406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App_FeatureSliderTwo)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__(1665);
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);
// EXTERNAL MODULE: ./src/common/components/Box/index.js
var Box = __webpack_require__(7994);
// EXTERNAL MODULE: ./src/common/components/Text/index.js
var Text = __webpack_require__(9397);
// EXTERNAL MODULE: ./src/common/components/Heading/index.js
var Heading = __webpack_require__(4271);
// EXTERNAL MODULE: ./src/common/components/NextImage/index.js
var NextImage = __webpack_require__(9100);
// EXTERNAL MODULE: ./src/common/components/FeatureBlock/index.js + 1 modules
var FeatureBlock = __webpack_require__(3876);
// EXTERNAL MODULE: ./src/common/assets/image/app/6.svg
var _6 = __webpack_require__(2568);
// EXTERNAL MODULE: ./src/common/assets/image/app/1.svg
var _1 = __webpack_require__(8087);
// EXTERNAL MODULE: ./src/common/assets/image/app/2.svg
var _2 = __webpack_require__(1642);
// EXTERNAL MODULE: ./src/common/assets/image/app/3.svg
var _3 = __webpack_require__(7445);
// EXTERNAL MODULE: ./src/common/assets/image/app/4.svg
var _4 = __webpack_require__(2660);
// EXTERNAL MODULE: ./src/common/assets/image/app/5.svg
var _5 = __webpack_require__(5528);
;// CONCATENATED MODULE: ./src/common/data/App/FeatureSliderTwo/index.js






const data = {
  features: [{
    id: 1,
    image: _6/* default */.Z,
    title: 'Super Performance'
  }, {
    id: 2,
    image: _1/* default */.Z,
    title: 'Search Optimization'
  }, {
    id: 3,
    image: _2/* default */.Z,
    title: 'Customer Support'
  }, {
    id: 4,
    image: _3/* default */.Z,
    title: '100% Response Time'
  }, {
    id: 5,
    image: _4/* default */.Z,
    title: 'Maintaining Milestones'
  }, {
    id: 6,
    image: _5/* default */.Z,
    title: 'Organised Code'
  }]
};
/* harmony default export */ const FeatureSliderTwo = (data);
// EXTERNAL MODULE: ./src/common/components/UI/Container/index.js + 1 modules
var Container = __webpack_require__(6945);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/containers/App/FeatureSliderTwo/featureSliderTwo.style.js

const FeatureSectionTwoWrapper = external_styled_components_default().section.withConfig({
  displayName: "featureSliderTwostyle__FeatureSectionTwoWrapper",
  componentId: "sc-1fi0qka-0"
})(["padding:80px 0 160px;@media (max-width:1440px){padding:40px 0 50px;}@media screen and (max-width:1100px) and (min-width:992px){padding:140px 0 60px;}@media (max-width:991px){padding:60px 0 60px;}@media (max-width:767px){padding-top:60px;}"]);
/* harmony default export */ const featureSliderTwo_style = (FeatureSectionTwoWrapper);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/containers/App/FeatureSliderTwo/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const FeatureSection = ({
  row,
  col,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  featureTitle,
  iconStyle,
  contentStyle,
  blockWrapperStyle
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(featureSliderTwo_style, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Box/* default */.Z, _objectSpread(_objectSpread({}, sectionHeader), {}, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Text/* default */.Z, _objectSpread({}, sectionSubTitle)), /*#__PURE__*/jsx_runtime_.jsx(Heading/* default */.Z, _objectSpread({}, sectionTitle))]
      })), /*#__PURE__*/jsx_runtime_.jsx(Box/* default */.Z, _objectSpread(_objectSpread({
        className: "row"
      }, row), {}, {
        children: FeatureSliderTwo.features.map((feature, index) => /*#__PURE__*/(0,external_react_.createElement)(Box/* default */.Z, _objectSpread(_objectSpread({
          className: "col"
        }, col), {}, {
          key: index
        }), /*#__PURE__*/jsx_runtime_.jsx((Fade_default()), {
          bottom: true,
          delay: index * 120,
          children: /*#__PURE__*/jsx_runtime_.jsx(FeatureBlock/* default */.Z, {
            icon: /*#__PURE__*/jsx_runtime_.jsx(NextImage/* default */.Z, {
              src: feature.image,
              alt: "Demo Image"
            }),
            wrapperStyle: blockWrapperStyle,
            iconStyle: iconStyle,
            contentStyle: contentStyle,
            title: /*#__PURE__*/jsx_runtime_.jsx(Heading/* default */.Z, _objectSpread({
              content: feature.title
            }, featureTitle))
          })
        })))
      }))]
    })
  });
}; // FeatureSection style props


// FeatureSection default style
FeatureSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['56px', '56px']
  },
  // sub section default style
  sectionSubTitle: {
    content: 'KEY FEATURES',
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.13em',
    fontWeight: '700',
    color: '#1a73e8',
    mb: '10px'
  },
  // section title default style
  sectionTitle: {
    content: 'Key Features Of our App',
    textAlign: 'center',
    fontSize: ['20px', '24px', '24px', '24px', '30px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0'
  },
  // feature row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap'
  },
  // feature col default style
  col: {
    width: [1 / 2, 1 / 2, 1 / 3, 1 / 3, 1 / 3]
  },
  // feature block wrapper default style
  blockWrapperStyle: {
    p: ['10px', '20px', '20px', '40px']
  },
  // feature icon default style
  iconStyle: {
    width: '75px',
    height: '75px',
    m: '0 auto',
    borderRadius: '50%',
    bg: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '32px',
    color: '#29cf8a',
    overflow: 'hidden',
    mb: '15px'
  },
  // feature content default style
  contentStyle: {
    textAlign: 'center'
  },
  // feature title default style
  featureTitle: {
    fontSize: ['16px', '18px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    mb: '20px',
    letterSpacing: '-0.020em'
  }
};
/* harmony default export */ const App_FeatureSliderTwo = (FeatureSection);

/***/ }),

/***/ 8087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/1.09891087.svg","height":89,"width":89});

/***/ }),

/***/ 1642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/2.e3301ad9.svg","height":89,"width":89});

/***/ }),

/***/ 7445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/3.7c94b233.svg","height":89,"width":89});

/***/ }),

/***/ 2660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/4.531f8164.svg","height":89,"width":89});

/***/ }),

/***/ 5528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/5.cb75e1cc.svg","height":89,"width":89});

/***/ }),

/***/ 2568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/6.7ae32fd9.svg","height":89,"width":89});

/***/ })

};
;