import React from 'react'
import MessagePost from './MessagePost'

const MessageBoard = ({ saveCommentReplies, setSaveNewData, setData, data, filteredData }) => {

    return (
        <div>

            {filteredData && filteredData.map(item => (
                < MessagePost
                    saveCommentReplies={saveCommentReplies}
                    setSaveNewData={setSaveNewData}
                    data={data}
                    key={item.id}
                    post={item}
                    setData={setData}
                />
            ))}


        </div>


    )
}

export default MessageBoard