import React from 'react'

const EachReply = ({ item }) => {
    let replyImage = item.user.image

    return (
        <div>
            <div
                className='each-comment-reply'>

                <div className='each-comment-image'>
                    <img src={replyImage} />

                </div>
                <div className='each-comment-info'>

                    <p className="reply-user-name">{item.user.name}</p>
                    <p className='reply-user-handle'>@{item.user.username}</p>
                    <p> <span> @{item.replyingTo} </span> {item.content}</p>
                </div>


            </div>

        </div>
    )
}

export default EachReply