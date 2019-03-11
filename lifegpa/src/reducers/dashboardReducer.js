// import {  } from '../actions';
  
const initialState = {
    GPA: '50%',
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
        {name: 'Run 10km',
        category: 'Health'},
        {name: 'Clean Garage',
        category: 'House'},
        {name: 'Make Money',
        category: 'Work'},
    ],
    fetchingCategories: false
  };
  
  
 export const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
  
      default:
        return state;
    }
  };

  