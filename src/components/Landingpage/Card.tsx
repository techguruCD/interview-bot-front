const Card = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <div className="pt-[24px]">
        <div className="bg-black max-w-[285px] flex flex-col justify-between  h-[245px] rounded-lg p-2 ">
          <div className="p-4">
            <p className="text-purple-400 font-bold text-[24px] md:text-[28px] lg:text-[36px] leading-10">
              Get The Job{" "}
            </p>
            <p className="text-white capitalize font-medium text-[20px] md:text-[24px] leading-[30px]">
              Stand Out From Other Applicants
            </p>
          </div>
          <p className="text-white font-medium text-[20px] md:text-[24px]"></p>
        </div>
      </div>
      <div className="pb-0 md:pb-[24px]">
        <div className="bg-[#E16DDE] max-w-[388px] h-[230px]  rounded-lg p-2 ">
          <div className="p-4">
            <p className="text-white font-bold text-[24px] md:text-[28px] lg:text-[36px]">Show You Know</p>
            <p className="text-black text-[20px] md:text-[24px] flex flex-wrap font-medium leading-7 capitalize">
              Demonstrate your understanding of Artificial Intelligence
            </p>
          </div>
          <p className="text-white font-medium text-[20px] md:text-[24px]"></p>
        </div>
      </div>
      <div>
        <div className="bg-black max-w-[310px] lg:max-w-[300px] 2xl:max-w-[460px] h-[210px] mt-0 md:mt-[12px] rounded-lg p-2 flex flex-col justify-between ">
          <div className="p-4">
            <p className="text-pink-400 font-bold text-[24px]  md:text-[28px] lg:text-[36px] leading-10">
              Learn and Improve
            </p>
            <p className="text-white font-medium text-[20px] md:text-[24px] leading-[30px]">
              Know where your CV / resume could be improved
            </p>
          </div>
          <p className="text-pink-400 font-medium text-[20px] md:text-[24px]"></p>
        </div>
      </div>
      <div className="pl-[20px] md:pl-[75px] pb-0 md:pb-[24px]">
        <div className="bg-[#6355D8] max-w-[310px] lg:max-w-[310px] 2xl:max-w-[489px] h-[242px] rounded-lg p-2 flex flex-col justify-between ">
          <div className="p-4">
            <p className="text-black font-bold text-[24px]  md:text-[28px] lg:text-[36px] leading-10">
              Raise your Social Profile
            </p>
            <p className="text-white capitalize font-medium text-[20px] md:text-[24px] leading-7">
              Add it to your Linked in Profile to raise engagement
            </p>
          </div>
          <p className="text-black font-medium text-[20px] md:text-[24px]"></p>
        </div>
      </div>
      <div className="pt-0 md:pt-3">
        <div className="bg-black max-w-[487px] h-[253px] rounded-lg p-2 flex flex-col justify-between ">
          <div className="p-4">
            <p className="text-white font-bold mt-[12px] text-[24px] md:text-[28px] lg:text-[36px] leading-10">
              Have fun{" "}
            </p>
            <p className="text-[#E16DDE] capitalize font-medium text-[20px] md:text-[24px] leading-[30px]">
              Engage banter mode and send to your friends
            </p>
          </div>
          <p className="text-white font-medium text-[20px] md:text-[24px]"></p>
        </div>
      </div>
    </div>
  );
};

export default Card;
