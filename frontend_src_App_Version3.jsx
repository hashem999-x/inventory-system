import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import InventoryPage from "./pages/InventoryPage";
import ProductsPage from "./pages/ProductsPage";
import VendorsPage from "./pages/VendorsPage";
import PurchaseOrdersPage from "./pages/PurchaseOrdersPage";
import AuditLogPage from "./pages/AuditLogPage";
import ReorderRequestsPage from "./pages/ReorderRequestsPage";
import ReturnsPage from "./pages/ReturnsPage";
import PriceHistoryPage from "./pages/PriceHistoryPage";
import MessagesPage from "./pages/MessagesPage";
import BranchesPage from "./pages/BranchesPage";
import UsersPage from "./pages/UsersPage";
import BranchesComparisonPage from "./pages/BranchesComparisonPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/vendors" element={<VendorsPage />} />
        <Route path="/purchase-orders" element={<PurchaseOrdersPage />} />
        <Route path="/audit-logs" element={<AuditLogPage />} />
        <Route path="/reorder-requests" element={<ReorderRequestsPage />} />
        <Route path="/returns" element={<ReturnsPage />} />
        <Route path="/price-history" element={<PriceHistoryPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/branches" element={<BranchesPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/branches-comparison" element={<BranchesComparisonPage />} />
      </Routes>
    </BrowserRouter>
  );
}