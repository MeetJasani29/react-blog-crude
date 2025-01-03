import { Col, Row } from "react-bootstrap";
import { getLocalData, setLocalData } from './services/localdata';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { GrView } from "react-icons/gr";

const Home = () => {

    let navigate = useNavigate();
    const [blogs, setBlogs] = useState(getLocalData())

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

    return (
        <Row className="mt-5">
            {blogs.map((blog) => (

                <Col key={blog.id} className="col-4">
                    {
                        <div className="card position-relative">
                            <img src={blog.image} className="card-img-top" alt="..." />
                            <div className="card-btn d-flex justify-content-between p-3">
                                <button  onClick={() => handleDelete(blog.id)}><MdDelete /></button>
                                <button  onClick={() => handleEdit(blog.id)}><MdEdit /></button>
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

    )
}
export default Home;