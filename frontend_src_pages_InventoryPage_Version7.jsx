import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Input, Tag } from "antd";
export default function InventoryPage() {
  const [data, setData] = useState([]);
  const [showScanner, setShowScanner] = useState(false);
  useEffect(() => {
    fetch("/api/inventory").then(r => r.json()).then(setData);
  }, []);
  return (
    <div>
      <Button onClick={() => setShowScanner(true)}>مسح باركود</Button>
      {/* مكون BarcodeScanner كما شرحنا سابقًا */}
      <Table dataSource={data} rowKey="_id" columns={[
        { title: "المنتج", dataIndex: ["product", "name"] },
        { title: "الكمية", dataIndex: "quantity" },
        { title: "تاريخ الانتهاء", dataIndex: "expiryDate" },
        { title: "ملاحظات", dataIndex: "notes" },
        { title: "الحالة", render: (_, r) => {
          if(new Date(r.expiryDate) < new Date()) return <Tag color="red">منتهي</Tag>;
          return <Tag color="green">جيد</Tag>;
        }}
      ]} />
    </div>
  );
}