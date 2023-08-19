import React from 'react';
import authorList from '@site/static/authors.json';
import 'js-yaml';

export default function Author({fm}) {
    var AuthorsIn = fm.authors.split(",");
    return (
        <div className="row margin-bottom--lg">
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
        <div className="avatar margin-left--sm margin-right--sm">
            <a
                className="avatar__photo-link avatar__photo avatar__photo"
                href={authorData["url"]}>
                <img
                    alt={"author image for " + authorData["email"]}
                    src= {authorData["image_url"]} />
            </a>
            <div className="avatar__intro">
                <div className="avatar__name">{authorData["name"]}</div>
                <small className="avatar__subtitle">
                    {authorData["title"]}
                </small>
            </div>
        </div>
    )
}
