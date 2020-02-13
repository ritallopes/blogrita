import React from 'react'
import PostItem from '../PostItem'
const Hit = ({hit}) => (
    <PostItem slug ={hit.fields.slug} title={hit.title}
    category = {hit.category}  description= {hit.description}
    background={hit.background} timeToRead={hit.timeToRead}
    />
)

export default Hit