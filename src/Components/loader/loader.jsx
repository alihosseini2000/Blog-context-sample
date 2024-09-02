import "./loader.css"
import { loader } from '../../utils/images';

const Loader = () => {
  return (
    <div className='loader d-flex align-items-center justify-content-center my-5'>
        <img src = {loader} alt = "Loading" />
    </div>
  )
}

export default Loader