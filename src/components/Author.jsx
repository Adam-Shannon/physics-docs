import React from 'react';
import authorList from '@site/static/authors.json';
import 'js-yaml';

export default function Author({fm}) {
    //just iterate through each and then return a custom designed multi author component
    console.log(authorList["adam"]["name"]);
    return (
      <p>{fm.authors}</p>
    );
}