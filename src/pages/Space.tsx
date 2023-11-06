import Menu from "../components/Menu";
import img1 from "../../public/img/img_1.jpg.png";
import img2 from "../../public/img/img_2.jpg.png";
import img3 from "../../public/img/img_3.jpg.png";
import img4 from "../../public/img/img_4.jpg.png";
import img5 from "../../public/img/img_5.jpg.png";
import img6 from "../../public/img/img_6.jpg.png";
import img7 from "../../public/img/img_7.jpg.png";
import img8 from "../../public/img/img_8.jpg.png";
import img9 from "../../public/img/img_9.jpg.png";
import img10 from "../../public/img/img_10.jpg.png";
import img11 from "../../public/img/img_11.jpg.png";
import img12 from "../../public/img/img_12.jpg.png";
import map from "../../public/img/map.png";
import person from "../../public/img/person.png";
import person2 from "../../public/img/person_1.jpg.png";
import person3 from "../../public/img/person_2.jpg.png";
import person4 from "../../public/img/person_4.jpg.png";
import gal_1 from "../../public/img/gal_1.jpg.png";
import gal_2 from "../../public/img/gal_2.jpg.png";
import gal_3 from "../../public/img/gal_3.jpg.png";
import gal_4 from "../../public/img/gal_4.jpg.png";
import imagebulat from "../../public/img/imagebulat.png";
import smartphone from "../../public/smartphone.svg";
import marketing from "../../public/marketing.svg";
import monitor from "../../public/monitor.svg";
import apple from "../../public/apple.svg";
import photography from "../../public/photography.svg";
import arrowleft from "../../public/arrowleft.svg";
import arrowright from "../../public/arrowright.svg";
import Vector from "../components/Vector";
import SlideEnter from "../components/SlideEnter";
import SlideEnterOther from "../components/SlideEnterOther";
import SlideEnterSer from "../components/SlideEnterSer";

const Space = () => {
	return (
		<>
			<div className="w-[1140px] mx-auto font-romo">
				<nav className="w-full h-[78px] mb-[33px] flex justify-between items-center py-[20px]">
					<div className="text-2xl font-bold font-romo">
						Space<span className="text-red-500">.</span>
					</div>
					<div>
						<button>
							<Menu w={28} />
						</button>
					</div>
				</nav>

				<main>
					<SlideEnter>
						<div className="text-[40px] font-mulish w-fit ">
							Hey! I'm<span className="font-bold"> Space</span>
							<span className="text-red-500">.</span>
						</div>
					</SlideEnter>
					<SlideEnter>
						<div className="text-lg font-medium w-fit">
							A minimal, clean, and AJAX driven free portfolio template
							created by the fine folks at{" "}
							<span className="font-bold">Colorlib</span>.
						</div>
					</SlideEnter>
					<SlideEnter className="mt-[24px]">
						<button className=" py-[15px] px-[21px] bg-black transition-all text-white text-sm hover:bg-white hover:text-black border border-black">
							More free templates here
						</button>
					</SlideEnter>

					<div className="grid grid-cols-3 gap-x-[30px] mt-[128px]">
						<div>
							<SlideEnterOther className="mb-[30px]">
								<img src={img1} alt="" />
							</SlideEnterOther>
							<SlideEnterOther className="mb-[30px]">
								<img src={img2} alt="" />
							</SlideEnterOther>
							<SlideEnterOther className="mb-[30px]">
								<img src={img3} alt="" />
							</SlideEnterOther>
						</div>

						<div>
							<SlideEnterOther className="mb-[30px]">
								<img src={img4} alt="" />
							</SlideEnterOther>
							<SlideEnterOther className="mb-[30px]">
								<img src={img5} alt="" />
							</SlideEnterOther>
							<SlideEnterOther className="mb-[30px]">
								<img src={img12} alt="" />
							</SlideEnterOther>
							<SlideEnterOther className="mb-[30px]">
								<img src={img11} alt="" />
							</SlideEnterOther>
							<SlideEnterOther className="mb-[30px]">
								<img src={img9} alt="" />
							</SlideEnterOther>
						</div>

						<div>
							<SlideEnterOther className="mb-[30px]">
								<img src={img7} alt="" />
							</SlideEnterOther>
							<SlideEnterOther className="mb-[30px]">
								<img src={img8} alt="" />
							</SlideEnterOther>
							<SlideEnterOther className="mb-[30px]">
								<img src={img10} alt="" />
							</SlideEnterOther>
							<SlideEnterOther className="mb-[30px]">
								<img src={img6} alt="" />
							</SlideEnterOther>
						</div>
					</div>

					<div className="mt-[112px] mb-[45px] flex flex-col items-center">
						<SlideEnterSer className="text-[30px] font-bold">
							Services
						</SlideEnterSer>
						<SlideEnter className="text-[16px] mb-4">
							The skills to pay the bills.
						</SlideEnter>
						<SlideEnter>
							<Vector w={90} />
						</SlideEnter>
					</div>

					<div className="grid w-full grid-cols-3 ">
						<div>
							<div className="px-[15px] pb-[40px] pt-[10px]">
								<SlideEnter>
									<div className="relative mb-4 mt-2 ml-3 bg-red-500 rounded-full w-9 h-9">
										<div className="absolute bottom-0 right-0">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="48"
												height="48"
												id="laptop"
											>
												<path fill="none" d="M0 0h48v48H0z"></path>
												<path d="M40 36c2.21 0 3.98-1.79 3.98-4L44 10c0-2.21-1.79-4-4-4H8c-2.21 0-4 1.79-4 4v22c0 2.21 1.79 4 4 4H0c0 2.21 1.79 4 4 4h40c2.21 0 4-1.79 4-4h-8zM8 10h32v22H8V10zm16 28c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
											</svg>
										</div>
									</div>
								</SlideEnter>
								<SlideEnter>
									<strong className="font-mulish">Web Design</strong>
								</SlideEnter>
								<SlideEnter>
									<div className="text-sm text-center">
										Far far away, behind the word mountains, far from
										the countries Vokalia and Consonantia, there live
										the blind texts.
									</div>
								</SlideEnter>
							</div>
							<div className="px-[15px] pb-[40px] pt-[10px]">
								<SlideEnter>
									<div className="relative mb-4 mt-3 ml-3 bg-red-500 rounded-full w-9 h-9">
										<div className="absolute flex justify-end right-1 w-11 bottom-1">
											<img src={photography} alt="" />
										</div>
									</div>
								</SlideEnter>
								<SlideEnter>
									<strong className="font-mulish">Photography</strong>
								</SlideEnter>
								<SlideEnter>
									<div className="text-sm text-center">
										Far far away, behind the word mountains, far from
										the countries Vokalia and Consonantia, there live
										the blind texts.
									</div>
								</SlideEnter>
							</div>
						</div>

						<div>
							<div className="px-[15px] pb-[40px] pt-[10px]">
								<SlideEnter>
									<div className="relative mb-4 mt-3 ml-3 bg-red-500 rounded-full w-9 h-9">
										<div className="absolute right-0 flex justify-end w-11 bottom-1">
											<img src={marketing} alt="" />
										</div>
									</div>
								</SlideEnter>
								<SlideEnter>
									<strong className="font-mulish">Marketing</strong>
								</SlideEnter>
								<SlideEnter>
									<div className="text-sm text-center">
										Far far away, behind the word mountains, far from
										the countries Vokalia and Consonantia, there live
										the blind texts.
									</div>
								</SlideEnter>
							</div>
							<div className="px-[15px] pb-[40px] pt-[10px]">
								<SlideEnter>
									<div className="relative mb-4 mt-3 ml-3 bg-red-500 rounded-full w-9 h-9">
										<div className="absolute right-0 flex justify-end w-11 bottom-1">
											<img src={smartphone} alt="" />
										</div>
									</div>
								</SlideEnter>
								<SlideEnter>
									<strong className="font-mulish">
										App Development
									</strong>
								</SlideEnter>
								<SlideEnter>
									<div className="text-sm text-center">
										Far far away, behind the word mountains, far from
										the countries Vokalia and Consonantia, there live
										the blind texts.
									</div>
								</SlideEnter>
							</div>
						</div>

						<div>
							<div className="px-[15px] pb-[40px] pt-[10px]">
								<SlideEnter>
									<div className="relative mb-4 mt-4 ml-3 bg-red-500 rounded-full w-9 h-9">
										<div className="absolute right-0 flex justify-end w-11 bottom-1">
											<img src={apple} alt="" />
										</div>
									</div>
								</SlideEnter>
								<SlideEnter>
									<strong className="font-mulish">Branding</strong>
								</SlideEnter>
								<SlideEnter>
									<div className="text-sm text-center">
										Far far away, behind the word mountains, far from
										the countries Vokalia and Consonantia, there live
										the blind texts.
									</div>
								</SlideEnter>
							</div>
							<div className="px-[15px] pb-[40px] pt-[10px]">
								<SlideEnter>
									<div className="relative mb-4 mt-2 ml-3 bg-red-500 rounded-full w-9 h-9">
										<div className="absolute right-1 bottom-1">
											<svg
												width="40px"
												height="40px"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<g
													id="SVGRepo_bgCarrier"
													stroke-width="0"
												></g>
												<g
													id="SVGRepo_tracerCarrier"
													stroke-linecap="round"
													stroke-linejoin="round"
												></g>
												<g id="SVGRepo_iconCarrier">
													{" "}
													<path
														fill-rule="evenodd"
														clip-rule="evenodd"
														d="M17.0392 15.6244C18.2714 14.084 19.0082 12.1301 19.0082 10.0041C19.0082 5.03127 14.9769 1 10.0041 1C5.03127 1 1 5.03127 1 10.0041C1 14.9769 5.03127 19.0082 10.0041 19.0082C12.1301 19.0082 14.084 18.2714 15.6244 17.0392L21.2921 22.707C21.6828 23.0977 22.3163 23.0977 22.707 22.707C23.0977 22.3163 23.0977 21.6828 22.707 21.2921L17.0392 15.6244ZM10.0041 17.0173C6.1308 17.0173 2.99087 13.8774 2.99087 10.0041C2.99087 6.1308 6.1308 2.99087 10.0041 2.99087C13.8774 2.99087 17.0173 6.1308 17.0173 10.0041C17.0173 13.8774 13.8774 17.0173 10.0041 17.0173Z"
														fill="#0F0F0F"
													></path>{" "}
												</g>
											</svg>
										</div>
									</div>
								</SlideEnter>
								<SlideEnter>
									<strong className="font-mulish">
										Search Rangking
									</strong>
								</SlideEnter>
								<SlideEnter>
									<div className="text-sm text-center">
										Far far away, behind the word mountains, far from
										the countries Vokalia and Consonantia, there live
										the blind texts.
									</div>
								</SlideEnter>
							</div>
						</div>
					</div>

					<div className="mt-[112px] mb-[45px] w-[540px]">
						<SlideEnter className="text-[30px] font-bold">
							About
						</SlideEnter>
						<SlideEnter className="text-[16px] mb-4">
							Far far away, behind the word mountains, far from the
							countries Vokalia and Consonantia, there live the blind
							texts.
						</SlideEnter>
						<SlideEnter>
							<Vector w={90} />
						</SlideEnter>
					</div>

					<div className="grid w-full grid-cols-2">
						<div className="flex justify-center">
							<img src={person} alt="" />
						</div>

						<div className="px-16">
							<SlideEnter className="font-mulish text-[20px] font-bold mb-4">
								Bio
							</SlideEnter>
							<SlideEnter className="mb-4">
								Far far away, behind the word mountains, far from the
								countries Vokalia and Consonantia, there live the blind
								texts. Separated they live in Bookmarksgrove right at
								the coast of the Semantics, a large language ocean.
							</SlideEnter>
							<SlideEnter className="mb-14">
								A small river named Duden flows by their place and
								supplies it with the necessary regelialia. It is a
								paradisematic country, in which roasted parts of
								sentences fly into your mouth.
							</SlideEnter>

							<SlideEnter className="font-mulish text-[20px] font-bold mb-8">
								Work Experience
							</SlideEnter>

							<div className="grid grid-cols-2 gap-10">
								<div>
									<div className="flex gap-5 mb-3">
										<div className="w-4 pt-[6px]">
											<img src={monitor} alt="" />
										</div>
										<div>
											<SlideEnter className="font-bold font-mulish">
												Senior Web Designer
											</SlideEnter>
											<SlideEnter>XYZ Agency</SlideEnter>
											<SlideEnter className="text-[13px] text-[#AAAAAA]">
												2012-2014
											</SlideEnter>
										</div>
									</div>
									<div className="flex gap-5 mb-3">
										<div className="w-4 pt-[6px]">
											<img src={monitor} alt="" />
										</div>
										<div>
											<SlideEnter className="font-bold font-mulish">
												Senior Web Designer
											</SlideEnter>
											<SlideEnter>XYZ Agency</SlideEnter>
											<SlideEnter className="text-[13px] text-[#AAAAAA]">
												2012-2014
											</SlideEnter>
										</div>
									</div>
									<div className="flex gap-5 mb-3">
										<div className="w-4 pt-[6px]">
											<img src={monitor} alt="" />
										</div>
										<div>
											<SlideEnter className="font-bold font-mulish">
												Senior Web Designer
											</SlideEnter>
											<SlideEnter>XYZ Agency</SlideEnter>
											<SlideEnter className="text-[13px] text-[#AAAAAA]">
												2012-2014
											</SlideEnter>
										</div>
									</div>
								</div>

								<div>
									<div className="flex gap-5 mb-3">
										<div className="w-4 pt-[6px]">
											<img src={monitor} alt="" />
										</div>
										<div>
											<SlideEnter className="font-bold font-mulish">
												Senior Web Designer
											</SlideEnter>
											<SlideEnter>XYZ Agency</SlideEnter>
											<SlideEnter className="text-[13px] text-[#AAAAAA]">
												2012-2014
											</SlideEnter>
										</div>
									</div>
									<div className="flex gap-5 mb-3">
										<div className="w-4 pt-[6px]">
											<img src={monitor} alt="" />
										</div>
										<div>
											<SlideEnter className="font-bold font-mulish">
												Senior Web Designer
											</SlideEnter>
											<SlideEnter>XYZ Agency</SlideEnter>
											<SlideEnter className="text-[13px] text-[#AAAAAA]">
												2012-2014
											</SlideEnter>
										</div>
									</div>
									<div className="flex gap-5 mb-3">
										<div className="w-4 pt-[6px]">
											<img src={monitor} alt="" />
										</div>
										<div>
											<SlideEnter className="font-bold font-mulish">
												Senior Web Designer
											</SlideEnter>
											<SlideEnter>XYZ Agency</SlideEnter>
											<SlideEnter className="text-[13px] text-[#AAAAAA]">
												2012-2014
											</SlideEnter>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="mt-[112px] mb-[60px] w-full flex flex-col items-center">
						<SlideEnter className="text-[30px] font-bold">
							Skills
						</SlideEnter>
						<SlideEnter className="text-[16px] mb-4">
							The skills to pay the bills.
						</SlideEnter>
						<SlideEnter>
							<Vector w={90} />
						</SlideEnter>
					</div>

					<div className="grid grid-cols-4">
						<div className="flex flex-col items-center">
							<div className="relative">
								<div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
									98%
								</div>
								<img src={imagebulat} alt="" />
							</div>
							<div className="mt-5 text-sm">Wordpress</div>
						</div>

						<div className="flex flex-col items-center">
							<div className="relative">
								<div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
									98%
								</div>
								<img src={imagebulat} alt="" />
							</div>
							<div className="mt-5 text-sm">Web Design</div>
						</div>

						<div className="flex flex-col items-center">
							<div className="relative">
								<div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
									98%
								</div>
								<img src={imagebulat} alt="" />
							</div>
							<div className="mt-5 text-sm">Web/Mobile App</div>
						</div>

						<div className="flex flex-col items-center">
							<div className="relative">
								<div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
									98%
								</div>
								<img src={imagebulat} alt="" />
							</div>
							<div className="mt-5 text-sm">Photoshop</div>
						</div>
					</div>

					<div className="mt-[112px] mb-[60px] w-full flex flex-col items-center">
						<SlideEnter className="text-[30px] font-bold">
							Testimonials
						</SlideEnter>
						<SlideEnter className="text-[16px] mb-4">
							What clients say...
						</SlideEnter>
						<SlideEnter>
							<Vector w={90} />
						</SlideEnter>
					</div>

					<div className="relative flex gap-11">
						<button className="absolute w-5 transition-all top-1/2 -left-8 hover:-left-10">
							<img src={arrowleft} alt="" />
						</button>

						<div className="w-[356px] flex flex-col p-6 ease-in-out duration-500 border border-slate-100 transition-all hover:border-red-500 items-center">
							<div className="rounded-full">
								<img src={person2} alt="" />
							</div>
							<div className="mt-5 mb-3 font-bold font-mulish">
								James Smith
							</div>
							<div className="text-[#AAAAAA] text-[13px] mb-6">
								CEO & Co-Founder
							</div>
							<div className="text-sm text-center">
								Far far away, behind the word mountains, far from the
								countries Vokalia and Consonantia, there live the blind
								texts. Separated they live in Bookmarksgrove right at
								the coast of the Semantics, a large language ocean.
							</div>
						</div>

						<div className="w-[356px] flex flex-col p-6 ease-in-out duration-500 border border-slate-100 transition-all hover:border-red-500 items-center">
							<div className="rounded-full">
								<img src={person3} alt="" />
							</div>
							<div className="mt-5 mb-3 font-bold font-mulish">
								James Smith
							</div>
							<div className="text-[#AAAAAA] text-[13px] mb-6">
								CEO & Co-Founder
							</div>
							<div className="text-sm text-center">
								Far far away, behind the word mountains, far from the
								countries Vokalia and Consonantia, there live the blind
								texts. Separated they live in Bookmarksgrove right at
								the coast of the Semantics, a large language ocean.
							</div>
						</div>

						<div className="w-[356px] flex flex-col p-6 ease-in-out duration-500 border border-slate-100 transition-all hover:border-red-500 items-center">
							<div className="rounded-full">
								<img src={person4} alt="" />
							</div>
							<div className="mt-5 mb-3 font-bold font-mulish">
								James Smith
							</div>
							<div className="text-[#AAAAAA] text-[13px] mb-6">
								CEO & Co-Founder
							</div>
							<div className="text-sm text-center">
								Far far away, behind the word mountains, far from the
								countries Vokalia and Consonantia, there live the blind
								texts. Separated they live in Bookmarksgrove right at
								the coast of the Semantics, a large language ocean.
							</div>
						</div>

						<button className="absolute w-5 transition-all top-1/2 -right-8 hover:-right-10">
							<img src={arrowright} alt="" />
						</button>

						<div className="absolute flex justify-between -translate-x-1/2 left-1/2 -bottom-14 w-7">
							<button className="w-2 h-2 bg-gray-300 rounded-full"></button>
							<button className="w-2 h-2 bg-red-500 rounded-full"></button>
						</div>
					</div>

					<div className="mt-[112px] mb-[60px] w-full flex flex-col items-center">
						<SlideEnter className="text-[30px] font-bold">
							Blog Posts
						</SlideEnter>
						<SlideEnter className="text-[16px] mb-4">
							News & Updates
						</SlideEnter>
						<SlideEnter>
							<Vector w={90} />
						</SlideEnter>
					</div>

					<div className="grid grid-cols-4">
						<div className="px-4">
							<div className="overflow-hidden rounded-lg">
								<img src={gal_1} alt="" />
							</div>
							<div className="font-bold font-mulish text-lg mt-[30px]">
								Separated they live in
							</div>
							<div className="text-sm text-[#AAAAAA]">
								Aug 4, 2020 by{" "}
								<button className="text-black">Admin</button> in{" "}
								<button className="text-black">Web Design</button>
							</div>
						</div>

						<div className="px-4">
							<div className="overflow-hidden rounded-lg">
								<img src={gal_2} alt="" />
							</div>
							<div className="font-bold font-mulish text-lg mt-[30px]">
								Separated they live in
							</div>
							<div className="text-sm text-[#AAAAAA]">
								Aug 4, 2020 by{" "}
								<button className="text-black">Admin</button> in{" "}
								<button className="text-black">Web Design</button>
							</div>
						</div>

						<div className="px-4">
							<div className="overflow-hidden rounded-lg">
								<img src={gal_3} alt="" />
							</div>
							<div className="font-bold font-mulish text-lg mt-[30px]">
								Separated they live in
							</div>
							<div className="text-sm text-[#AAAAAA]">
								Aug 4, 2020 by{" "}
								<button className="text-black">Admin</button> in{" "}
								<button className="text-black">Web Design</button>
							</div>
						</div>

						<div className="px-4">
							<div className="overflow-hidden rounded-lg">
								<img src={gal_4} alt="" />
							</div>
							<div className="font-bold font-mulish text-lg mt-[30px]">
								Separated they live in
							</div>
							<div className="text-sm text-[#AAAAAA]">
								Aug 4, 2020 by{" "}
								<button className="text-black">Admin</button> in{" "}
								<button className="text-black">Web Design</button>
							</div>
						</div>
					</div>

					<div className="mt-[112px] mb-[60px] w-full flex flex-col items-center">
						<SlideEnter className="text-[30px] font-bold">
							Contact
						</SlideEnter>
						<SlideEnter className="text-[16px] mb-4">
							Available for work. Get in touch
						</SlideEnter>
						<SlideEnter>
							<Vector w={90} />
						</SlideEnter>
					</div>

					<div className="flex gap-10">
						<form action="">
							<div className="flex w-full gap-10 mb-3">
								<input
									className="flex-1 py-3 border-b border-black outline-none"
									type="text"
									placeholder="Firstname"
								/>
								<input
									className="flex-1 py-3 border-b border-black outline-none"
									type="text"
									placeholder="Lastname"
								/>
							</div>
							<input
								className="block w-full py-3 mb-3 border-b border-black outline-none"
								type="text"
								placeholder="Email address"
							/>
							<textarea
								className="w-full py-3 border-b border-black outline-none"
								placeholder="Write your message..."
								name=""
								id=""
								cols={30}
								rows={8}
							></textarea>

							<button className="mt-[24px] py-[15px] px-[21px] bg-black transition-all text-white text-sm hover:bg-white hover:text-black border border-black">
								Send Message
							</button>
						</form>

						<img src={map} alt="" />
					</div>
				</main>
			</div>

			<footer className="mt-32 h-[calc(90vh)] bg-[#222222] w-full">
				<div className="w-[1140px] mx-auto font-romo pt-[70px]">
					<div className="grid grid-cols-4">
						<div>
							<div className="font-mulish font-bold text-white mb-[30px]">
								Home
							</div>
							<button className="text-[#777777] mb-2 hover:text-white transition-all block">
								Colorlib
							</button>
							<button className="text-[#777777] mb-2 hover:text-white transition-all block">
								About us
							</button>
							<button className="text-[#777777] mb-2 hover:text-white transition-all block">
								Projects
							</button>
							<button className="text-[#777777] mb-2 hover:text-white transition-all block">
								Services
							</button>
							<button className="text-[#777777] mb-2 hover:text-white transition-all block">
								Terms
							</button>
							<button className="text-[#777777] mb-2 hover:text-white transition-all block">
								Privacy
							</button>
						</div>

						<div>
							<div className="font-mulish font-bold text-white mb-[30px]">
								Projects
							</div>
							<button className="text-[#777777] mb-2 hover:text-white transition-all block">
								HTML5
							</button>
							<button className="text-[#777777] mb-2 hover:text-white transition-all block">
								CSS3
							</button>
							<button className="text-[#777777] mb-2 hover:text-white transition-all block">
								Colorlib
							</button>
							<button className="text-[#777777] mb-2 hover:text-white transition-all block">
								Free Template
							</button>
							<button className="text-[#777777] mb-2 hover:text-white transition-all block">
								Wordpress Themes
							</button>
						</div>

						<div>
							<div className="font-mulish font-bold text-white mb-[30px]">
								Services
							</div>
							<button className="text-[#777777] mb-2 hover:text-white transition-all block">
								Colorlib
							</button>
							<button className="text-[#777777] mb-2 hover:text-white transition-all block">
								JQuery
							</button>
							<button className="text-[#777777] mb-2 hover:text-white transition-all block">
								Bootstrap
							</button>
							<button className="text-[#777777] mb-2 hover:text-white transition-all block">
								Freebies
							</button>
						</div>

						<div>
							<div className="font-mulish font-bold text-white mb-[30px]">
								Contact
							</div>
							<div className="mb-2 text-white">
								43 Raymouth Rd. Baltemoer, London 3910
							</div>
							<button className="text-[#777777] mb-2 hover:text-white transition-all block">
								+1(123)-456-7890
							</button>
							<button className="text-[#777777] mb-2 hover:text-white transition-all block">
								+1(123)-456-7890
							</button>
							<button className="text-[#777777] mb-3">
								info@mydomain.com
							</button>

							<div className="font-bold text-white font-mulish">
								Connect
							</div>

							<div className="my-[30px] flex gap-3">
								<div className="w-[30px] h-[30px] bg-red-400 rounded-full"></div>
								<div className="w-[30px] h-[30px] bg-red-400 rounded-full"></div>
								<div className="w-[30px] h-[30px] bg-red-400 rounded-full"></div>
								<div className="w-[30px] h-[30px] bg-red-400 rounded-full"></div>
								<div className="w-[30px] h-[30px] bg-red-400 rounded-full"></div>
								<div className="w-[30px] h-[30px] bg-red-400 rounded-full"></div>
							</div>
						</div>
					</div>

					<div className="mt-24 text-[#AAAAAA] text-center">
						Copyright ©2023 All rights reserved | This template is made
						with by ❤ Colorlib
					</div>
				</div>
			</footer>
		</>
	);
};

export default Space;
