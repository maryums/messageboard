import React from 'react'
import FilterFeedback from './FilterFeedback'
import FeedbackBoard from './FeedbackBoard'

const Home = ({ setFilterTerm, categories, saveFormData, setUpvotesFilter, filteredData, }) => {
    return (
        <div className="app-container">

            <FilterFeedback
                setFilterTerm={setFilterTerm}
                categories={categories}
            />

            <FeedbackBoard
                saveFormData={saveFormData}
                setUpvotesFilter={setUpvotesFilter}
                filteredData={filteredData}
            />

        </div>
    )
}

export default Home