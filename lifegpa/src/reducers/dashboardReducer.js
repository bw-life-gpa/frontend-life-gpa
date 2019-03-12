// import {  } from '../actions';
  
const initialState = {
    GPA: '75%',
    categories: [
        {name: 'Health',
        color: '#00ef97',
        gpa: '30%'},
        {name: 'House',
        color: '#b142e2',
        gpa: '40%'},
        {name: 'Work',
        color: '#ff4241',
        gpa: '50%'},
    ],
    habits: [
        {   "id": 2,
            "habitTitle": "Run 10km",
            "category": "Health",
            "completed": false,
            "userId": 2},
        {   "id": 3,
            "habitTitle": 'Clean Garage',
            "category": "House",
            "completed": false,
            "userId": 2},
        {   "id": 4,
            "habitTitle": "Make Money",
            "category": "Work",
            "completed": false,
            "userId": 2},
    ],
    fetchingCategories: false
  };
  
  
 export const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
  
      default:
        return state;
    }
  };