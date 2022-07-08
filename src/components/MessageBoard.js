import React from 'react'
import MessagePost from './MessagePost'

const MessageBoard = ({ filteredData }) => {

    return (
        <div>

            {filteredData && filteredData.map(item => (
                < MessagePost
                    key={item.id}
                    post={item}
                />
            ))}


        </div>


    )
}

export default MessageBoard