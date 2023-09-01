import React from "react";
import AdminLayout from "../../components/layouts/AdminLayout";

function Dashboard() {
  return (
    <div>
      {console.log("here in dash")}
      <AdminLayout>
        <h3>Dashboard</h3>
      </AdminLayout>
    </div>
  );
}

export default Dashboard;
