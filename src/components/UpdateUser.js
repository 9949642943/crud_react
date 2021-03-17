import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Radio } from 'antd';

const UpdateUser = () => {
    return (
        <Form>
        
        <Form.Item label="Name">
          <Input placeholder="Enter Name" />
        </Form.Item>
        <Form.Item>
          <Button type="submit">Update Name</Button>
          <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form.Item>
        
      </Form>
    )
}

export default UpdateUser;
