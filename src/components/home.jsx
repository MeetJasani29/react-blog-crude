import { Button, Col, Row } from "react-bootstrap";
import { getLocalData, setLocalData } from './services/localdata';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { FaArrowDown, FaArrowUp, FaSearch } from "react-icons/fa";

const Home = () => {

    let navigate = useNavigate();
    const [blogs, setBlogs] = useState(getLocalData())
    const [searchVal, setSearchVal] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [isSortClicked, setIsSortClicked] = useState(false);

    const handleDelete = (id) => {
        let olddata = getLocalData();
        let updateData = olddata.filter((blog) => blog.id != id);
        setBlogs(updateData);
        setLocalData(updateData)
    }

    const handleEdit = (id) => {
        navigate(`/editeblog/${id}`);
    };

    const handleView = (id) => {
        navigate(`/viewblog/${id}`)
    }

    const handelSearch = () => {
        let allBlog = getLocalData();
        let updateData = allBlog.filter((blog) => {
            return (
                blog.fname.toLowerCase().includes(searchVal.toLowerCase()) ||
                blog.title.toLowerCase().includes(searchVal.toLowerCase()) ||
                blog.description.toLowerCase().includes(searchVal.toLowerCase())

            );
        });

        setBlogs(updateData);
        setSearchVal("");

    }

    const handleSort = () => {
        let allBlog = [...getLocalData()];
        let updateData = allBlog.sort((a, b) => {
            let dateA = new Date(a.date);
            let dateB = new Date(b.date);

            if (sortOrder === "asc") {
                return dateA - dateB;
            } else {
                return dateB - dateA;
            }
        });

        setBlogs(updateData);
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        setIsSortClicked(true); 
    }

    return (

        <div>

            <div className="mt-5 text-start justify-content-center  Serachbtn">
                <input type="text" className="me-2 " placeholder="Serach" value={searchVal} onChange={(e) => setSearchVal(e.target.value)} />
                <Button onClick={handelSearch}>
                    <FaSearch />
                </Button>{" "}
                <Button onClick={handleSort}>
            Sort by Date {isSortClicked && (sortOrder === "asc" ? <FaArrowUp /> : <FaArrowDown />)}
        </Button>

            </div>

            <Row className="mt-5">
                {blogs.map((blog) => (

                    <Col key={blog.id} className="col-4">
                        {
                            <div className="card position-relative">
                                <img src={blog.image} className="card-img-top" alt="..." />
                                <div className="card-btn d-flex justify-content-between p-3">
                                    <button onClick={() => handleDelete(blog.id)}><MdDelete /></button>
                                    <button onClick={() => handleEdit(blog.id)}><MdEdit /></button>
                                    <button onClick={() => handleView(blog.id)}><GrView /></button>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title ">{blog.title}</h4>
                                    <p className="card-text ">{blog.description}</p>

                                    <div className="avatar">
                                        <div className="d-flex align-items-center">
                                            <div className="avatar-img">
                                                <img src={blog.image} className="card-img-top" alt="..." />
                                            </div>
                                            <div className="avatar-detail text-start">
                                                <div>
                                                    <a >{blog.fname}</a>
                                                </div>
                                                <div>
                                                    <h6>{blog.date}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </Col>

                ))}
            </Row>
        </div>

    )
}
export default Home;