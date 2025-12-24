import React from 'react';

const RecentPurchases = ({ data }) => {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <h3>Recent Purchases</h3>
      </div>
      
      <div className="table-responsive">
        <table className="purchases-table">
          <thead>
            <tr>
              <th>Person Name</th>
              <th>Course Name</th>
              <th>Price</th>
              <th>Purchase Date</th>
              <th>Payment type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className="person-name">{item.name}</td>
                <td className="course-name">{item.course}</td>
                <td className="price">{item.price}</td>
                <td className="date">{item.date}</td>
                <td className="payment-type">{item.type}</td>
                <td>
                  <button className="btn-details">View details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentPurchases;
