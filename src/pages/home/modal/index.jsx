import {Form,Modal,Input, Switch,Col,Row} from 'antd'
import {modal_type } from '../helper'
import { useImperativeHandle,forwardRef, useEffect } from 'react'
function ModalCon({ref,open,onOk,modal_title,onCancel,...rest}){

    const  [form]=Form.useForm(),  modal_tro={
        open,
        title:modal_type[modal_title],
        onOk,
        width:800,
        okText:'确定',
        cancelText:'取消',
        onCancel,
        ...rest
    },form_tro={
        wrapperCol:8,
        labelCol:8,
    }

    useEffect(()=>{
        console.log(ref)
    },[ref])

    useImperativeHandle(ref,()=>({
        
        /* 重置 */
        reset: fields => form?.resetFields(fields),
        /* 取值 */
        getValue: name => form?.getFieldValue(name),
        /* 赋值 */
        setValues: values => form?.setFieldsValue(values)
    
    }))

    return (

        <Modal {...modal_tro}>
            <Form form={form} {...form_tro}>
            <Row>  
          <Col span={12}>  
            <Form.Item name="workflow_name" label="工作流名称">  
              <Input />  
            </Form.Item>  
          </Col>  
          <Col span={12}>  
            <Form.Item name="version" label="版本">  
              <Input />  
            </Form.Item>  
          </Col>  
        </Row>  
        <Row>  
          <Col span={12}>  
            <Form.Item name="task_create_time" label="任务创建时间">  
              <Input />  
            </Form.Item>  
          </Col>  
          <Col span={12}>  
            <Form.Item name="task_creator" label="任务创建者">  
              <Input />  
            </Form.Item>  
          </Col>  
        </Row>  
        <Form.Item name="can_deploy" label="是否部署">  
          <Switch value='true' />  
        </Form.Item> 
        </Form>
        </Modal>
    )

}

export default forwardRef(ModalCon);