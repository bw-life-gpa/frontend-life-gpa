// import {  } from '../actions';

//  Category Example from API  
//    { "id": 6,
//     "categoryTitle": "Physical Fitness",
//     "color": "red",
//     "habitId": 1
// },  

//  Habit Example from API  
// {
//     "id": 1,
//     "habitTitle": "Run 10 miles",
//     "completed": 0,
//     "completionPoints": 0,
//     "userId": 1,
//     "created_at": "2019-03-12 19:59:15"
// },
const initialState = {
    GPA: '75%',
    categories: [
        {"id": 1,
        "categoryTitle": 'Health',
        "color": '#00ef97',
        gpa: '30%'},
        {"id": 2,
        "categoryTitle": 'House',
        "color": '#b142e2',
        gpa: '40%'},
        {"id": 3,
        "categoryTitle": 'Work',
        "color": '#ff4241',
        gpa: '50%'},
    ],
    habits: [
        {   "id": 2,
            "habitTitle": "Run 10km",
            "category": "Health",
            "completed": false,
            "completionPoints": 1,
            "userId": 2,
            "created_at": "2019-03-10 19:59:15"},
        {   "id": 3,
            "habitTitle": 'Clean Garage',
            "category": "House",
            "completed": false,
            "completionPoints": 0,
            "userId": 2,
            "created_at": "2019-03-09 19:59:15"},
        {   "id": 4,
            "habitTitle": "Make Money",
            "category": "Work",
            "completed": false,
            "completionPoints": 0,
            "userId": 2,
            "created_at": "2019-03-08 19:59:15"},
        {   "id": 5,
            "habitTitle": "Workout",
            "category": "Health",
            "completed": false,
            "completionPoints": 2,
            "userId": 2,
            "created_at": "2019-03-08 19:59:15"},
        {   "id": 6,
            "habitTitle": 'Make Dinner',
            "category": "House",
            "completed": false,
            "completionPoints": 3,
            "userId": 2,
            "created_at": "2019-03-09 19:59:15"},
        {   "id": 7,
            "habitTitle": "File Documents",
            "category": "Work",
            "completed": false,
            "completionPoints": 2,
            "userId": 2,
            "created_at": "2019-03-09 19:59:15"},
    ],
    fetchingCategories: false
  };
  
  
export default (state = initialState, action) => {
    switch (action.type) {
  
      default:
        return state;
    }
  };

// 