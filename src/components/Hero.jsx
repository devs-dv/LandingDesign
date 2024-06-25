import React from "react";

const Hero = () => {
  return (
    <div>
      <div>
        <div className="mx-auto max-w-screen-xl px-6 lg:px-8 relative">
          <div className="relative flex h-16 space-x-10 w-full">
            <div className="flex justify-start">
              <a className="flex flex-shrink-0 items-center" href="/">
                <img
                  className="block h-8 w-auto"
                  height={32}
                  src="https://www.svgrepo.com/show/303650/neo-logo.svg"
                />
              </a>
            </div>
            <div className="flex-shrink-0 flex px-2 py-3 items-center space-x-8 flex-1 justify-end justify-self-end ">
              <a
                className="text-gray-700 hover:text-lime-700 text-sm font-medium"
                href="/login"
              >
                Login
              </a>
              <a
                className="text-white bg-gray-800 hover:bg-gray-900 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm "
                href="/signup"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="relative py-16 flex justify-center px-4 sm:px-0">
            <div className="max-w-3xl text-center">
              <div className="pb-4">
                <span className="inline-flex items-center rounded-2xl bg-lime-100 px-4 py-1.5 text-xs sm:text-sm font-serif font-medium text-lime-700">
                  Unlock the potential of AI in education.
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 xl:text-6xl font-serif !leading-tight">
                Discover the future of teaching
              </h1>
              <p
                className="mt-4 text-lg sm:text-xl leading-8 text-gray-800 sm:px-16"
                style={{ whiteSpace: "pre-line" }}
              >
                Empower your classroom with cutting-edge AI technology. Whether
                it's lesson planning or creating interactive learning materials,
                our AI service has got you covered.
              </p>
              <div className="mt-8 flex w-full space-x-8 justify-center">
                <a href="/exercises">
                  <button className="inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none ring-2 ring-offset-2 ring-transparent ring-offset-transparent disabled:bg-gray-400 appearance-none text-white bg-lime-600 hover:bg-lime-700 focus:ring-lime-500 focus:ring-offset-white !px-12 !shadow-lg !rounded-full !text-base">
                    <p>Start now for free</p>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-2 py-10">
        <div id="features" className="mx-auto max-w-6xl">
          <p className="text-center text-base font-semibold leading-7 text-primary-500">
            Features
          </p>
          <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Education has never been so easy
          </h2>
          <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
            <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
              <img
                src="https://www.svgrepo.com/show/530438/ddos-protection.svg"
                alt=""
                className="mx-auto h-10 w-10"
              />
              <h3 className="my-3 font-display font-medium">
                Powered by ChatGPT
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                the cutting-edge language model that makes interactions a
                breeze. With its user-friendly interface, effortlessly tap into
                the world of AI-generated text.
              </p>
            </li>
            <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
              <img
                src="https://www.svgrepo.com/show/530442/port-detection.svg"
                alt=""
                className="mx-auto h-10 w-10"
              />
              <h3 className="my-3 font-display font-medium">Easy to use</h3>
              <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                Simply input your subject, click the generate button, and the
                result will appear in seconds just like magick.
              </p>
            </li>
            <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
              <img
                src="https://www.svgrepo.com/show/530444/availability.svg"
                alt=""
                className="mx-auto h-10 w-10"
              />
              <h3 className="my-3 font-display font-medium">Custom settings</h3>
              <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                We offer advanced customization. You can freely combine options
                like roles, languages, publish, tones, lengths, and formats.
              </p>
            </li>
            <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
              <a href="/pricing" className="group">
                <img
                  src="https://www.svgrepo.com/show/530440/machine-vision.svg"
                  alt=""
                  className="mx-auto h-10 w-10"
                />
                <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                  Free trial
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                  We offer a free trial service without login. We provide many
                  payment options including pay-as-you-go and subscription.
                </p>
              </a>
            </li>
            <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
              <a href="/templates" className="group">
                <img
                  src="https://www.svgrepo.com/show/530450/page-analysis.svg"
                  alt=""
                  className="mx-auto h-10 w-10"
                />
                <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                  90+ templates
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                  We offer many templates covering areas such as writing,
                  education, lifestyle and creativity to inspire your potential.{" "}
                </p>
              </a>
            </li>
            <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
              <a href="/download" className="group">
                <img
                  src="https://www.svgrepo.com/show/530453/mail-reception.svg"
                  alt=""
                  className="mx-auto h-10 w-10"
                />
                <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                  Use Anywhere
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                  Our product is compatible with multiple platforms including
                  Web, Chrome, Windows and Mac, you can use MagickPen anywhere.
                </p>
              </a>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
