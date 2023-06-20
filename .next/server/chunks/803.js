"use strict";
exports.id = 803;
exports.ids = [803];
exports.modules = {

/***/ 8803:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App_FeatureSlider)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-image-gallery"
var external_react_image_gallery_ = __webpack_require__(9585);
var external_react_image_gallery_default = /*#__PURE__*/__webpack_require__.n(external_react_image_gallery_);
// EXTERNAL MODULE: ./src/common/components/Box/index.js
var Box = __webpack_require__(7994);
// EXTERNAL MODULE: ./src/common/components/Text/index.js
var Text = __webpack_require__(9397);
// EXTERNAL MODULE: ./src/common/components/Heading/index.js
var Heading = __webpack_require__(4271);
// EXTERNAL MODULE: ./src/common/components/UI/Container/index.js + 1 modules
var Container = __webpack_require__(6945);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/common/assets/image/app/iphone-mockup.png
/* harmony default export */ const iphone_mockup = ({"src":"/_next/static/media/iphone-mockup.544dea41.png","height":768,"width":382,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAYAAADeM14FAAAAWElEQVR42i3H0QnAIAyE4ZvEPqqItY0l1LiF3aTdH5pADg6+HyLylFI+/TunLIwhB3zqBhFhb/W8wczkbe4gotPb3FFrJW/zhZxz9TY3xBhXCNuubynF9QOothAPy8ILNwAAAABJRU5ErkJggg==","blurWidth":4,"blurHeight":8});
;// CONCATENATED MODULE: ./src/containers/App/FeatureSlider/featureSlider.style.js


const FeatureSliderWrapper = external_styled_components_default().div.withConfig({
  displayName: "featureSliderstyle__FeatureSliderWrapper",
  componentId: "sc-15sepq6-0"
})(["position:relative;padding-top:200px;@media (max-width:1440px){padding-top:140px;}.FeatureSliderInner{span:nth-child(1){position:absolute;display:block;width:5%;padding-bottom:5%;border-radius:50%;top:60%;left:50%;opacity:0;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);animation:pulsei 4.2s ease-out infinite;backface-visibility:hidden;pointer-events:none;}span:nth-child(2){content:'';position:absolute;display:block;width:5%;padding-bottom:5%;border-radius:50%;top:60%;left:50%;opacity:0;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);animation:pulsei 4.2s ease-out infinite;backface-visibility:hidden;pointer-events:none;animation-delay:1s;}span:nth-child(3){content:'';position:absolute;display:block;width:5%;padding-bottom:5%;border-radius:50%;top:60%;left:50%;opacity:0;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);animation:pulsei 4.2s ease-out infinite;backface-visibility:hidden;pointer-events:none;animation-delay:2s;}}.FeatureSlider{padding-top:200px;padding-bottom:100px;position:relative;.image-gallery{position:relative;z-index:2;}@keyframes pulsei{0%{transform:translateX(-50%) translateY(-50%) translateZ(0) scale(1);border:1px solid rgba(0,0,0,0.5);opacity:1;width:5%;padding-bottom:5%;}100%{transform:translateX(-50%) translateY(-50%) translateZ(0) scale(1);opacity:0;width:67%;border:1px solid rgba(0,0,0,0.5);padding-bottom:67%;}}.image-gallery-slide-wrapper{width:375px;margin-left:auto;margin-right:auto;position:relative;height:759px;&::before{content:'';background-image:url(", ");position:absolute;width:100%;height:100%;top:0;left:0;z-index:1;background-repeat:no-repeat;background-size:contain;}&:after{content:'';width:calc(100% - 20px);height:calc(100% - 20px);top:50%;left:50%;transform:translate(-50%,-50%);box-shadow:0 0 68px rgba(0,0,0,1);display:block;position:absolute;border-radius:50px;}.image-gallery-swipe{padding:19px 24px 22px 23px;overflow:hidden;.image-gallery-slides{.image-gallery-slide{.image-gallery-image{max-height:calc(100% - 23px);}}}}}.image-gallery-thumbnails-wrapper{position:static;.image-gallery-thumbnails-container{position:absolute;width:100%;height:100%;z-index:1;top:0;left:0;.image-gallery-thumbnail{border:0;width:125px;.image-gallery-thumbnail-inner{outline:none;&:focus{outline:none;}}img{transition:all 0.35s ease;width:100px;}&:nth-child(1){position:absolute;top:-80px;left:16.666%;}&:nth-child(2){position:absolute;top:-80px;right:16.666%;}&:nth-child(3){position:absolute;top:50%;right:0;transform:translateY(-50%);}&:nth-child(4){position:absolute;bottom:-120px;right:16.666%;}&:nth-child(5){position:absolute;bottom:-120px;left:16.666%;}&:nth-child(6){position:absolute;top:50%;left:0;transform:translateY(-50%);}.image-gallery-thumbnail-label{position:relative;margin-top:10px;font-size:19px;line-height:24px;letter-spacing:-0.01em;color:#0f2137;font-family:'Open sans';top:0;text-shadow:none;transform:none;white-space:normal;width:100%;}&.active{border:0;.image-gallery-thumbnail-label{margin-top:30px;}img{transition:all 0.35s ease;transform:scale(1.4);border:0;}}}}}.image-gallery-bullets{bottom:auto;margin:0;position:absolute;width:100%;z-index:4;top:43%;right:-65px;left:auto;display:flex;justify-content:flex-end;.image-gallery-bullets-container{margin:0;padding:0;text-align:center;display:flex;flex-direction:column;width:32px;.image-gallery-bullet{appearance:none;border-radius:70px;cursor:pointer;display:inline-block;outline:none;width:19px;height:4px;background:rgb(220,226,231);border:0;box-shadow:none;padding:0;margin:0;margin-bottom:10px;transition:all 0.3s ease;&.active{background-color:rgb(26,115,232);width:32px;height:4px;}}}}}"], iphone_mockup?.src);
/* harmony default export */ const featureSlider_style = (FeatureSliderWrapper);
;// CONCATENATED MODULE: ./src/common/assets/image/app/slide-2.png
/* harmony default export */ const slide_2 = ({"src":"/_next/static/media/slide-2.9fe619cc.png","height":812,"width":375,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAAAAAD7WAHZAAAAIklEQVR42mPYvXv3bgYwsWfv3j0Mu7dt2w0iIFyoxJ7duwHTHhdbDcopIwAAAABJRU5ErkJggg==","blurWidth":4,"blurHeight":8});
;// CONCATENATED MODULE: ./src/common/assets/image/app/slide-1.png
/* harmony default export */ const slide_1 = ({"src":"/_next/static/media/slide-1.9fe619cc.png","height":812,"width":375,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAAAAAD7WAHZAAAAIklEQVR42mPYvXv3bgYwsWfv3j0Mu7dt2w0iIFyoxJ7duwHTHhdbDcopIwAAAABJRU5ErkJggg==","blurWidth":4,"blurHeight":8});
;// CONCATENATED MODULE: ./src/common/assets/image/app/slide-3.png
/* harmony default export */ const slide_3 = ({"src":"/_next/static/media/slide-3.de2a411e.png","height":3248,"width":1500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAAAAAD7WAHZAAAAHElEQVR42mPYAwQMu4GAAcLavn03hECS2L1nDwDTtBdg3IjQegAAAABJRU5ErkJggg==","blurWidth":4,"blurHeight":8});
;// CONCATENATED MODULE: ./src/common/assets/image/app/slide-4.png
/* harmony default export */ const slide_4 = ({"src":"/_next/static/media/slide-4.a7864f3b.png","height":2436,"width":1125,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAAAAAD7WAHZAAAAHklEQVR42mPYAwQMu4GAAcLasX03w+7t20HcvUgSANPaF2MqufRYAAAAAElFTkSuQmCC","blurWidth":4,"blurHeight":8});
;// CONCATENATED MODULE: ./src/common/assets/image/app/slide-5.png
/* harmony default export */ const slide_5 = ({"src":"/_next/static/media/slide-5.a7864f3b.png","height":2436,"width":1125,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAAAAAD7WAHZAAAAHklEQVR42mPYAwQMu4GAAcLasX03w+7t20HcvUgSANPaF2MqufRYAAAAAElFTkSuQmCC","blurWidth":4,"blurHeight":8});
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
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/containers/App/FeatureSlider/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















 // import DomainSection from '../container/Hosting/Domain';



const FeatureSlider_images = [{
  original: `${slide_2?.src}`,
  thumbnail: `${_6/* default */.Z?.src}`,
  thumbnailLabel: 'Super Performance',
  originalAlt: 'slide one',
  thumbnailAlt: 'thumb one'
}, {
  original: `${slide_1?.src}`,
  thumbnail: `${_1/* default */.Z?.src}`,
  thumbnailLabel: 'Search optimization',
  originalAlt: 'slide two',
  thumbnailAlt: 'thumb two'
}, {
  original: `${slide_3?.src}`,
  thumbnail: `${_2/* default */.Z?.src}`,
  thumbnailLabel: 'Customer Support',
  originalAlt: 'slide three',
  thumbnailAlt: 'thumb three'
}, {
  original: `${slide_1?.src}`,
  thumbnail: `${_3/* default */.Z?.src}`,
  thumbnailLabel: '100% response time',
  originalAlt: 'slide four',
  thumbnailAlt: 'thumb four'
}, {
  original: `${slide_4?.src}`,
  thumbnail: `${_4/* default */.Z?.src}`,
  thumbnailLabel: 'Maintaining Milestones',
  originalAlt: 'slide five',
  thumbnailAlt: 'thumb five'
}, {
  original: `${slide_5?.src}`,
  thumbnail: `${_5/* default */.Z?.src}`,
  thumbnailLabel: 'Organized Code',
  originalAlt: 'slide six',
  thumbnailAlt: 'thumb six'
}];

const FeatureSlider = ({
  sectionSubTitle,
  sectionTitle,
  sectionHeader
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(featureSlider_style, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "FeatureSliderInner",
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        children: " "
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: " "
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: " "
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container/* default */.Z, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Box/* default */.Z, _objectSpread(_objectSpread({}, sectionHeader), {}, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Text/* default */.Z, _objectSpread({}, sectionSubTitle)), /*#__PURE__*/jsx_runtime_.jsx(Heading/* default */.Z, _objectSpread({}, sectionTitle))]
      })), /*#__PURE__*/jsx_runtime_.jsx(Box/* default */.Z, {
        className: "FeatureSlider",
        children: /*#__PURE__*/jsx_runtime_.jsx((external_react_image_gallery_default()), {
          items: FeatureSlider_images,
          className: "Slider-img",
          showPlayButton: false,
          showFullscreenButton: false,
          showNav: false,
          showBullets: true,
          autoPlay: true
        })
      })]
    })]
  });
}; // FeatureSlider style props


// FeatureSlider default style
FeatureSlider.defaultProps = {
  sectionHeader: {},
  sectionSubTitle: {
    content: 'WHY CHOOSE US',
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
    content: 'Key Features of Our App',
    textAlign: 'center',
    fontSize: ['20px', '24px', '24px', '24px', '30px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0'
  }
};
/* harmony default export */ const App_FeatureSlider = (FeatureSlider);

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