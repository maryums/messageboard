import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { nanoid } from 'nanoid';
import backlogo from '../assets/shared/icon-arrow-left.svg'
import commentlogo from '../assets/shared/icon-comments.svg'
import EachComment from './EachComment';
import upvotesSvg from '../assets/shared/icon-arrow-up.svg'

import '../styles/commentthread.css'

import userImg from '../assets/user-images/image-anne.jpg'

import { Link } from 'react-router-dom';

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

                commentsArr.map(item => (
                    <EachComment
                        commentsArr={commentsArr}
                        key={nanoid()}
                        item={item} />
                )
                )}


        </div>
    )
}

export default CommentThread