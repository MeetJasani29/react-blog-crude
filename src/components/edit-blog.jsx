import { useEffect, useState } from 'react';
import './blog.css'
import { Col, Form, Row } from 'react-bootstrap';
import { getLocalData, setLocalData } from './services/localdata';
import { useNavigate, useParams } from 'react-router-dom';

const Editblog = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const intialState = {
        id:"",
        image:"",
        title:"",
        fname:"",
        date:"",
        time:"",
        description:"",
        type:"",
    }
    const [inputForm , setInputForm] = useState(intialState)
    

    const handlechange = (e) => {
            const {name , value} = e.target;
            setInputForm({
                ...inputForm,
                [name] :value,
            })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let getdata = getLocalData();
        let updateData = getdata.map((blog) => {
            if(blog.id == inputForm.id){
                return inputForm;
            }
            else{
                return blog
            }
        })
        setLocalData(updateData);
        navigate("/")

    }

    useEffect(() => {
        let data = getLocalData();
        let singleRecored = data.find((blog) => blog.id == id);
        setInputForm(singleRecored);

    }, [])
    return (
        <div  className='blog-form'  >
            <Form onSubmit={handleSubmit} >
                <Row className="mb-3">
                    <Form.Group className='form-text text-start mt-3 ' as={Col} controlId="formGridEmail">
                        <Form.Label  >Image</Form.Label>
                        <Form.Control type="text" name='image' placeholder='URL'  value={inputForm.image} onChange={handlechange}/>
                    </Form.Group>
                </Row>

                <Form.Group className='form-text text-start mt-3 ' controlId="formGridAddress1">
                    <Form.Label >Title</Form.Label>
                    <Form.Control type='text'  name='title'  value={inputForm.title} onChange={handlechange}/>
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group className='form-text text-start mt-3 ' as={Col} controlId="formGridEmail">
                        <Form.Label  >Author</Form.Label>
                        <Form.Control type="text" name='fname'   value={inputForm.fname} onChange={handlechange}/>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group className='form-text text-start mt-3 ' as={Col} controlId="formGridCity">
                        <Form.Label >Date</Form.Label>
                        <Form.Control type='text' placeholder='June 15,2024'  name='date'  value={inputForm.date} onChange={handlechange} />
                    </Form.Group>

                    <Form.Group className='form-text text-start mt-3 ' as={Col} controlId="formGridCity">
                        <Form.Label >Time</Form.Label>
                        <Form.Control type='time'  name='time'  value={inputForm.time} onChange={handlechange}/>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group className='form-text text-start mt-3 ' as={Col} controlId="formGridCity">
                        <Form.Label >Description</Form.Label>
                        <Form.Control type='text' placeholder='June 15,2024'  name='description'  value={inputForm.description} onChange={handlechange} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group className='form-text text-start mt-3 ' as={Col} controlId="formGridCity">
                        <Form.Label >Blog type</Form.Label>
                        <Form.Select   name='type' onChange={handlechange}>
                            <option value="Affiliate Blogs"> Affiliate Blogs</option>
                            <option value="2"> News Blogs</option>
                            <option value="3">Business Blogs</option>
                            <option value="3">Travel Blogs</option>
                            <option value="3">Health and Fitness Blogs</option>
                        </Form.Select>
                    </Form.Group>
                </Row>


                <button  type='submit' className='publish-button'><span >Add Blog</span><span>Add Blog</span></button>
            </Form> 
        </div>
    )
}
export default Editblog;