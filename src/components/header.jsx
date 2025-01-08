
import './blog.css'


const Header = () => {


    return (

        <header>
            <div className="d-flex justify-content-between ">
                <div>
                    <a href="/" className='me-4'>Home</a>

                </div>
                <div>
                    <a href="/blogform">Add a Blog</a>
                </div>

            </div>
        </header>
    )
}
export default Header;