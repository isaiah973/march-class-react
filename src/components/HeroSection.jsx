const HeroSection = () => {
  return (
    <section className="bg-[#f5f7fa] h-[80vh] text-center flex justify-center items-center flex-col space-y-8">

      <p className="font-semibold text-gray-600">EMAIL MARKETING AND AUTOMATION PLATFORM</p>
      <h1 className="text-6xl font-bold">Email marketing that grows with you</h1>
      <p className="w-[35%]">
        Get the email tools you need today, with automation and AI that scale with you- all in one affordable subscription
      </p>

      <div className="flex flex-col space-y-4 items-center">
        <button className="bg-yellow-400 rounded-2xl w-fit py-2 font-bold borderr-2 border-yellow-500 px-8 hover:bg-blue-500 hover:text-white hover:border-blue-500">Start 30-day FREE trial</button>
        <span className="text-sm">Try us free | No credit card required | Cancel anytime</span>
      </div>
  
    </section>
  )
}

export default HeroSection;
