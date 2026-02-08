import React from "react";

function AdminDashboard() {
  return (
    <>
      {/* Stats Cards */}
      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <div className="card shadow-sm text-center">
            <div className="card-body">
              <h5 className="text-muted">Users</h5>
              <h2 className="fw-bold">1,245</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm text-center">
            <div className="card-body">
              <h5 className="text-muted">Chats</h5>
              <h2 className="fw-bold">8,430</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm text-center">
            <div className="card-body">
              <h5 className="text-muted">Trips Planned</h5>
              <h2 className="fw-bold">312</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title mb-3">Recent Activity</h5>

          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              User <strong>Ali</strong> asked about Hunza weather
            </li>
            <li className="list-group-item">
              User <strong>Sara</strong> planned a Dubai trip
            </li>
            <li className="list-group-item">
              New user <strong>Ahmed</strong> signed up
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
