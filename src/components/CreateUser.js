import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Radio } from 'antd';


const CreateUser = () => {
    
  return (
    <>
      <Form>
        
        <Form.Item label="Name">
          <Input placeholder="Enter Name" />
        </Form.Item>
        <Form.Item>
          <Button type="submit">Submit</Button>
          <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form.Item>
        
      </Form>
    </>
  );
    
}

export default CreateUser;
