import React, { useState } from "react";
import { Input, Button, message } from "antd";
export default function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    const res = await fetch("/api/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ username, password }) });
    if (res.ok) {
      const user = await res.json();
      onLogin(user);
      message.success("تم تسجيل الدخول بنجاح");
    } else {
      message.error("اسم المستخدم أو كلمة المرور خاطئة");
    }
  };
  return (
    <div style={{maxWidth:350,margin:"80px auto",padding:30,background:"#fff",borderRadius:8}}>
      <h2>تسجيل الدخول</h2>
      <Input placeholder="اسم المستخدم" value={username} onChange={e => setUsername(e.target.value)} style={{marginBottom:12}} />
      <Input.Password placeholder="كلمة المرور" value={password} onChange={e => setPassword(e.target.value)} style={{marginBottom:24}} />
      <Button type="primary" block onClick={handleLogin}>دخول</Button>
    </div>
  );
}