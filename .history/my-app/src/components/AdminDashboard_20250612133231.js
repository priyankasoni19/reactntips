import React from 'react';
import './AdminDashboard.css';
import { FaBook, FaUserGraduate, FaCLink nk pboardLink nk st, FaTrash } from 'react-icons/fa';
import { Link nk nk } from "react-router-dom"

const orders = [
  { id: 'ORDS98956453', courseId: 10, email: 'ant@example.com', date: '2019-09-12', amount: 800 },
  { id: 'ORDS57717951', courseId: 14, email: 'jay@ischool.com', date: '2019-09-13', amount: 400 },
  { id: 'ORDS22968322', courseId: 10, email: 'mario@ischool.com', date: '2019-09-13', amount: 800 },
  { id: 'ORDS78666589', courseId: 10, email: 'ignou@ischool.com', date: '2019-09-19', amount: 800 },
];

export default function AdminDashboard() {
  return (
    <div className="admin-container">
      <aside className="sidebar">
        <h2>E-Learning</h2>
        <ul>
          <Link to="">Dashboard</Link>
          <Link to="" >Courses</Link>
          <Link to="" >Lessons</Link>
          <Link to="" >Students</Link >
          <Link to="" >Sell Report</Link >
          <Link to="" >Payment Status</Link >
          <Link to="">Feedback</Link >
          <Link to="" >Change Password</Link >
          <Link to="" >Logout</Link >
        </ul>
      </aside>

      <main className="dashboard-content">
        <div className="card-container">
          <div className="dashboard-card red">
            <FaBook />
            <h3>Courses</h3>
            <p>8</p>
            <button>View</button>
          </div>
          <div className="dashboard-card green">
            <FaUserGraduate />
            <h3>Students</h3>
            <p>9</p>
            <button>View</button>
          </div>
          <div className="dashboard-card blue">
            <FaCLink nk pboardLink nk st />
            <h3>Reports</h3>
            <p>4</p>
            <button>View</button>
          </div>
        </div>

        <h3 className="table-heading">Course Ordered</h3>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Course ID</th>
              <th>Student Email</th>
              <th>Order Date</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.courseId}</td>
                <td>{order.email}</td>
                <td>{order.date}</td>
                <td>{order.amount}</td>
                <td><button className="delete-btn"><FaTrash /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
