(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},backgrounds:{default:"dark"}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(ClientApi.d)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.e)(loader,!1)}));case"parameters":return Object(ClientApi.f)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.b)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"render":return Object(ClientApi.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.f)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./stories/Colors.stories.tsx":"./src/stories/Colors.stories.tsx","./stories/MultiRangeSlider.stories.tsx":"./src/stories/MultiRangeSlider.stories.tsx","./stories/SingleSlider.stories.tsx":"./src/stories/SingleSlider.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/components/SingleRangeSlider.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return SingleRangeSlider}));var _SliderTracks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/SliderTracks.tsx"),_utils_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./src/styles.css"),__webpack_require__("./node_modules/react/jsx-runtime.js")),SingleRangeSlider=function SingleRangeSlider(props){var defaultMinValue=props.defaultMinValue,defaultMaxValue=props.defaultMaxValue,value=props.value,_props$color=props.color,color=void 0===_props$color?"Green":_props$color,_props$showLabels=props.showLabels,showLabels=void 0!==_props$showLabels&&_props$showLabels,_props$step=props.step,step=void 0===_props$step?1:_props$step,_props$disabled=props.disabled,disabled=void 0!==_props$disabled&&_props$disabled,onChange=props.onChange,handleValueChange=function handleValueChange(newValue){newValue>=defaultMinValue&&newValue<=defaultMaxValue&&onChange(newValue)},selectedPercent="".concat(function getSelectedSliderPercent(newValue){return newValue/defaultMaxValue*100}(value),"%"),disabledClass=disabled?"disabled":"";return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input",{type:"range",min:defaultMinValue,max:defaultMaxValue,value:value,step:step,disabled:disabled,onChange:function onChange(event){handleValueChange(parseFloat(event.target.value))},className:"thumb thumb--left ".concat(disabledClass)}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_SliderTracks__WEBPACK_IMPORTED_MODULE_0__.a,{width:selectedPercent,backgroundColor:color,disabled:disabled,children:function renderLabels(){if(showLabels&&void 0!==value)return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"slider__left-value",children:value.toFixed(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__.a)(step))})}()})]})};try{SingleRangeSlider.displayName="SingleRangeSlider",SingleRangeSlider.__docgenInfo={description:"A single slider.",displayName:"SingleRangeSlider",props:{value:{defaultValue:null,description:"The value set on the slider.",name:"value",required:!0,type:{name:"number"}},onChange:{defaultValue:null,description:"Callback function that will be invoked when `value` changes.",name:"onChange",required:!0,type:{name:"(newValue: number) => any"}},defaultMinValue:{defaultValue:null,description:"Minimum value that can be set on the slider.",name:"defaultMinValue",required:!0,type:{name:"number"}},defaultMaxValue:{defaultValue:null,description:"Maximum value that can be set on the slider.",name:"defaultMaxValue",required:!0,type:{name:"number"}},color:{defaultValue:null,description:"Color of the selected slice of the slider. Default to 'Green'.",name:"color",required:!1,type:{name:"enum",value:[{value:'"AliceBlue"'},{value:'"AntiqueWhite"'},{value:'"Aqua"'},{value:'"Aquamarine"'},{value:'"Azure"'},{value:'"Beige"'},{value:'"Bisque"'},{value:'"Black"'},{value:'"BlanchedAlmond"'},{value:'"Blue"'},{value:'"BlueViolet"'},{value:'"Brown"'},{value:'"BurlyWood"'},{value:'"CadetBlue"'},{value:'"Chartreuse"'},{value:'"Chocolate"'},{value:'"Coral"'},{value:'"CornflowerBlue"'},{value:'"Cornsilk"'},{value:'"Crimson"'},{value:'"Cyan"'},{value:'"DarkBlue"'},{value:'"DarkCyan"'},{value:'"DarkGoldenRod"'},{value:'"DarkGrey"'},{value:'"DarkGreen"'},{value:'"DarkKhaki"'},{value:'"DarkMagenta"'},{value:'"DarkOliveGreen"'},{value:'"Darkorange"'},{value:'"DarkOrchid"'},{value:'"DarkRed"'},{value:'"DarkSalmon"'},{value:'"DarkSeaGreen"'},{value:'"DarkSlateBlue"'},{value:'"DarkSlateGrey"'},{value:'"DarkTurquoise"'},{value:'"DarkViolet"'},{value:'"DeepPink"'},{value:'"DeepSkyBlue"'},{value:'"DimGray"'},{value:'"DodgerBlue"'},{value:'"FireBrick"'},{value:'"FloralWhite"'},{value:'"ForestGreen"'},{value:'"Fuchsia"'},{value:'"Gainsboro"'},{value:'"GhostWhite"'},{value:'"Gold"'},{value:'"GoldenRod"'},{value:'"Grey"'},{value:'"Green"'},{value:'"GreenYellow"'},{value:'"HoneyDew"'},{value:'"HotPink"'},{value:'"IndianRed"'},{value:'"Indigo"'},{value:'"Ivory"'},{value:'"Khaki"'},{value:'"Lavender"'},{value:'"LavenderBlush"'},{value:'"LawnGreen"'},{value:'"LemonChiffon"'},{value:'"LightBlue"'},{value:'"LightCoral"'},{value:'"LightCyan"'},{value:'"LightGoldenRodYellow"'},{value:'"LightGrey"'},{value:'"LightGreen"'},{value:'"LightPink"'},{value:'"LightSalmon"'},{value:'"LightSeaGreen"'},{value:'"LightSkyBlue"'},{value:'"LightSlateGrey"'},{value:'"LightSteelBlue"'},{value:'"LightYellow"'},{value:'"Lime"'},{value:'"LimeGreen"'},{value:'"Linen"'},{value:'"Magenta"'},{value:'"Maroon"'},{value:'"MediumAquaMarine"'},{value:'"MediumBlue"'},{value:'"MediumOrchid"'},{value:'"MediumPurple"'},{value:'"MediumSeaGreen"'},{value:'"MediumSlateBlue"'},{value:'"MediumSpringGreen"'},{value:'"MediumTurquoise"'},{value:'"MediumVioletRed"'},{value:'"MidnightBlue"'},{value:'"MintCream"'},{value:'"MistyRose"'},{value:'"Moccasin"'},{value:'"NavajoWhite"'},{value:'"Navy"'},{value:'"OldLace"'},{value:'"Olive"'},{value:'"OliveDrab"'},{value:'"Orange"'},{value:'"OrangeRed"'},{value:'"Orchid"'},{value:'"PaleGoldenRod"'},{value:'"PaleGreen"'},{value:'"PaleTurquoise"'},{value:'"PaleVioletRed"'},{value:'"PapayaWhip"'},{value:'"PeachPuff"'},{value:'"Peru"'},{value:'"Pink"'},{value:'"Plum"'},{value:'"PowderBlue"'},{value:'"Purple"'},{value:'"Red"'},{value:'"RosyBrown"'},{value:'"RoyalBlue"'},{value:'"SaddleBrown"'},{value:'"Salmon"'},{value:'"SandyBrown"'},{value:'"SeaGreen"'},{value:'"SeaShell"'},{value:'"Sienna"'},{value:'"Silver"'},{value:'"SkyBlue"'},{value:'"SlateBlue"'},{value:'"SlateGrey"'},{value:'"Snow"'},{value:'"SpringGreen"'},{value:'"SteelBlue"'},{value:'"Tan"'},{value:'"Teal"'},{value:'"Thistle"'},{value:'"Tomato"'},{value:'"Turquoise"'},{value:'"Violet"'},{value:'"Wheat"'},{value:'"White"'},{value:'"WhiteSmoke"'},{value:'"Yellow"'},{value:'"YellowGreen"'}]}},showLabels:{defaultValue:null,description:"Indicates if minimum/maximum values labels should be shown. Default to `false`.",name:"showLabels",required:!1,type:{name:"boolean"}},step:{defaultValue:null,description:"Step to change slider value. Default to 1.",name:"step",required:!1,type:{name:"number"}},disabled:{defaultValue:null,description:"Disables slider and prevents changes.  Default to `false`.",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SingleRangeSlider.tsx#SingleRangeSlider"]={docgenInfo:SingleRangeSlider.__docgenInfo,name:"SingleRangeSlider",path:"src/components/SingleRangeSlider.tsx#SingleRangeSlider"})}catch(__react_docgen_typescript_loader_error){}try{SingleRangeSliderProps.displayName="SingleRangeSliderProps",SingleRangeSliderProps.__docgenInfo={description:"Component props.",displayName:"SingleRangeSliderProps",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SingleRangeSlider.tsx#SingleRangeSliderProps"]={docgenInfo:SingleRangeSliderProps.__docgenInfo,name:"SingleRangeSliderProps",path:"src/components/SingleRangeSlider.tsx#SingleRangeSliderProps"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/SliderTracks.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return SliderTracks}));var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),SliderTracks=function SliderTracks(props){var disabledClass=props.disabled?"disabled":"";return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"slider",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"slider__track ".concat(disabledClass)}),props.children,Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{left:props.left,width:props.width,backgroundColor:props.backgroundColor},className:"slider__range ".concat(disabledClass)})]})};try{SliderTracks.displayName="SliderTracks",SliderTracks.__docgenInfo={description:"Render Slider track with custom color, left offset and width.",displayName:"SliderTracks",props:{children:{defaultValue:null,description:"Labels component.",name:"children",required:!0,type:{name:"Element"}},left:{defaultValue:null,description:"Left offset.",name:"left",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"Track width.",name:"width",required:!0,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"Track color.",name:"backgroundColor",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"Disabled prop.",name:"disabled",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SliderTracks.tsx#SliderTracks"]={docgenInfo:SliderTracks.__docgenInfo,name:"SliderTracks",path:"src/components/SliderTracks.tsx#SliderTracks"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/Colors.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Colors",(function(){return Colors}));var _home_runner_work_neo_react_semantic_ui_range_neo_react_semantic_ui_range_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_neo_react_semantic_ui_range_neo_react_semantic_ui_range_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),_components_SingleRangeSlider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/SingleRangeSlider.tsx"),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("./src/stories/colors.css"),__webpack_require__("./node_modules/react/jsx-runtime.js"));__webpack_exports__.default={title:"Example/SingleSlider/Colors",component:_components_SingleRangeSlider__WEBPACK_IMPORTED_MODULE_2__.a,subcomponents:{SingleRangeSlider:_components_SingleRangeSlider__WEBPACK_IMPORTED_MODULE_2__.a},parameters:{layout:"centered"}};var Colors=function Colors(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(40),_useState2=Object(_home_runner_work_neo_react_semantic_ui_range_neo_react_semantic_ui_range_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState,2),value=_useState2[0],setValue=_useState2[1];function handleChange(newValue){setValue(newValue)}return["RoyalBlue","Green","BlueViolet","Brown","Orange","Violet","Tomato","DarkMagenta"].map((function(color){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h1",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_SingleRangeSlider__WEBPACK_IMPORTED_MODULE_2__.a,{defaultMinValue:0,defaultMaxValue:100,value:value,color:color,onChange:handleChange},color)},color)}))};Colors.parameters=Object(_home_runner_work_neo_react_semantic_ui_range_neo_react_semantic_ui_range_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"() => {\n  const [value, setValue] = useState<number>(40)\n\n  /**\n   * Handles changes.\n   *\n   * @param newValue - New value.\n   */\n  function handleChange (newValue: number) {\n    setValue(newValue)\n  }\n\n  const colors: RangeColor[] = ['RoyalBlue', 'Green', 'BlueViolet', 'Brown', 'Orange', 'Violet', 'Tomato', 'DarkMagenta']\n  return colors.map((color) => (\n    <h1 key={color}>\n      <SingleRangeSlider\n        key={color}\n        defaultMinValue={0}\n        defaultMaxValue={100}\n        value={value}\n        color={color}\n        onChange={handleChange}\n      />\n    </h1>\n  ))\n}"}},Colors.parameters)},"./src/stories/MultiRangeSlider.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return Basic}));var objectSpread2=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),SliderTracks=__webpack_require__("./src/components/SliderTracks.tsx"),utils=__webpack_require__("./src/utils/utils.ts"),jsx_runtime=(__webpack_require__("./src/styles.css"),__webpack_require__("./node_modules/react/jsx-runtime.js")),MultiRangeSlider_MultiRangeSlider=function MultiRangeSlider(props){var defaultMinValue=props.defaultMinValue,defaultMaxValue=props.defaultMaxValue,_props$step=props.step,step=void 0===_props$step?1:_props$step,minValue=props.minValue,maxValue=props.maxValue,onChange=props.onChange,_props$margin=props.margin,margin=void 0===_props$margin?0:_props$margin,_props$showLabels=props.showLabels,showLabels=void 0!==_props$showLabels&&_props$showLabels,_props$disabled=props.disabled,disabled=void 0!==_props$disabled&&_props$disabled,_props$color=props.color,color=void 0===_props$color?"Green":_props$color,getPercent=function getPercent(value){return Math.round((value-defaultMinValue)/(defaultMaxValue-defaultMinValue)*100)},handleChange=function handleChange(newMinValue,newMaxValue){newMinValue+margin>newMaxValue||newMaxValue-margin<newMinValue||onChange(newMinValue,newMaxValue)},minPercent=getPercent(minValue),maxPercent=getPercent(maxValue),left="".concat(minPercent,"%"),width="".concat(maxPercent-minPercent,"%"),disabledClass=disabled?"disabled":"";return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("input",{type:"range",min:defaultMinValue,max:defaultMaxValue,value:minValue,disabled:disabled,onChange:function onChange(event){handleChange(parseFloat(event.target.value),maxValue)},className:"thumb thumb--left ".concat(disabledClass)}),Object(jsx_runtime.jsx)("input",{type:"range",step:step,min:defaultMinValue,max:defaultMaxValue,value:maxValue,disabled:disabled,onChange:function onChange(event){handleChange(minValue,parseFloat(event.target.value))},className:"thumb thumb--right ".concat(disabledClass)}),Object(jsx_runtime.jsx)(SliderTracks.a,{left:left,width:width,backgroundColor:color,disabled:disabled,children:function renderLabels(){if(showLabels&&void 0!==minValue&&void 0!==maxValue)return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("div",{className:"slider__left-value",children:minValue.toFixed(Object(utils.a)(step))}),Object(jsx_runtime.jsx)("div",{className:"slider__right-value",children:maxValue.toFixed(Object(utils.a)(step))})]})}()})]})};try{MultiRangeSlider_MultiRangeSlider.displayName="MultiRangeSlider",MultiRangeSlider_MultiRangeSlider.__docgenInfo={description:"A slider with a min and max value.",displayName:"MultiRangeSlider",props:{minValue:{defaultValue:null,description:"The minimum value set on the slider.",name:"minValue",required:!0,type:{name:"number"}},maxValue:{defaultValue:null,description:"The maximum value set on the slider.",name:"maxValue",required:!0,type:{name:"number"}},margin:{defaultValue:null,description:"Minimum difference between minimum and maximum values set. Default to 0.",name:"margin",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"Callback function that will be invoked when `minValue` or `maxValue` change.",name:"onChange",required:!0,type:{name:"(newMinValue: number, newMaxValue: number) => any"}},defaultMinValue:{defaultValue:null,description:"Minimum value that can be set on the slider.",name:"defaultMinValue",required:!0,type:{name:"number"}},defaultMaxValue:{defaultValue:null,description:"Maximum value that can be set on the slider.",name:"defaultMaxValue",required:!0,type:{name:"number"}},color:{defaultValue:null,description:"Color of the selected slice of the slider. Default to 'Green'.",name:"color",required:!1,type:{name:"enum",value:[{value:'"AliceBlue"'},{value:'"AntiqueWhite"'},{value:'"Aqua"'},{value:'"Aquamarine"'},{value:'"Azure"'},{value:'"Beige"'},{value:'"Bisque"'},{value:'"Black"'},{value:'"BlanchedAlmond"'},{value:'"Blue"'},{value:'"BlueViolet"'},{value:'"Brown"'},{value:'"BurlyWood"'},{value:'"CadetBlue"'},{value:'"Chartreuse"'},{value:'"Chocolate"'},{value:'"Coral"'},{value:'"CornflowerBlue"'},{value:'"Cornsilk"'},{value:'"Crimson"'},{value:'"Cyan"'},{value:'"DarkBlue"'},{value:'"DarkCyan"'},{value:'"DarkGoldenRod"'},{value:'"DarkGrey"'},{value:'"DarkGreen"'},{value:'"DarkKhaki"'},{value:'"DarkMagenta"'},{value:'"DarkOliveGreen"'},{value:'"Darkorange"'},{value:'"DarkOrchid"'},{value:'"DarkRed"'},{value:'"DarkSalmon"'},{value:'"DarkSeaGreen"'},{value:'"DarkSlateBlue"'},{value:'"DarkSlateGrey"'},{value:'"DarkTurquoise"'},{value:'"DarkViolet"'},{value:'"DeepPink"'},{value:'"DeepSkyBlue"'},{value:'"DimGray"'},{value:'"DodgerBlue"'},{value:'"FireBrick"'},{value:'"FloralWhite"'},{value:'"ForestGreen"'},{value:'"Fuchsia"'},{value:'"Gainsboro"'},{value:'"GhostWhite"'},{value:'"Gold"'},{value:'"GoldenRod"'},{value:'"Grey"'},{value:'"Green"'},{value:'"GreenYellow"'},{value:'"HoneyDew"'},{value:'"HotPink"'},{value:'"IndianRed"'},{value:'"Indigo"'},{value:'"Ivory"'},{value:'"Khaki"'},{value:'"Lavender"'},{value:'"LavenderBlush"'},{value:'"LawnGreen"'},{value:'"LemonChiffon"'},{value:'"LightBlue"'},{value:'"LightCoral"'},{value:'"LightCyan"'},{value:'"LightGoldenRodYellow"'},{value:'"LightGrey"'},{value:'"LightGreen"'},{value:'"LightPink"'},{value:'"LightSalmon"'},{value:'"LightSeaGreen"'},{value:'"LightSkyBlue"'},{value:'"LightSlateGrey"'},{value:'"LightSteelBlue"'},{value:'"LightYellow"'},{value:'"Lime"'},{value:'"LimeGreen"'},{value:'"Linen"'},{value:'"Magenta"'},{value:'"Maroon"'},{value:'"MediumAquaMarine"'},{value:'"MediumBlue"'},{value:'"MediumOrchid"'},{value:'"MediumPurple"'},{value:'"MediumSeaGreen"'},{value:'"MediumSlateBlue"'},{value:'"MediumSpringGreen"'},{value:'"MediumTurquoise"'},{value:'"MediumVioletRed"'},{value:'"MidnightBlue"'},{value:'"MintCream"'},{value:'"MistyRose"'},{value:'"Moccasin"'},{value:'"NavajoWhite"'},{value:'"Navy"'},{value:'"OldLace"'},{value:'"Olive"'},{value:'"OliveDrab"'},{value:'"Orange"'},{value:'"OrangeRed"'},{value:'"Orchid"'},{value:'"PaleGoldenRod"'},{value:'"PaleGreen"'},{value:'"PaleTurquoise"'},{value:'"PaleVioletRed"'},{value:'"PapayaWhip"'},{value:'"PeachPuff"'},{value:'"Peru"'},{value:'"Pink"'},{value:'"Plum"'},{value:'"PowderBlue"'},{value:'"Purple"'},{value:'"Red"'},{value:'"RosyBrown"'},{value:'"RoyalBlue"'},{value:'"SaddleBrown"'},{value:'"Salmon"'},{value:'"SandyBrown"'},{value:'"SeaGreen"'},{value:'"SeaShell"'},{value:'"Sienna"'},{value:'"Silver"'},{value:'"SkyBlue"'},{value:'"SlateBlue"'},{value:'"SlateGrey"'},{value:'"Snow"'},{value:'"SpringGreen"'},{value:'"SteelBlue"'},{value:'"Tan"'},{value:'"Teal"'},{value:'"Thistle"'},{value:'"Tomato"'},{value:'"Turquoise"'},{value:'"Violet"'},{value:'"Wheat"'},{value:'"White"'},{value:'"WhiteSmoke"'},{value:'"Yellow"'},{value:'"YellowGreen"'}]}},showLabels:{defaultValue:null,description:"Indicates if minimum/maximum values labels should be shown. Default to `false`.",name:"showLabels",required:!1,type:{name:"boolean"}},step:{defaultValue:null,description:"Step to change slider value. Default to 1.",name:"step",required:!1,type:{name:"number"}},disabled:{defaultValue:null,description:"Disables slider and prevents changes.  Default to `false`.",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MultiRangeSlider.tsx#MultiRangeSlider"]={docgenInfo:MultiRangeSlider_MultiRangeSlider.__docgenInfo,name:"MultiRangeSlider",path:"src/components/MultiRangeSlider.tsx#MultiRangeSlider"})}catch(__react_docgen_typescript_loader_error){}try{MultiRangeSliderProps.displayName="MultiRangeSliderProps",MultiRangeSliderProps.__docgenInfo={description:"Component props.",displayName:"MultiRangeSliderProps",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MultiRangeSlider.tsx#MultiRangeSliderProps"]={docgenInfo:MultiRangeSliderProps.__docgenInfo,name:"MultiRangeSliderProps",path:"src/components/MultiRangeSlider.tsx#MultiRangeSliderProps"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Example/MultiSlider",component:MultiRangeSlider_MultiRangeSlider,parameters:{layout:"centered"}};var Basic=function Template(args){var _useState=Object(react.useState)(),_useState2=Object(slicedToArray.a)(_useState,2),minValue=_useState2[0],setMinValue=_useState2[1],_useState3=Object(react.useState)(),_useState4=Object(slicedToArray.a)(_useState3,2),maxValue=_useState4[0],setMaxValue=_useState4[1];Object(react.useEffect)((function(){setMinValue(args.minValue)}),[args.minValue]),Object(react.useEffect)((function(){setMaxValue(args.maxValue)}),[args.maxValue]);var props=Object(objectSpread2.a)(Object(objectSpread2.a)({},args),{},{minValue:minValue,maxValue:maxValue,onChange:function handleChange(newActualMin,newActualMax){setMinValue(newActualMin),setMaxValue(newActualMax)}});return Object(jsx_runtime.jsx)(MultiRangeSlider_MultiRangeSlider,Object(objectSpread2.a)({},props))}.bind({});Basic.args={showLabels:!0,step:1,minValue:30,maxValue:70,defaultMinValue:0,defaultMaxValue:100,margin:0,disabled:!1,color:"Orange"},Basic.parameters=Object(objectSpread2.a)({storySource:{source:"(args: MultiRangeSliderProps) => {\n  const [minValue, setMinValue] = useState<number>()\n  const [maxValue, setMaxValue] = useState<number>()\n\n  useEffect(() => {\n    setMinValue(args.minValue)\n  }, [args.minValue])\n\n  useEffect(() => {\n    setMaxValue(args.maxValue)\n  }, [args.maxValue])\n\n  /**\n   * Handles changes.\n   *\n   * @param newActualMin - New min value.\n   * @param newActualMax - New max value.\n   */\n  function handleChange (newActualMin: number, newActualMax: number) {\n    setMinValue(newActualMin)\n    setMaxValue(newActualMax)\n  }\n\n  const props: MultiRangeSliderProps = { ...args, minValue, maxValue, onChange: handleChange }\n  return <MultiRangeSlider {...props} />\n}"}},Basic.parameters)},"./src/stories/SingleSlider.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return Basic}));var _home_runner_work_neo_react_semantic_ui_range_neo_react_semantic_ui_range_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_neo_react_semantic_ui_range_neo_react_semantic_ui_range_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),_components_SingleRangeSlider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/SingleRangeSlider.tsx"),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Example/SingleSlider",component:_components_SingleRangeSlider__WEBPACK_IMPORTED_MODULE_2__.a,parameters:{layout:"centered"}};var Basic=function Template(args){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(),_useState2=Object(_home_runner_work_neo_react_semantic_ui_range_neo_react_semantic_ui_range_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState,2),value=_useState2[0],setValue=_useState2[1];Object(react__WEBPACK_IMPORTED_MODULE_3__.useEffect)((function(){setValue(args.value)}),[args.value]);var props=Object(_home_runner_work_neo_react_semantic_ui_range_neo_react_semantic_ui_range_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_home_runner_work_neo_react_semantic_ui_range_neo_react_semantic_ui_range_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args),{},{value:value,onChange:function handleChange(newValue){setValue(newValue)}});return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_SingleRangeSlider__WEBPACK_IMPORTED_MODULE_2__.a,Object(_home_runner_work_neo_react_semantic_ui_range_neo_react_semantic_ui_range_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},props))}.bind({});Basic.args={showLabels:!0,value:40,step:1,defaultMinValue:0,defaultMaxValue:100,disabled:!1,color:"Salmon"},Basic.parameters=Object(_home_runner_work_neo_react_semantic_ui_range_neo_react_semantic_ui_range_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args: SingleRangeSliderProps) => {\n  const [value, setValue] = useState<number>()\n\n  useEffect(() => {\n    setValue(args.value)\n  }, [args.value])\n\n  /**\n   * Handles changes.\n   *\n   * @param newValue - New value.\n   */\n  function handleChange (newValue: number) {\n    setValue(newValue)\n  }\n\n  const props: SingleRangeSliderProps = { ...args, value, onChange: handleChange }\n  return <SingleRangeSlider {...props} />\n}"}},Basic.parameters)},"./src/stories/colors.css":function(module,exports,__webpack_require__){},"./src/styles.css":function(module,exports,__webpack_require__){},"./src/utils/utils.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return decimalCount}));var decimalCount=function decimalCount(num){var numStr=num.toString();return numStr.includes(".")?numStr.split(".")[1].length:0}},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/esm/preset/argsEnhancers.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);