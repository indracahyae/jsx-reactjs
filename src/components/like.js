import React from 'react'
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Like = (props) => (
    <Fa icon={faHeart} onClick={props.onClick}
        color={props.love == true ? 'red' : 'purple'}
        size='5x'
    />
)
export default Like