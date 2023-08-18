import React from 'react';
import authorList from '@site/static/authors.json';
import 'js-yaml';
import {AvatarGroup, Avatar} from "@mui/material";

export default function Author({fm}) {
    var AuthorsIn = fm.authors.split(",");
    return (
        <div className="row">
            {AuthorsIn.map(
                (author) => parseAuthor(author)
            )}
        </div>
    )
}

function parseAuthor(authorIn) {
    let authorData = authorList[authorIn];
    if(typeof(authorData) === 'undefined'){
        return null;
    }
    return (
        <div key={authorIn} className="row">
            <Avatar alt={authorData["name"]} src={authorData["image_url"]}></Avatar>
            <div>
                <a href={authorData["url"]}>{authorData["name"]}</a>
                <h6>{authorData["title"]}</h6>
            </div>
        </div>
    )
}
