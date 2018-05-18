import React from 'react';
import classes from './SearchButtonForm.css';

const searchButtonForm=(props)=>(
    <div className={classes.SearchButtonForm}>
        <form>
            <input type="text" className={classes.SearchButton} default={props.searchText}/>
            <input type="submit" value="Search"/>
        </form>
    </div>
    
);

export default searchButtonForm;