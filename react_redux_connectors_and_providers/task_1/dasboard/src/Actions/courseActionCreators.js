import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from "./courseActionTypes";

export function selectCourse(index){
  return { type: SELECT_COURSE, index: index}
}

export function unSelectCourse(index){
  return { type: UNSELECT_COURSE, index: index}
}

export function fetchCourseSuccess() {
  return {
    type: FETCH_COURSE_SUCCESS,
    data: [
      {
        id: 1,
        name: "ES6",
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        credit: 20
      },
      {
        id: 3,
        name: "React",
        credit: 40
      }
    ]
  }  
}

export const dispatchselectCourse = (index) => dispatch(selectCourse(index))
export const dispatchUnSelectCourse = (index) => dispatch(unSelectCourse(index))