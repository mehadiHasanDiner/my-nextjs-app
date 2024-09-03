import Footer from "@/components/Shared/Footer";

const DashboardPage = ({ children }) => {
  return (
    <div>
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default DashboardPage;
