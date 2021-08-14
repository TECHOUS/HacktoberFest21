import React from 'react'

const List = ({list}) => {
    return (
        list.map( (item) => (
            <li key={item} className="listItem">{item}</li>
        ))
    )
}

export default List;
