require('mofron-comp-pagehdr');
require('mofron-layout-hrzcenter');
require('mofron-layout-padding');
require('mofron-effect-shadow');
require('mofron-effect-backgd');
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @file centerconts.js
	 * @author simpart
	 */

	/**
	 * @class CenterConts
	 * @brief CenterContents Template Class
	 */
	mofron.tmpl.CenterConts = function (_mofron$tmpl$Base) {
	    _inherits(_class, _mofron$tmpl$Base);

	    /**
	     * initialize member
	     *
	     * @param app_nm : (string) application name
	     */
	    function _class(app_nm) {
	        _classCallCheck(this, _class);

	        try {
	            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, app_nm));

	            _this.header = null;
	            _this.conts_pnl = null;
	            _this.conts = new Array();
	        } catch (e) {
	            console.error(e.stack);
	            throw e;
	        }
	        return _this;
	    }

	    _createClass(_class, [{
	        key: 'initTmplConts',
	        value: function initTmplConts(prm) {
	            try {
	                if (null !== prm) {
	                    if ('string' !== typeof prm) {
	                        throw new Error('invalid parameter');
	                    }
	                    this.title(prm);
	                }
	                this.base.addChild(this.getHeader());
	                //this.base.addLayout(new mofron.layout.Padding('top',1));
	                this.getContsPnl();
	                for (var conts_elm in this.conts) {
	                    this.getContsPnl().addChild(conts_elm);
	                }
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'addConts',
	        value: function addConts(cont) {
	            try {
	                if ('object' !== (typeof cont === 'undefined' ? 'undefined' : _typeof(cont))) {
	                    throw new Error('invalid parameter');
	                }
	                this.conts.addChild(cont);
	                if (true === this.base.isRendered()) {
	                    this.getContsPnl().addChild(cont);
	                }
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }

	        /**
	         * get header component
	         */

	    }, {
	        key: 'getHeader',
	        value: function getHeader() {
	            try {
	                if (null !== this.header) {
	                    return this.header;
	                }
	                var ttl = this.title();
	                if (null === ttl) {
	                    ttl = '';
	                }

	                var hdr = this.theme().getComp('Header');
	                if (null === hdr) {
	                    hdr = mofron.comp.PageHeader;
	                }
	                this.header = new hdr(ttl);
	                return this.header;
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'getContsPnl',
	        value: function getContsPnl() {
	            try {
	                if (null !== this.conts_pnl) {
	                    return this.conts_pnl;
	                }

	                var cp_base1 = new mofron.comp.Base();
	                var cp_base2 = new mofron.comp.Base();
	                var cp_main = new mofron.comp.Base();

	                cp_base1.addLayout(new mofron.layout.Padding('top', 1));
	                this.base.addChild(cp_base1);

	                var bg_clr = this.theme().get('Color', 1);
	                if (null === bg_clr) {
	                    bg_clr = new mofron.util.Color(240, 240, 240);
	                }
	                cp_base2.style('background', bg_clr.getStyle());
	                cp_base2.setEffect(new mofron.effect.Backgd());
	                cp_base2.addLayout(new mofron.layout.HrzCenter());
	                cp_base1.addChild(cp_base2);

	                cp_main.setEffect(new mofron.effect.Backgd());
	                cp_main.setEffect(new mofron.effect.Shadow(20));
	                cp_main.style('background', new mofron.util.Color(255, 255, 255).getStyle());
	                cp_base2.addChild(cp_main);

	                this.conts_pnl = cp_main;
	                return this.conts_pnl;
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }

	        //    visible (flg, eff) {
	        //        try {
	        //            if (null === this.header) {
	        //                this.base.addChild(this.getHeader());
	        //                this.getContsPnl();
	        //            }
	        //            
	        //            var bg_clr = this.theme().get('Color',1);
	        //            if (null === bg_clr) {
	        //                bg_clr = new mofron.util.Color(240,240,240);
	        //            }
	        //            this.base.getChild(1).style(
	        //                'background',
	        //                bg_clr.getStyle()
	        //            );
	        //            
	        //            super.visible(flg,eff);
	        //        } catch (e) {
	        //            console.error(e.stack);
	        //            throw e;
	        //        }
	        //    }

	    }]);

	    return _class;
	}(mofron.tmpl.Base);

/***/ }
/******/ ]);
