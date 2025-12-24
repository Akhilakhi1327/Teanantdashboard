import React from 'react';
import { Users, Eye, ShoppingCart, CreditCard, IndianRupee, ArrowDown } from 'lucide-react';

const iconMap = {
  Users,
  Eye,
  ShoppingCart,
  CreditCard,
  IndianRupee
};

const ConversionFunnel = ({ data }) => {
  return (
    <div className="chart-card funnel-card">
      <div className="chart-header">
        <div>
          <h3>Conversion Funnel</h3>
          <p className="subtitle">User journey from visit to purchase</p>
        </div>
        <div className="conversion-badge">
          <span className="label">Overall Conversion</span>
          <span className="value">{data.overallConversion}</span>
        </div>
      </div>

      <div className="funnel-steps">
        {data.steps.map((step, index) => {
          const IconComponent = iconMap[step.icon] || Users;
          return (
            <div key={index} className="funnel-step">
              <div className="step-info">
                <div className="step-icon-wrapper">
                  <IconComponent size={18} />
                </div>
                <div className="step-details">
                  <span className="step-label">{step.label}</span>
                  <span className="step-stats">{step.users} users • {step.percentage}% of total</span>
                </div>
              </div>
              
              <div className="step-visual">
                <div className="progress-bar-bg">
                  <div 
                    className="progress-bar-fill dark-green" 
                    style={{width: `${step.percentage}%`}}
                  ></div>
                </div>
                {step.drop && (
                  <div className="drop-badge">
                    <ArrowDown size={12} />
                    <span>{step.drop}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="optimization-box">
        <span className="opt-title">OPTIMIZATION OPPORTUNITY</span>
        <p>{data.optimization.text}</p>
      </div>
    </div>
  );
};

export default ConversionFunnel;
