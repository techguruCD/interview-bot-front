import ChatBot from "@/components/ChatBot";
import Footer from "@/components/Footer";
import OverallProfile from "@/components/OverallProfile";

const PublicProfile = () => {
  return (
    <>
      <div className="mx-[20px] md:mx=[40px] lg:mx-[80px]">
        {/* <ChatBot /> */}
        <OverallProfile />
        <Footer />
      </div>
    </>
  );
};

export default PublicProfile;
