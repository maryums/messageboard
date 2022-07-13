import react, { useState, useEffect } from 'react'
import produce from 'immer'


import fakeData from './FakeData'

import Home from './components/Home';
import Form from './components/Form';
import CommentThread from './components/CommentThread'

import { Routes, Route } from "react-router-dom";

function App() {

  const [data, setData] = useState(fakeData[0].productRequests)

  const [filteredData, setFilteredData] = useState(data)
  const [filterTerm, setFilterTerm] = useState('all')
  const [upvotesFilter, setUpvotesFilter] = useState('')
  const [saveNewData, setSaveNewData] = useState(false)
  const [eachCommentInput, seteachCommentInput] = useState("")

  const getComments = (id) => {
    return data.find(comment => comment.id.toString() === id)
  }

  const saveFormData = (request) => {
    setData([...data, request])
    setSaveNewData(prevState => !prevState)
  }

  const saveCommentReplies = (reply, commentId, itemId) => {

    // let newData = data.map((item) =>
    //   item.id === originalCommentId
    //     ? {
    //       ...item,
    //       comments: item.comments.map((comment) =>
    //         comment === id
    //           ? {
    //             ...comment,
    //             replies: [...comment.replies, reply]
    //           } : comment
    //       ),
    //     }
    //     : item
    // )

    // console.log(newData)

    let fullComment = (data.find((item) => item.id === parseInt(itemId)))
    let indexComment = data.indexOf(fullComment)

    console.log(indexComment)

    let fullReply = (fullComment.comments).find(comment => comment.id === parseInt(commentId))
    let indexReply = (fullComment.comments).indexOf(fullReply)
    console.log(indexReply)


    if (!data[indexComment].comments[indexReply].replies) {
      data[indexComment].comments[indexReply].replies = []
    }



    const nextState = produce(data, draftState => {

      draftState[indexComment].comments[indexReply].replies.push(reply)


    })

    setData(nextState)
    setSaveNewData(prevState => !prevState)

  }


  let categoryArr = []
  let searchArr = data

  searchArr.forEach(item => {
    if (!categoryArr.includes(item.category)) {
      categoryArr.push(item.category)
    }
  })


  const filterData = (filterTerm) => {
    if (filterTerm === "all" | '') {
      setFilteredData(searchArr)
    }

    else if (filterTerm !== '') {
      const nextFilteredData = searchArr.filter(item => item.category === filterTerm)
      setFilteredData(nextFilteredData)
    }
  }

  const filterUpvotesData = (upvotesFilter) => {

    if (upvotesFilter === "leastUpvotes") {
      setFilteredData(prevState => [...prevState].sort((a, b) => a.upvotes - b.upvotes))
      console.log(filteredData)
    }

    else if (upvotesFilter === "mostUpvotes") {
      setFilteredData(prevState => [...prevState].sort((a, b) => b.upvotes - a.upvotes))
    }

    else if (upvotesFilter === "mostComments") {
      setFilteredData(prevState => [...prevState].sort((a, b) => {

        let commentALen; let commentBLen;

        !a.comments ? commentALen = 0 : commentALen = a.comments.length
        !b.comments ? commentBLen = 0 : commentBLen = b.comments.length

        // if (!b.comments) {
        //   commentBLen = 0
        // }
        // else {
        //   commentBLen = b.comments.length
        // }
        return commentBLen - commentALen
      }))

    }


    else if (upvotesFilter === "leastComments") {
      setFilteredData(prevState => [...prevState].sort((a, b) => {
        let commentALen; let commentBLen;

        !a.comments ? commentALen = 0 : commentALen = a.comments.length
        !b.comments ? commentBLen = 0 : commentBLen = b.comments.length

        // if (!b.comments) {
        //   commentBLen = 0
        // }
        // else {
        //   commentBLen = b.comments.length
        // }
        return commentALen - commentBLen
      }))

    }

    else {
      setFilteredData(prevState => prevState)
    }

  }

  useEffect(() => {
    filterData(filterTerm)
    filterUpvotesData(upvotesFilter)

  }, [filterTerm, upvotesFilter, saveNewData])

  const saveInput = (input) => {
    setUpvotesFilter(input)
  }

  return (
    <div>

      <Routes>
        <Route path="/" element={
          <Home
            saveCommentReplies={saveCommentReplies}
            setSaveNewData={setSaveNewData}
            data={data}
            setData={setData}
            setFilterTerm={setFilterTerm}
            setUpvotesFilter={setUpvotesFilter}
            filteredData={filteredData}
            categories={categoryArr}
            saveFormData={saveFormData}
          />}
        />
        <Route path="form" element={<Form />} />
        <Route path=":commentID" element={
          <CommentThread
            eachCommentInput={eachCommentInput}
            seteachCommentInput={seteachCommentInput}
            saveCommentReplies={saveCommentReplies}
            getComments={getComments} />
        }
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>



    </div>
  );
}

export default App;
