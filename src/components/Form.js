import React, { useState } from 'react'
import { nanoid } from 'nanoid'

import '../styles/form.css'


const Form = ({ saveFormData }) => {

    const [formData, setFormData] = useState({

        category: 'feature',
        description: '',
        id: nanoid(),
        status: 'suggestion',
        title: '',
        upvotes: 0,
    })

    const handleFormSubmit = (e) => {
        e.preventDefault()

        saveFormData(formData)

        setFormData({
            category: '',
            description: '',
            id: nanoid(),
            status: '',
            title: '',
            upvotes: 0,
        })
    }

    return (
        <div className='form-container'>

            <form
                onSubmit={handleFormSubmit}>

                <label htmlFor='headline'>
                    Feedback Title
                </label>
                <input
                    value={formData.title}
                    onChange={(e) => setFormData({
                        ...formData,
                        title: e.target.value
                    })
                    }
                    id="headline"
                    placeholder='Add a title'>
                </input>

                <label htmlFor='category'>
                    Category
                </label>
                <select
                    value={formData.category}
                    onChange={(e) => setFormData({
                        ...formData,
                        category: e.target.value
                    })}
                    id='category'>

                    <option value="feature">Feature</option>
                    <option value="enhancement">Enhancement</option>
                    <option value="bug">Bug</option>
                    <option value="ux">UX</option>
                    <option value="ui">UI</option>
                </select>

                <label htmlFor='feedback-detail'>
                    Feedback Detail
                </label>

                <input
                    id="feedback-detail"
                    value={formData.description}
                    onChange={(e) => setFormData({
                        ...formData,
                        description: e.target.value
                    })
                    }
                >

                </input>

                <button>
                    Submit
                </button>

            </form>


        </div >
    )
}

export default Form