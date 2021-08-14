import React from 'react'

const AnchorList = ({list,links}) => {
    return (
        list.map( (item, index) => (
            <li key={item} className="listItem">
                <a href={links[index]}>
                    {item}
                </a>
            </li>
        ))
    )
}

export default AnchorList
