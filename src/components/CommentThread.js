import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { nanoid } from 'nanoid';
import backlogo from '../assets/shared/icon-arrow-left.svg'
import commentlogo from '../assets/shared/icon-comments.svg'

import upvotesSvg from '../assets/shared/icon-arrow-up.svg'

import '../styles/commentthread.css'

import userImg from '../assets/user-images/image-anne.jpg'

const CommentThread = ({ getComments }) => {
    let navigate = useNavigate();
    let params = useParams();
    let id = params.commentID

    let comment = getComments(id)


    let commentsCount;

    let commentsArr = comment.comments


    if (commentsArr) {
        commentsCount = commentsArr.length
    } else {
        commentsCount = 0
    }



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

        return (validCommentReplies.map(item => (
            <div
                key={item.replyingTo}
                className='each-comment-reply'>

                <p className="reply-user-name">{item.user.name}</p>
                <p className='reply-user-handle'>@{item.user.username}</p>
                <p> <span> @{item.replyingTo} </span> {item.content}</p>

            </div>
        )))
    }

    // const renderComments = commentsArr.map(item => {
    //     return (
    //         <div
    //             className='comments-reply-thread'
    //             key={nanoid()}>

    //             <div className='reply-author-photo'>
    //                 <img src={userImg} />
    //             </div>

    //             <div className='reply-author-content'>

    //                 <p className="reply-user-name">{item.user.name} </p>
    //                 <p className='reply-user-handle'>@ {item.user.username} </p>
    //                 <p>{item.content}</p>

    //                 <br />

    //                 {item.replies && validReplies(item.replies)}

    //             </div>
    //         </div>
    //     )
    // })


    return (

        <div className='comment-thread'>
            <div className='top-goback-edit'>
                <button onClick={() => navigate(-1)}> <img src={backlogo} /> Go Back </button>

                <button className='feedback'> Edit Feedback </button>
            </div>

            <div className='main-comment'>

                <div className='message-post card'>
                    <div className='upvotes-container'>
                        <img src={upvotesSvg} />
                        {comment.upvotes}
                    </div>

                    <div className='post-info-container'>
                        <h3>{comment.title}</h3>

                        <div className='post-description'>
                            <p>{comment.description}</p>
                            <p className='comments-container'>
                                <img src={commentlogo} />

                                {commentsCount}  </p>
                        </div>
                        <p className='tag'>{comment.category}</p>
                    </div>
                </div>
            </div>

            {commentsCount >= 1 &&
                <div className='comment-count'>
                    {commentsCount} Comments
                </div>
            }


            {commentsCount >= 1 &&

                commentsArr.map(item => {
                    return (
                        <div
                            className='comments-reply-thread'
                            key={nanoid()}>

                            <div className='reply-author-photo'>
                                <img src={userImg} />
                            </div>

                            <div className='reply-author-content'>

                                <p className="reply-user-name">{item.user.name} </p>
                                <p className='reply-user-handle'>@ {item.user.username} </p>
                                <p>{item.content}</p>

                                <br />

                                {item.replies && validReplies(item.replies)}

                            </div>
                        </div>
                    )
                })}


        </div>
    )
}

export default CommentThread