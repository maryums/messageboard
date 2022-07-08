import React from 'react'
import "../styles/filterfeedback.css"

const FilterFeedback = ({ categories, setFilterTerm }) => {


    const handleFilterButton = (item) => {
        setFilterTerm(item)
    }

    return (
        <div>
            <div className='frontend-header'>
                <h2>Frontend Mentor</h2>
                <h4>Feedback Board</h4>
            </div>

            <div className='search-category'>
                <button
                    onClick={() => handleFilterButton("all")}>
                    all
                </button>

                {categories.map(item => (
                    <button
                        key={Math.random() * 1000}
                        onClick={() => handleFilterButton(item)}>
                        {item}
                    </button>
                ))}

            </div>


        </div>
    )
}

export default FilterFeedback