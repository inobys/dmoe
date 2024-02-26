import { Button, Table, Tabs } from "antd";
import React, { useEffect, useState,useRef } from "react";
import DetailsDesc from "./details_desc.jsx";
import { columns ,data} from "./helper.js";
import ModalCon from './modal' 
import { message } from "antd";

const App = () => {
  const modal_ref= useRef(null),
  [dataSource,setDataSource]=useState(data.data),
  [open,setOpen]=useState(false),
  [modal_type,setModalType]=useState('add'), 
  table_pro = {
    columns: columns(onPopOk, onDetail),
    dataSource,
  },modal_tro={
    ref:modal_ref,
    open,
    modal_title:modal_type,
    onOk,
    onCancel
  }

  return (
    <>
      <DetailsDesc />
      <Tabs
        defaultActiveKey="2"
        tabBarExtraContent={<Button type="primary" onClick={onAdd}>新建工作流任务</Button>}
        items={[
          {
            label: "类别",
            key: "1",
            children: 456,
            disabled: true,
          },
          {
            label: "部署工作流",
            key: "2",
            children: <Table {...table_pro} />,
          },
          {
            label: "授权用户",
            key: "3",
            children: 123,
            disabled: true,
          },
        ]}
      />
      {open && <ModalCon {...modal_tro} />}
    </>
  );

  // 新增弹出层按钮
  function onAdd(){
    setModalType('add')
    setOpen(true)
  }

  // 新增确定按钮
  function onOk(){
    console.log('新增',modal_ref.current)
  }

  //
  function onCancel(){
    setOpen(false)
  }

  // Popconfirm 确定按钮点击事件
  function onPopOk(i) {
    message.success(`${dataSource?.find(({id})=>id===i)?.workflow_name+'部署完成'}`)

  }

  // 详情按钮点击事件
  function onDetail(id) {
    setModalType('detail')
    setOpen(true)
  }
};

export default App;
