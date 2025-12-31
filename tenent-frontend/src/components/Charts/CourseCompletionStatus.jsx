import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Award } from 'lucide-react';

const CourseCompletionStatus = ({ data }) => {
    return (
        <div className="chart-card" style={{ minHeight: '536px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="chart-header">
                <div>
                    <h3>Course Completion Status</h3>
                    <p className="subtitle">Overall student progress</p>
                </div>
                <div className="icon-action green">
                    <Award size={18} />
                </div>
            </div>

            <div className="completion-chart-container">
                <div className="completion-donut">
                    <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                            <Pie
                                data={data.status}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={0}
                                dataKey="value"
                                stroke="none"
                            >
                                {data.status.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{
                                    borderRadius: '8px',
                                    border: 'none',
                                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                                    fontSize: '12px'
                                }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className="completion-stats">
                    {data.status.map((item, index) => (
                        <div key={index} className="completion-stat-item">
                            <div className="stat-dot-label">
                                <span className="dot" style={{ backgroundColor: item.color }}></span>
                                <span className="stat-label">{item.name}</span>
                            </div>
                            <span className="stat-value">{item.value}</span>
                            <span className="stat-percentage">{item.percentage} of total</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CourseCompletionStatus;
