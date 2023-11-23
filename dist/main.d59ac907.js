"use strict";
(self["webpackChunktodo_app"] = self["webpackChunktodo_app"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tasks.js */ "./src/modules/tasks.js");



const task = (0,_modules_tasks_js__WEBPACK_IMPORTED_MODULE_0__.createTask)('Clean room', 'Clean my room', 'House');
const newtask = (0,_modules_tasks_js__WEBPACK_IMPORTED_MODULE_0__.createTask)('wash car', 'wash the Palisade', 'Car');
const task2 = (0,_modules_tasks_js__WEBPACK_IMPORTED_MODULE_0__.createTask)('clean car', 'do inside', 'Car');
const project = [task, newtask, task2];
console.log(project);

const projects = (0,_modules_tasks_js__WEBPACK_IMPORTED_MODULE_0__.getProjects)(project);
console.log(projects);




/***/ }),

/***/ "./src/modules/tasks.js":
/*!******************************!*\
  !*** ./src/modules/tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   getProjects: () => (/* binding */ getProjects)
/* harmony export */ });
function createTask(title, description, project, comleted= false) {
  const task = {
        title,
        description,
        project,
        comleted,
    };
    return task;
};

function getProjects(arr) {
  const projects = arr.map((task) => task.project);
  return projects.filter((project, index) => projects.indexOf(project) === index);
};





/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kNTlhYzkwNy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEyRDs7O0FBRzNELGFBQWEsNkRBQVU7QUFDdkIsZ0JBQWdCLDZEQUFVO0FBQzFCLGNBQWMsNkRBQVU7QUFDeEI7QUFDQTs7QUFFQSxpQkFBaUIsOERBQVc7QUFDNUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2FwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvX2FwcC8uL3NyYy9tb2R1bGVzL3Rhc2tzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlVGFzaywgZ2V0UHJvamVjdHN9IGZyb20gXCIuL21vZHVsZXMvdGFza3MuanNcIjtcblxuXG5jb25zdCB0YXNrID0gY3JlYXRlVGFzaygnQ2xlYW4gcm9vbScsICdDbGVhbiBteSByb29tJywgJ0hvdXNlJyk7XG5jb25zdCBuZXd0YXNrID0gY3JlYXRlVGFzaygnd2FzaCBjYXInLCAnd2FzaCB0aGUgUGFsaXNhZGUnLCAnQ2FyJyk7XG5jb25zdCB0YXNrMiA9IGNyZWF0ZVRhc2soJ2NsZWFuIGNhcicsICdkbyBpbnNpZGUnLCAnQ2FyJyk7XG5jb25zdCBwcm9qZWN0ID0gW3Rhc2ssIG5ld3Rhc2ssIHRhc2syXTtcbmNvbnNvbGUubG9nKHByb2plY3QpO1xuXG5jb25zdCBwcm9qZWN0cyA9IGdldFByb2plY3RzKHByb2plY3QpO1xuY29uc29sZS5sb2cocHJvamVjdHMpO1xuXG5cbiIsImZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBwcm9qZWN0LCBjb21sZXRlZD0gZmFsc2UpIHtcbiAgY29uc3QgdGFzayA9IHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBwcm9qZWN0LFxuICAgICAgICBjb21sZXRlZCxcbiAgICB9O1xuICAgIHJldHVybiB0YXNrO1xufTtcblxuZnVuY3Rpb24gZ2V0UHJvamVjdHMoYXJyKSB7XG4gIGNvbnN0IHByb2plY3RzID0gYXJyLm1hcCgodGFzaykgPT4gdGFzay5wcm9qZWN0KTtcbiAgcmV0dXJuIHByb2plY3RzLmZpbHRlcigocHJvamVjdCwgaW5kZXgpID0+IHByb2plY3RzLmluZGV4T2YocHJvamVjdCkgPT09IGluZGV4KTtcbn07XG5cbmV4cG9ydCB7Y3JlYXRlVGFzaywgZ2V0UHJvamVjdHN9O1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=