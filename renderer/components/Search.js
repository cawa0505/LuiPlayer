var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n#search {\n  position: absolute;\n  width: 100%;\n  height: 50px;\n  z-index: 1000;\n}\n#search .search-icon {\n  top: 14px;\n  left: 15px;\n  position: absolute;\n  color: #fff;\n}\n\n#search input {\n  text-overflow: ellipsis;\n  width: 70%;\n  padding-left: 50px;\n  height: 100%;\n  background: transparent;\n  font-size: 1.2em;\n  border: none;\n  color: #fff;\n  font-family: Roboto;\n}\n#search input:focus {\n  outline-offset: 0;\n  outline: none;\n}\n")

















































module.exports = {
  name: 'search',
  props: ['queryTrack', 'isLoading'],
  methods: {
    searchTrack() {
      this.$emit('searchTrack', this.queryTrack);
    }
  }
}

if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div id=\"search\" >\n  <i class=\"material-icons search-icon\">search</i>\n  <input v-model=\"queryTrack\" @keyup.enter=\"searchTrack\">\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n#search {\n  position: absolute;\n  width: 100%;\n  height: 50px;\n  z-index: 1000;\n}\n#search .search-icon {\n  top: 14px;\n  left: 15px;\n  position: absolute;\n  color: #fff;\n}\n\n#search input {\n  text-overflow: ellipsis;\n  width: 70%;\n  padding-left: 50px;\n  height: 100%;\n  background: transparent;\n  font-size: 1.2em;\n  border: none;\n  color: #fff;\n  font-family: Roboto;\n}\n#search input:focus {\n  outline-offset: 0;\n  outline: none;\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-7a6ca14a", module.exports)
  } else {
    hotAPI.update("_v-7a6ca14a", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}