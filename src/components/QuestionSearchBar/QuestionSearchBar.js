import React from 'react';
import SearchButtonForm from './SearchButtonForm/SearchButtonForm';

import classes from './QuestionSearchBar.css';

const questionSearchBar=(props)=>(
    <div className={classes.QuestionSearchBar}>
        <div className={classes.Question}>If there's anything that you want... <strong>0032 1234 56 78</strong></div>
        <SearchButtonForm searchText="Search..."/>
    </div>     
);

export default questionSearchBar;