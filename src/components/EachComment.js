import React from 'react'
import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'
import '../styles/eachcomment.css'

const EachComment = ({ item, commentsArr }) => {

    let image = item.user.image

    const validReplies = (commentArr) => {
        let validCommentReplies;
        for (let item of commentsArr) {
            if (item.replies) {
                validCommentReplies = item.replies
            }
            else {
                console.log("no replies to this comment")
            }
        }

        return (validCommentReplies.map(item => {

            let replyImage = item.user.image

            return (
                <div
                    key={item.replyingTo}
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
            )
        }

        ))
    }



    return (
        <div
            className='comments-reply-thread'
            key={nanoid()}>

            <div className='reply-author-photo'>

                <img src={image} />
            </div>

            <div className='reply-author-content'>

                <div className="user-link">
                    <p className="reply-user-name">{item.user.name} </p>
                    <Link to="/">Reply</Link>
                </div>
                <p className='reply-user-handle'>@ {item.user.username} </p>
                <p>{item.content}</p>

                <br />

                {item.replies && validReplies(item.replies)}

            </div>
        </div>

    )
}

export default EachComment