import React from 'react';
import { ArrowUpRight, IndianRupee } from 'lucide-react';

const RevenueBreakdown = ({ data }) => {
  return (
    <div className="chart-card">
      <div className="chart-header no-border">
        <div>
          <h3>Revenue Breakdown</h3>
          <p className="subtitle">By revenue source</p>
        </div>
      </div>

      <div className="breakdown-summary">
        <div className="summary-content">
          <span className="label">TOTAL REVENUE</span>
          <div className="value-row">
            <span className="currency">₹</span>
            <span className="amount">{data.totalRevenue.replace('₹', '')}</span>
          </div>
          <div className="growth-text">
            <ArrowUpRight size={14} />
            <span>{data.quarterGrowth}</span>
          </div>
        </div>
      </div>

      <div className="breakdown-list">
        {data.sources.map((source, index) => (
          <div key={index} className="breakdown-item">
            <div className="item-header">
              <div className="item-title">
                <div className="icon-box">
                  <IndianRupee size={14} />
                </div>
                <span>{source.name}</span>
              </div>
              <span className="item-amount">{source.amount}</span>
            </div>
            <div className="progress-bar-bg">
              <div 
                className="progress-bar-fill" 
                style={{width: `${source.percentage}%`}}
              ></div>
            </div>
            <span className="item-percentage">{source.percentage}% of total</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueBreakdown;
