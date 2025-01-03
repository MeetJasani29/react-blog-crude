import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { getLocalData } from './services/localdata';


const Viewblog = () => {
    const intialState = {
        id: "",
        image: "",
        title: "",
        fname: "",
        date: "",
        time: "",
        description: "",
        type: "",
    }
    const { id } = useParams()
    const [blog, setBlog] = useState(intialState);

    useEffect(() => {
        const data = getLocalData();
        const singleRecord = data.find((blog) => blog.id == id);
        setBlog(singleRecord);

    }, [id])
    return (
        <Row className="mt-5">
            <Col className="col-12">
                <div className="card2">
                <h4 className="card-title2">{blog.title}</h4>
                    <div className="avatar">
                        <div className="d-flex">
                            <div className="avatar-img d-flex align-items-center ">
                                <img src={blog.image} className="card-img-top" alt={blog.fname} />
                            </div>
                           
                            <div className="avatar-detail text-start">
                                <div>
                                    <a href="#">{blog.fname}</a>
                                </div>
                                <div>
                                    <h6>{blog.date} · {blog.time}</h6> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <img src={blog.image} className="card-img-last" alt={blog.title} />
                    <div className=" card-conten">
                        <p >{blog.description}</p>
                    </div>
                </div>
            </Col>
        </Row>

    )

};
export default Viewblog;