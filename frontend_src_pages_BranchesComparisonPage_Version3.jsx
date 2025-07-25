import React, { useState, useEffect } from "react";
import { Table } from "antd";
export default function BranchesComparisonPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/api/branches/comparison").then(r => r.json()).then(setData);
  }, []);
  return (
    <div>
      <h2>مقارنة الفروع</h2>
      <Table dataSource={data} rowKey="branch" columns={[
        { title: "اسم الفرع", dataIndex: "branch" },
        { title: "إجمالي الجرد", dataIndex: "inventoryTotal" },
        { title: "المرتجعات", dataIndex: "returnsTotal" },
        { title: "الهدر", dataIndex: "wasteTotal" },
        { title: "منتجات منتهية", dataIndex: "expiredTotal" }
      ]} />
    </div>
  );
}