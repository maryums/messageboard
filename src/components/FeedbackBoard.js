import React, { useState } from 'react'
import '../styles/feedbackboard.css'
import Form from './Form'

import MessageBoard from './MessageBoard'

const FeedbackBoard = ({ filteredData, saveFormData, setUpvotesFilter }) => {
    const [showForm, setshowForm] = useState(false)

    const handleSelect = (input) => {
        setUpvotesFilter(input)
    }

    const handleAddFeedback = () => {
        setshowForm(!showForm)

    }


    return (

        <div className="message-board-container">


            <div className="grey-header">

                <div className='suggestions-sortedby'>
                    <h2> {filteredData.length} Suggestions</h2>

                    <label htmlFor='upvotes'>Sort by: </label>
                    <select
                        name="upvotes"
                        id="upvotes"
                        onChange={(e) => handleSelect(e.target.value)}
                    >
                        <option
                        >
                            Sort by...
                        </option>
                        <option
                            value="mostUpvotes">
                            Most Upvotes
                        </option>
                        <option
                            value="leastUpvotes">
                            Least Upvotes
                        </option>
                        <option
                            value="mostComments">
                            Most Comments
                        </option>
                        <option
                            value="leastComments">
                            Least Comments
                        </option>

                    </select>

                </div>


                <div className='button-container'>
                    <button
                        onClick={handleAddFeedback}>+ Add Feedback</button>
                </div>
            </div>

            {showForm &&
                <Form
                    saveFormData={saveFormData} />
            }

            <MessageBoard
                filteredData={filteredData}
            />



        </div>
    )
}

export default FeedbackBoard