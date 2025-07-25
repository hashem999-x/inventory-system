import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Select, Input } from "antd";
export default function ReturnsPage() {
  const [returns, setReturns] = useState([]);
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const [form] = Form.useForm();
  useEffect(() => {
    fetch("/api/returns").then(r => r.json()).then(setReturns);
    fetch("/api/products").then(r => r.json()).then(setProducts);
  }, []);
  const onFinish = values => {
    fetch("/api/returns", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) })
      .then(() => { setShow(false); window.location.reload(); });
  };
  return (
    <div>
      <Button onClick={() => setShow(true)}>إضافة مرتجع</Button>
      <Table dataSource={returns} rowKey="_id" columns={[
        { title: "المنتج", dataIndex: ["product", "name"] },
        { title: "النوع", dataIndex: "type" },
        { title: "الكمية", dataIndex: "quantity" },
        { title: "السبب", dataIndex: "reason" },
        { title: "بواسطة", dataIndex: ["createdBy", "username"] },
        { title: "التاريخ", dataIndex: "createdAt", render: v => (new Date(v)).toLocaleString() }
      ]} />
      <Modal open={show} onCancel={() => setShow(false)} footer={null}>
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item name="product" label="المنتج" rules={[{ required: true }]}>
            <Select options={products.map(p => ({ value: p._id, label: p.name }))} />
          </Form.Item>
          <Form.Item name="type" label="نوع المرتجع" rules={[{ required: true }]}>
            <Select options={[{ value: "customer", label: "من عميل" }, { value: "vendor", label: "إلى مورد" }]} />
          </Form.Item>
          <Form.Item name="quantity" label="الكمية" rules={[{ required: true }]}>
            <Input type="number" />
          </Form.Item>
          <Form.Item name="reason" label="السبب"><Input /></Form.Item>
          <Button type="primary" htmlType="submit">حفظ</Button>
        </Form>
      </Modal>
    </div>
  );
}