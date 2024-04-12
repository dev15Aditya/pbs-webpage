import React, { useState } from 'react';

const Card = ({ page }) => {
  const content = [
    {
      title: 'Our Purpose',
      text: 'We are committed to empowering our clients by providing exceptional brokerage services that enable informed decision making and strategic trading in the commodities market.',
    },
    {
      title: 'Our Values',
      text: {
        'Client Centric':
          'We place our clients at the forefront of everything we do.',
        Integrity:
          'Our commitment to integrity ensures that we always act in the best interests of our clients and for the longevity of the business.',
        Expertise:
          'We pride ourselves on the depth of knowledge and experience we bring to every aspect of our work.',
        Innovation:
          'By embracing innovation, we are committed to staying ahead of the curve, pioneering new paths and shaping the future of our industry.',
        Sustainability:
          'Committing to environmentally responsible practices and contributing to social and community well-being.',
      },
    },
    {
      title: 'Our Vision',
      text: 'To be the trusted partner of choice for our clients globally, recognised for our expertise, unparalleled support and unwavering commitment to their success.',
    },
    {
      title: 'Regulatory Compliance',
      text: 'The SFA is available',
    },
  ];

  const currentPageContent = content[page - 1];

  return (
    <div className="h-[55vh] mt-5 md:mt-0 md:h-[90%]">
      <h1 className="text-[28px] tracking-tighter leading-[130%] font-sans font-semibold text-[#f8f8f8]">
        {currentPageContent.title}
      </h1>
      {page === 4 ? (
        <>
          <p className="text-[20px] text-left text-[#808080] tracking-tighter leading-[130%] font-[500] mt-3">
            The Company is exempted by the Monetary Authority of Singapore from
            requirement to hold a Capital Markets Services (“CMS”) licence for
            trading in futures contracts. <br />{' '}
            <span className="hidden md:block">
              {' '}
              <br />
            </span>{' '}
            The Company shall only have customers who are within the meaning as
            defined in section 4A(1)(a), or 4A(1)(b) or 4A(1)(c) of the
            Securities and Futures Act 2001 (“SFA”).
            <br />{' '}
            <span className="hidden md:block">
              {' '}
              <br />
            </span>
            {currentPageContent.text} &nbsp;
            <a
              href="https://sso.agc.gov.sg/Acts-Supp/42-2001/Published/20021231?DocDate=20011203"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
          </p>
        </>
      ) : page === 2 ? (
        <div className=" overflow-auto h-[230px] md:h-[200px]">
          {Object.entries(currentPageContent.text).map(([key, value]) => (
            <div key={key}>
              <h2 className="font-semibold text-[#FFFFFF] text-[24px] mt-4">
                {key}
              </h2>
              <p className="text-[20px] text-left text-[#808080] tracking-tighter leading-[130%] font-[500]">
                {value}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-[20px] mt-3 text-left text-[#808080] tracking-tighter leading-[130%] font-[500]">
          {currentPageContent.text}
        </p>
      )}
    </div>
  );
};

const AboutUs = () => {
  const [currPage, setCurrPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrPage(page);
  };

  // useEffect(() => {
  //   // Disable vertical scrolling on the entire page
  //   document.body.style.overflowY = 'hidden';

  //   // Re-enable scrolling when the component unmounts
  //   return () => {
  //     document.body.style.overflowY = 'auto';
  //   };
  // }, []);

  return (
    <div className="px-6 pb-5 mt-5 md:px-10 max-w-full mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-start w-full md:h-[88vh]">
        <img src="./about.jpg" alt="" className="md:w-1/2" />
        <div className="md:w-1/2 h-[380px] md:h-[380px] flex flex-col justify-between md:ml-5 md:py-8">
          <Card page={currPage} />

          <div className="flex justify-center">
            <button
              onClick={() => handlePageChange(1)}
              className={`${
                currPage === 1 ? 'font-bold ' : 'font-normal'
              } text-white px-4 py-2 rounded-full mr-2`}
            >
              1
            </button>

            <button
              onClick={() => handlePageChange(2)}
              className={`${
                currPage === 2 ? 'font-bold ' : 'font-normal'
              } text-white px-4 py-2 rounded-full mr-2`}
            >
              2
            </button>

            <button
              onClick={() => handlePageChange(3)}
              className={`${
                currPage === 3 ? 'font-bold ' : 'font-normal'
              } text-white px-4 py-2 rounded-full mr-2`}
            >
              3
            </button>
            <button
              onClick={() => handlePageChange(4)}
              className={`${
                currPage === 4 ? 'font-bold ' : 'font-normal'
              } text-white px-4 py-2 rounded-full mr-2`}
            >
              4
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
