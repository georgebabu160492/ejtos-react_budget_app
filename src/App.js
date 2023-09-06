// Here, you are importing different components,adding a bootstrap container that helps you center your App on the page

// Adding a title
// Adding a Bootstrap row
// Adding a column within the row for each of your components so far
// Imported and Rendered the AllocationForm
// Imported AppProvider and Nested components in the AppProvider element.
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseItem from './components/ExpenseItem';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';

import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget />
                    </div> {/* Add Budget component here under */}        
                    <div className='col-sm'>
                        <Remaining />
                    </div>{/* Add Remaining component here under */}        
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>{/* Add ExpenseTotal component here under */}
                    </div>
                    <h3 className='mt-3'>Allocation</h3>
                    <div className='row'>        
                        <div className='col-sm'>
                            <ExpenseList />
                        </div>{/* Add ExpenseList component here under */}  
                    </div>
                    <h3 className='mt-3'>Change allocation</h3>
                    <div className='row mt-3'>       
                    {/* <div className='col-sm'>
                        <ExpenseItem />
                    </div> */}
                    <div className='col-sm'>
                        <AllocationForm />
                    </div>{/* Add AllocationForm component here under */}        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
