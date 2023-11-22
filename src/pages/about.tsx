import Footer from "@/components/Footer"
import Image from "next/image";
import Link from "next/link"
import logo from "../../public/images/logo.png";
import { useState } from "react";
import { useRouter } from "next/router";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";

const About = () => {
    const router = useRouter();
    const [active, setActive] = useState<number>(0);
    const [navbar, setNavbar] = useState(false);
    return (
        <>
            <div className="mx-[20px] md:mx=[40px] lg:mx-40">

                <div className="mb-8 flex justify-center lg:flex lg:flex-row lg:justify-center gap-20 relative">
                    <nav className={`w-full  ${navbar ? "bg-[#1d1326]" : "bg-[#f5f5f5]"} `}>
                        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-0">
                            <div>
                                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                                    <div className="flex mr-6 flex-row">
                                        <Image
                                            onClick={() => router.push("/")}
                                            src={logo}
                                            height={40}
                                            width={50}
                                            alt="logo"
                                            className="cursor-pointer"
                                        />
                                        <p className={`ml-[16px] flex items-center capitalize font-bold ${navbar ? "text-white" : "text-black"}`}>
                                            interview bot
                                        </p>
                                    </div>
                                    <div className="md:hidden">
                                        <button
                                            className="p-2 text-gray-700 rounded-md outline-none "
                                            onClick={() => setNavbar(!navbar)}
                                        >
                                            {navbar ? (
                                                <RxCross1 className={`${navbar ? "text-white" : "text-black"}`} />
                                            ) : (
                                                <AiOutlineMenu className="text-black" />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div
                                    className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}
                                >
                                    <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-right">
                                        <li>
                                            <Link
                                                className={`
                          font-bold text-[16px]
                            ${active} !== 1
                              ? " "
                              : "active underline"
                           ${navbar ? "text-white" : "text-black"}`}
                                                href="#home"
                                                onClick={() => {
                                                    setActive(1);
                                                }}
                                            >
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className={`
                        font-bold text-[16px]
                          ${active} !== 1
                            ? " "
                            : "active underline"
                         ${navbar ? "text-white" : "text-black"}`}
                                                href="/about"
                                                onClick={() => {
                                                    setActive(2);
                                                }}
                                            >
                                                About
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className={`
                   font-bold text-[16px]
                     ${active} !== 1
                       ? " "
                       : "active underline"
                    ${navbar ? "text-white" : "text-black"}`}
                                                href="#blog"
                                                onClick={() => {
                                                    setActive(3);
                                                }}
                                            >
                                                Blog
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className={`
                            font-bold text-[16px]
                              ${active} !== 1
                                ? " "
                                : "active underline"
                             ${navbar ? "text-white" : "text-black"}`}
                                                href="/login"
                                                onClick={() => {
                                                    setActive(4);
                                                }}
                                            >
                                                Login
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="mx-[20px] md:mx=[40px] lg:mx-[160px] bg-[#F5F5F5] ">
                <div className=" p-4 md:p-8">
                    <div>
                        <div className="wrapper flex flex-col md:flex md:flex-row ">

                            <div className="mt-4 w-full md:w-1/2"> {/* Use half width for the text on medium screens and larger */}
                                <p className="capitalize text-[20px] font-medium">Who made this bot?</p>
                                <div className="w-full border-[1px] border-[#333333]"></div>
                                <p className="">
                                    We are a small team of Australian Digital professionals who have worked together over the years, often for some considerable portions of time. Some of us are currently looking for new, full-time jobs. In the meantime, we are exploring the concept of a suite of new AI-related products. Each of these involves the use of Chatbots and/or ChatGPT to solve problems that existing Chatbot Products struggle with. Ultimately our goal is to help individuals, businesses, and have a bit of fun on the way. This Interview Bot is part of the research we're doing. It's deliberately the simplest version of the technology we could think of.
                                </p>
                            </div>

                            <div className="pt-0 md:pt-14 lg:pt-12 xl:pt-10 h-max-[280px] w-full md:w-1/2"> {/* Use half width for the image on medium screens and larger */}
                                <img className="h-[35vh] w-full object-cover" src="/images/aboutone.png" alt="We think having a working knowledge of AI tools, in your job applications is a useful attribute." />
                                <p className="text-center font-light">
                                    Our view is that, these days, having some knowledge of the latest AI tools will help you in your job hunt. <span className="font-extralight italic">(Microsoft Designer)</span>
                                </p>
                            </div>

                        </div>


                        <div className="flex flex-col xl:flex xl:flex-row">

                            <div className="w-auto">

                                <div className="my-4">

                                    <p className="font-medium text-[20px] capitalize ">

                                        Why we built this interview Chatbot
                                    </p>
                                    <p>

                                        We developed this Interview Chatbot partly for fun. I suggested to a friend that it might be interesting to start our AI journey with a simple bot. It&apos;s also designed to be something that our friends could use as part of their interview process.
                                        While we were building our Interview Bot, we thought people might like the concept of having their own Interview Chatbot. Looking online, there are a lot of people in the same boat; people fascinated by the technology which has been made available with <span className="cursor-pointer"><Link className="text-[#6355d8]" href="https://generativeai.net/">Generative AI</Link></span> and interested to learn about it. There are also a lot of people looking to stand out themselves during the interview process. As a result, in the requirements we gave to the developers, we generalized the build and enabled others to use it.
                                    </p>
                                    <p className="font-bold text-center">
                                        &quot;Build me an interview chatbot.&quot;

                                    </p>
                                </div>
                                <p>

                                    The first thing we did, when I wanted to build an interview Chatbot was what anyone would do. I Googled &apos;Build me an Interview Chatbot.” I didn&apos;t find anything commercially available to use.
                                </p>
                            </div>
                            <div className="flex h-[40vh] flex-col justify-center items-center" >
                                <img className="" src="/images/aboutwo.png" alt="People asked &quot;Build me an Interview Chatbot&quot;, so we did." />
                                <p className="text-center font-light ">
                                    When you asked for an Interview Chatbot, we built one. <span className="font-extralight italic">(Microsoft Designer)</span>
                                </p>
                            </div>
                        </div>



                        <p className="mt-4">
                            Building an Interview chatbot is not a novel idea. I&apos;ve seen plenty of YouTube videos, designed, mostly, I judged from their content, to appeal to developers. Each video <span><Link className="text-[#6355d8]" href="https://www.youtube.com/watch?v=RBnuhhmD21U">tutorial</Link></span> suggests an interview chatbot as the first step beyond &quot;Hello World&quot; in exploring the capabilities of Chatbots.
                        </p>
                        <div className="my-4">

                            <p className="font-medium capitalize">

                                &quot;How do I use ChatGPT and similar technology in a way which will actually affect the bottom line of my business?&quot;
                            </p>
                            <p>And yet, despite the fact that it is now several months since the public November 2022 launch of ChatGPT, there is still a palpable sense of &quot;How do I use this technology in a way which will actually affect the bottom line of my business?”
                                There&quot;s the strain of an adrenalin rush to &quot;Do Something&quot; and a frustrating practical feeling of &quot;Yes, but what?&quot; The technology appears to me to be impressive but not &quot;safe&quot;. It  <span><Link className="text-[#6355d8]" href="https://www.nytimes.com/2023/03/29/technology/ai-chatbots-hallucinations.html">hallucinates</Link></span> sometimes, what if it did that with a customer? What if regulation comes in just after I&quot;ve bought it. What if I lose my job to it?
                                We hope to help people work towards finding something they can do with this simple experiment and product.
                            </p>
                        </div>
                        <div className="my-4">

                            <p className="font-medium capitalize">It&apos;s been an interesting process </p>
                            <p>
                                It&apos;s been an interesting process learning about, building and deploying this chatbot. Initially, we thought it would be a small task. It turned in to a lot of work. Hiring the developer was not easy although, in the end we got a good team. There are a lot of developers who say they know all about the new AI LLMs (Large Language Models , like ChatGPT) and maybe they do. But there are not many developers with a lot of experience yet.
                                We hope you find use in the tool and the information we&quot;ve put on the site to help you learn what we know about Chatbots.
                                If you like the Interview Chatbot or, if you&quot;re as motivated as we are to find out more about the technology, get in touch and tell us what you think.

                            </p>
                        </div>
                        <div className="flex justify-center items-center my-6" >
                            <img src="/images/future.png" alt="The future of AI involves chatbots as an increasingly prevalent interface." />
                        </div>

                        <p className="text-center font-light mb-2">
                            We think chat interfaces and chatbots are going to be increasingly prevalent interfaces <span className="font-extralight italic">(Microsoft Designer)</span>
                        </p>
                        <div className="my-4">

                            <p className="font-medium capitalize">What&apos;s next for us?</p>
                            <p>
                                Our goal now is to use the code we&apos;ve developed and the understanding we&apos;ve come to of these AI chatbots to develop something useful for SMBs. We&quot;ve looked at the market and it seems that high end companies are well served with (what seem to us to be) expensive consultancy based solutions. There are also a lot of &quot;configure your own chatbot&quot; services. We think those options are too hard for most SMBs. Our next goal is to provide a simple chatbot which services the core requirements of SMBs in Australia, the USA and the UK and to develop a tool which does that. And we might have another consumer idea, too!
                            </p>
                        </div>
                        <div className="flex justify-center items-center">
                            <p><Link href={"mailto:Interviewbot38@gmail.com"}>Contact a professional for further information</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About