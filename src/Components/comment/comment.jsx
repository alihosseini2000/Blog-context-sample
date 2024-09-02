import "./comment.css"
import PropTypes from "prop-types"
import { useEffect , useState } from "react"
import { apiUrl } from "../../utils/constant"
import axios from "axios"


function Comment({comment}) {

  const [postUser, setPostUser] = useState({})

  useEffect(() => {
    const fetchPostUser = async (id) => {
      const response = await axios.get(`${apiUrl.USER_URL}/${id}`)
      setPostUser(response.data)
    }
    fetchPostUser(comment?.user?.id)
  }, [])

  return (
    <div className='blog-comments-item grid align-center' key = {comment.id}>
            <div className='comment-img'>
                <img src = {postUser?.image} alt = "" />
            </div>
            <div className='comment-info'>
                <span className='comment-info-name fw-7 text-dark-blue fs-5'>{comment?.user?.username}</span>
                <p className='my-1 fs-4'>{comment?.body}</p>
            </div>
        </div>
  )
}

Comment.propTypes ={
  comment: PropTypes.any
}

export default Comment
