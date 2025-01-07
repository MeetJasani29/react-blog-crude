
import './blog.css'

import { FaSearch } from 'react-icons/fa';

const Header = () => {

  
    return (

        <header>
            <div className="d-flex justify-content-between ">
                <div>
                    <a href="/" className='me-4'>Home</a>
                    <a href="/blogform">Add a Blog</a>
                </div>
               
            </div>
        </header>
    )
}
export default Header;