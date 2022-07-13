import React from 'react'
import FilterFeedback from './FilterFeedback'
import FeedbackBoard from './FeedbackBoard'

const Home = ({ setSaveNewData, saveCommentReplies, setFilterTerm, data, setData, categories, saveFormData, setUpvotesFilter, filteredData, }) => {
    return (
        <div className="app-container">

            <FilterFeedback
                setFilterTerm={setFilterTerm}
                categories={categories}
            />

            <FeedbackBoard
                saveCommentReplies={saveCommentReplies}
                setSaveNewData={setSaveNewData}
                data={data}
                setData={setData}
                saveFormData={saveFormData}
                setUpvotesFilter={setUpvotesFilter}
                filteredData={filteredData}
            />

        </div>
    )
}

export default Home