import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import StatCard from '../../components/StatCard/StatCard';
import RevenueTrend from '../../components/Charts/RevenueTrend';
import RevenueBreakdown from '../../components/Charts/RevenueBreakdown';
import StudentDemographics from '../../components/Charts/StudentDemographics';
import EnrollmentTrends from '../../components/Charts/EnrollmentTrends';
import ConversionFunnel from '../../components/Charts/ConversionFunnel';
import DailyActiveLearners from '../../components/Charts/DailyActiveLearners';
import LessonCompletionTrends from '../../components/Charts/LessonCompletionTrends';
import GeographicDistribution from '../../components/Charts/GeographicDistribution';
import DevicePlatformUsage from '../../components/Charts/DevicePlatformUsage';
import RecentPurchases from '../../components/Charts/RecentPurchases';
import TopSellingCourses from '../../components/Charts/TopSellingCourses';
import CourseCompletionStatus from '../../components/Charts/CourseCompletionStatus';
import dashboardData from '../../data/dashboardData.json';
import '../../components/Charts/Charts.css';
import '../../components/Charts/ChartsNew.css';
import '../../components/Charts/ChartsExtra.css';
import './Dashboard.css';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchData = () => {
      setTimeout(() => {
        setData(dashboardData);
        setLoading(false);
      }, 500);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="loading">Loading Dashboard...</div>;
  }

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <div className="dashboard-container">
          <Header user={data.user} currentDate={data.currentDate} />

          <div className="stats-grid">
            {data.stats.map((stat) => (
              <StatCard key={stat.id} {...stat} />
            ))}
          </div>

          <div className="charts-grid-row-1">
            <div className="chart-col-wide">
              <RevenueTrend data={data.revenueTrend} />
            </div>
            <div className="chart-col-narrow">
              <RevenueBreakdown data={data.revenueBreakdown} />
            </div>
          </div>

          <div className="charts-grid-row-2">
            <div className="chart-col-narrow">
              <StudentDemographics data={data.studentDemographics} />
            </div>
            <div className="chart-col-wide">
              <EnrollmentTrends data={data.enrollmentTrends} />
            </div>
          </div>

          <div className="charts-grid-row-sales">
            <div className="chart-col-wide">
              <TopSellingCourses data={data.topSellingCourses} />
            </div>
            <div className="chart-col-narrow">
              <CourseCompletionStatus data={data.courseCompletionStatus} />
            </div>
          </div>

          <div className="charts-grid-row-3">
            <div className="chart-col-full">
              <ConversionFunnel data={data.conversionFunnel} />
            </div>
          </div>

          <div className="charts-grid-row-4">
            <div className="chart-col-half">
              <DailyActiveLearners data={data.dailyActiveLearners} />
            </div>
            <div className="chart-col-half">
              <LessonCompletionTrends data={data.lessonCompletionTrends} />
            </div>
          </div>

          <div className="charts-grid-row-5">
            <div className="chart-col-half">
              <GeographicDistribution data={data.geographicDistribution} />
            </div>
            <div className="chart-col-half">
              <DevicePlatformUsage data={data.deviceUsage} />
            </div>
          </div>

          <div className="charts-grid-row-6">
            <div className="chart-col-full">
              <RecentPurchases data={data.recentPurchases} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
