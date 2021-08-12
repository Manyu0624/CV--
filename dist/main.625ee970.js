// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"epB2":[function(require,module,exports) {
var HTML = document.querySelector('#HTML');
var style = document.querySelector('#style');
var string = ' /*\u4F60\u597D,\u6211\u662F\u4E00\u540D\u524D\u7AEF\u65B0\u4EBA\uFF0C    \n*\u63A5\u4E0B\u6765\u6211\u6F14\u793A\u4E0B\u6211\u7684\u524D\u7AEF\u529F\u5E95\n*\u9996\u5148\u6211\u8981\u51C6\u5907\u4E00\u4E2Adiv*/\n#div1{\nborder:1px solid red;\nwidth:200px;\nheight:200px;\n}\n/*\u63A5\u4E0B\u6765\u662F\u6F14\u793A\u516B\u5366\u56FE\n*\u7B2C\u4E00\u6B65\uFF0C\u5C06\u6B63\u65B9\u5F62\u53D8\u6210\u5706\u5F62**/\n#div1{\nborder-radius:50%;\nbox-shadow:0 0 3px rgba(0,0,0,0.5);\nborder:none;\n}\n/*\u7B2C\u4E8C\u6B65\uFF1A \u4E00\u534A\u9ED1\uFF0C\u4E00\u534A\u767D\n\u91C7\u7528\u80CC\u666F\u6E10\u53D8\u7684\u5F62\u5F0F **/\n#div1{\nbackground: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);}\n/*\u7B2C\u4E09\u6B65\uFF1A\u52A0\u5165\u4E24\u4E2A\u5C0F\u5706\u5F62*/\n#div1::before{\nwidth:100px;\nheight:100px;\ntop:0;\ntransform:translateX(50%);\nborder-radius:50%;\nbackground:black;\nbackground: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);\n\n}\n#div1::after{\nwidth:100px;\nheight:100px;\nbottom:0;\ntransform:translateX(50%);\nborder-radius:50%;\nbackground:white;\nbackground: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 25%);\n}\n\n';
//为什么注释：因为css对body有影响，要先注释掉
var string2 = ""; // 方便对内容加样式，所以重新创建了一个变量
var n = -1;
var step = function step() {
    setTimeout(function () {
        n = n + 1;
        if (string[n] === "\n") {
            // 如果是回车，就不照搬

            string2 += "<br>";
        } else if (string[n] === " ") {
            string2 += "&nbsp;";
        } else {
            string2 += string[n]; // 如果不是回车，就照搬
        }

        // 以上代码可简化 如下
        // string2 += string[n] === "\n" ? "</br>" : string[n];
        HTML.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 100000);
        HTML.scrollTo(0, 10000); //加入滚动条，帮用户自动滚动显示内容；
        // 不能用string2,因为css里面不能出现HTML标签

        if (n < string.length - 1) {
            step();
        }
    }, 0);
};
step();
// 实现style
// setTimeout(() => {
//     style.innerHTML = `
// body {
// color: red;
// }`;
// }, 3000)
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.625ee970.map