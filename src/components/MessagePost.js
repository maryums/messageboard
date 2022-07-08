import React from 'react'
import '../styles/messagepost.css'
import commentlogo from '../assets/shared/icon-comments.svg'
import upvotesSvg from '../assets/shared/icon-arrow-up.svg'
import { Link, Outlet } from "react-router-dom";


const MessagePost = ({ post }) => {

    let commentsCount;
    let commentsArr = (post.comments)

    if (commentsArr) {
        commentsCount = commentsArr.length
    } else {
        commentsCount = 0
    }

    return (

        <>
            <Link
                to={`/${post.id}`}
                key={post.id}
            >

                <div className='message-post card'>

                    <div className='upvotes-container'>
                        <img
                            alt={"upvotes"}
                            src={upvotesSvg} />
                        {post.upvotes}
                    </div>

                    <div className='post-info-container'>
                        <h3>{post.title}</h3>

                        <div className='post-description'>
                            <p>{post.description}</p>
                            <p className='comments-container'>
                                <img src={commentlogo} />

                                {commentsCount}  </p>
                        </div>

                        <p className='tag'>{post.category}</p>

                    </div>

                </div>

            </Link>


        </>
    )
}

export default MessagePost


