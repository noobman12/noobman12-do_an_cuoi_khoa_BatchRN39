import bookIcon from "../assets/icon/comic_book-icon.png";
import databaseIcon from "../assets/icon/database-icon.png";
import detectiveBookIcon from "../assets/icon/detective_book-icon.png";
import graphicNovelIcon from "../assets/icon/graphic_novel-icon.png";
import historicalBookIcon from "../assets/icon/historical_book-icon.png";
import horrorPaperIcon from "../assets/icon/horror_paper-icon.png";
import about1 from "../assets/img/about-1.png";
import about1_2 from "../assets/img/about-1_2.png";
import about2 from "../assets/img/about-2.png";
import about2_2 from "../assets/img/about-2_2.png";
import avatar1 from "../assets/img/avatar_1.png";
import avatar2 from "../assets/img/avatar_2.png";
import avatar3 from "../assets/img/avatar_3.png";
import banner_1 from "../assets/img/banner_1.png";
import banner2 from "../assets/img/banner_2.png";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

const PlayfairDisplayFont = styled.h2`
  font-family: "Playfair Display", serif;
`;

const RalewayFont = styled.p`
  font-family: "Raleway", sans-serif;
`;

const AboutPages = () => {
  const [comicIconHover, setComicIconHover] = useState(false);
  const [databaseIconHover, setDatabaseIconHover] = useState(false);
  const [historicalIconHover, setHistoricalIconHover] = useState(false);
  const [horrorIconHover, setHorrorIconHover] = useState(false);
  const [detectiveIconHover, setDetectiveIconHover] = useState(false);
  const [graphicIconHover, setGraphicIconHover] = useState(false);

  const [aboutImgHover, setAboutImgHover] = useState(false);
  const [about2ImgHover, setAbout2ImgHover] = useState(false);
  const iconContainerStyle = {
    transition: "transform 0.5s ease",
  };
  const imageStyle: object = {
    position: "absolute",

    transition: "transform 0.7s ease, opacity 0.7s ease",
  };
  const isMobile = useMediaQuery({ query: "(max-width: 767px" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1180px)",
  });
  return (
    <div className='about'>
      {isMobile ? (
        <div>
          <div
            className='banner pt-12 pb-12 relative'
            style={{
              background: `url(${banner_1}) `,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "51% 12%",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                backgroundColor: "rgba(158, 155, 155, 0.5)",
              }}
            />
            <div
              style={{
                position: "relative",
                color: "white",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <PlayfairDisplayFont className='text-center font-medium text-[35px] text-white mb-1'>
                About Us
              </PlayfairDisplayFont>
              <RalewayFont className='uppercase text-center font-medium text-[11px] text-white'>
                home / about us
              </RalewayFont>
            </div>
          </div>
          <div className='trending_books'>
            <div className='trending_head_section text-center mt-10 mb-12'>
              <div className='trending_title'>
                <PlayfairDisplayFont className='capitalize text-[22px] font-medium mb-4'>
                  check out our trending books
                </PlayfairDisplayFont>
              </div>
              <div className='trending_subtitle'>
                <RalewayFont className='text-[7px] font-semibold'>
                  Sem fringilla ut morbi tincidunt augue interdum velit euismod
                  Odio facilisis mauris sit amet massa vitae <br /> tortor
                  condimentum risus nullam eget felis eget nunc.
                </RalewayFont>
              </div>
            </div>

            <main className=' my-8 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 gap-2 mx-2'>
              {/* Comic Book  */}
              <div
                style={iconContainerStyle}
                onMouseEnter={() => setComicIconHover(true)}
                onMouseLeave={() => setComicIconHover(false)}
              >
                <center>
                  <img
                    src={bookIcon}
                    alt='book-icon'
                    width={35}
                    style={{
                      transform: comicIconHover
                        ? "translateY(-10px)"
                        : "translateY(0)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                  <PlayfairDisplayFont className='capitalize text-[13px] mt-4 mb-2'>
                    comic book collection
                  </PlayfairDisplayFont>
                  <RalewayFont className='text-[8px] font-medium'>
                    Etiam tempor orci eu lobortis elementum nibh <br /> tellus
                    vestibulum lorem sed risus ultricies.
                  </RalewayFont>
                </center>
              </div>
              {/* Database  */}
              <div
                style={iconContainerStyle}
                onMouseEnter={() => setDatabaseIconHover(true)}
                onMouseLeave={() => setDatabaseIconHover(false)}
              >
                <center>
                  <img
                    src={databaseIcon}
                    width={20}
                    style={{
                      transform: databaseIconHover
                        ? "translateY(-10px)"
                        : "translateY(0)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                  <PlayfairDisplayFont className='capitalize text-[13px] mt-[25px] mb-2'>
                    fantastic database collection
                  </PlayfairDisplayFont>
                  <RalewayFont className='text-[8px]'>
                    Arcu vitae elementum curabitur vitae nunc non <br /> enim
                    praesent elementum facilisis leo vel.
                  </RalewayFont>
                </center>
              </div>
              {/* Historical Book  */}
              <div
                style={iconContainerStyle}
                onMouseEnter={() => setHistoricalIconHover(true)}
                onMouseLeave={() => setHistoricalIconHover(false)}
              >
                <center>
                  <img
                    src={historicalBookIcon}
                    width={26}
                    style={{
                      transform: historicalIconHover
                        ? "translateY(-10px)"
                        : "translateY(0)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                  <PlayfairDisplayFont className='capitalize text-[13px] mt-5 mb-2'>
                    historical book collection
                  </PlayfairDisplayFont>
                  <RalewayFont className='text-[8px] mb-5'>
                    Qnim sed faucibus augue eget turpis pulvinar <br />{" "}
                    elementum integer enim neque volutpat.
                  </RalewayFont>
                </center>
              </div>
              {/* Horror Paper  */}
              <div
                style={iconContainerStyle}
                onMouseEnter={() => setHorrorIconHover(true)}
                onMouseLeave={() => setHorrorIconHover(false)}
              >
                <center>
                  <img
                    src={horrorPaperIcon}
                    width={24}
                    style={{
                      transform: horrorIconHover
                        ? "translateY(-10px)"
                        : "translateY(0)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                  <PlayfairDisplayFont className='capitalize text-[13px] mt-4 mb-2'>
                    horror paper collection
                  </PlayfairDisplayFont>
                  <RalewayFont className='text-[8px]'>
                    Pellentesque dignissim enim sit amet <br /> venenatis
                    malesuada proin libero nunc <br /> consequat.
                  </RalewayFont>
                </center>
              </div>
              {/* Detective Book  */}
              <div
                style={iconContainerStyle}
                onMouseEnter={() => setDetectiveIconHover(true)}
                onMouseLeave={() => setDetectiveIconHover(false)}
              >
                <center>
                  <img
                    src={detectiveBookIcon}
                    width={24}
                    style={{
                      transform: detectiveIconHover
                        ? "translateY(-10px)"
                        : "translateY(0)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                  <PlayfairDisplayFont className='capitalize text-[13px] mt-5 mb-2'>
                    detective book collection
                  </PlayfairDisplayFont>
                  <RalewayFont className='text-[8px]'>
                    Amet justo donec enim diam vulputate ut <br /> pharetra
                    faucibus pulvinar elementum integer <br /> enim.
                  </RalewayFont>
                </center>
              </div>
              {/* Graphic Novel  */}
              <div
                style={iconContainerStyle}
                onMouseEnter={() => setGraphicIconHover(true)}
                onMouseLeave={() => setGraphicIconHover(false)}
              >
                <center>
                  <img
                    src={graphicNovelIcon}
                    width={24}
                    style={{
                      transform: graphicIconHover
                        ? "translateY(-10px)"
                        : "translateY(0)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                  <PlayfairDisplayFont className='capitalize text-[13px] mt-6 mb-2'>
                    graphic novel collection
                  </PlayfairDisplayFont>
                  <RalewayFont className='text-[8px]'>
                    Bibendum neque egestas congue quisque <br /> egestas vitae
                    semper quis lectus nulla at <br /> volutpat.
                  </RalewayFont>
                </center>
              </div>
            </main>
            {/* Banner  */}
            <center>
              <section className=' grid grid-cols-2 sm:grid-cols-1 gap-1 mt-10'>
                <div className='relative '>
                  <img
                    className='h-[150px] w-[160px] ml-4'
                    src={about1}
                    alt=''
                    style={{
                      ...(imageStyle as object),
                      transform: aboutImgHover
                        ? "translate(0, 0)"
                        : "translate(0, 0)",
                    }}
                    onMouseEnter={() => setAboutImgHover(true)}
                    onMouseLeave={() => setAboutImgHover(false)}
                  />
                  <img
                    className='h-[150px] w-[160px] ml-4'
                    src={about1_2}
                    alt=''
                    style={{
                      ...(imageStyle as object),
                      opacity: aboutImgHover ? 1 : 0,
                      transform: aboutImgHover
                        ? "translate(8px, 10px)"
                        : "translate(0, 0)",
                    }}
                    onMouseEnter={() => setAboutImgHover(true)}
                    onMouseLeave={() => setAboutImgHover(false)}
                  />
                  <p
                    style={{ position: "relative", zIndex: 1 }}
                    className='text-[5px]  mt-[170px]'
                  >
                    Ac feugiat sed lectus vestibulum mattis ullamcorper velit
                    sed risus nec <br /> feugiat in fermentum cras tincidunt
                    lobortis feugiat vivamus morbi quis <br /> commodo odio.
                  </p>
                </div>
                <div className='relative ml-2'>
                  <img
                    className='h-[150px] w-[160px]'
                    src={about2}
                    alt=''
                    style={{
                      ...(imageStyle as object),
                      transform: about2ImgHover
                        ? "translate(0, 0)"
                        : "translate(0, 0)",
                    }}
                    onMouseEnter={() => setAbout2ImgHover(true)}
                    onMouseLeave={() => setAbout2ImgHover(false)}
                  />
                  <img
                    className='h-[150px] w-[160px]'
                    src={about2_2}
                    alt=''
                    style={{
                      ...(imageStyle as object),
                      opacity: about2ImgHover ? 1 : 0,
                      transform: about2ImgHover
                        ? "translate(8px, 10px)"
                        : "translate(0, 0)",
                    }}
                    onMouseEnter={() => setAbout2ImgHover(true)}
                    onMouseLeave={() => setAbout2ImgHover(false)}
                  />
                  <p
                    style={{ position: "relative", zIndex: 1 }}
                    className='text-[5px] mr-5 mt-[170px]'
                  >
                    Ac feugiat sed lectus vestibulum mattis ullamcorper velit
                    sed risus nec <br /> feugiat in fermentum cras tincidunt
                    lobortis feugiat vivamus morbi quis <br /> commodo odio.
                  </p>
                </div>
              </section>
            </center>
            <div className=' about_banner_2'>
              <img
                className='w-[1020px] h-[190px] mt-[40px]'
                src={banner2}
                alt=''
              />
            </div>
            <section className='team'>
              <div>
                <div className='team_title text-center mt-10 mb-5'>
                  <PlayfairDisplayFont className='capitalize text-[22px] font-medium mb-4'>
                    meet our team
                  </PlayfairDisplayFont>
                  <RalewayFont className='text-[8px] font-semibold'>
                    Dignissim cras tincidunt lobortis feugiat amet commodo nulla
                    facilisi nullam vehicula euismod in <br /> pellentesque
                    massa placerat.
                  </RalewayFont>
                </div>
                <div className='team_card'>
                  <div className='grid grid-cols-1 sm:grid-cols-3'>
                    <center>
                      <div className='bg-white p-4 relative mb-5'>
                        <div className='relative'>
                          <img
                            src={avatar1}
                            width={250}
                            height={250}
                            alt=''
                            className='rounded-t-lg'
                          />
                          <div className='absolute bottom-0 left-0 right-0 bg-[#0B51BB] bg-opacity-60 text-white p-3 ml-14 mr-14'>
                            <center>
                              <PlayfairDisplayFont className='text-xl font-bold'>
                                Jessika
                              </PlayfairDisplayFont>
                              <PlayfairDisplayFont className='text-white'>
                                Customer Support
                              </PlayfairDisplayFont>
                            </center>
                          </div>
                        </div>
                      </div>
                      <div className='bg-white p-4 relative'>
                        <div className='relative mb-5'>
                          <img
                            src={avatar2}
                            width={250}
                            height={250}
                            alt=''
                            className='rounded-t-lg'
                          />
                          <div className='absolute bottom-0 left-0 right-0 bg-[#0B51BB] bg-opacity-60 text-white p-4  ml-14 mr-14'>
                            <center>
                              <PlayfairDisplayFont className='text-xl font-bold'>
                                Geoge
                              </PlayfairDisplayFont>
                              <PlayfairDisplayFont className='text-white'>
                                Manager
                              </PlayfairDisplayFont>
                            </center>
                          </div>
                        </div>
                      </div>
                      <div className='bg-white p-4 relative'>
                        <div className='relative'>
                          <img
                            src={avatar3}
                            width={250}
                            height={250}
                            alt=''
                            className='rounded-t-lg'
                          />
                          <div className='absolute bottom-0 left-0 right-0 bg-[#0B51BB] bg-opacity-60 text-white p-4  ml-14 mr-14'>
                            <center>
                              <PlayfairDisplayFont className='text-xl font-bold'>
                                Lisha
                              </PlayfairDisplayFont>
                              <PlayfairDisplayFont className='text-white'>
                                CEO
                              </PlayfairDisplayFont>
                            </center>
                          </div>
                        </div>
                      </div>
                    </center>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      ) : isTablet ? (
        <div>
          <div
            className='banner pt-12 pb-12 relative'
            style={{
              background: `url(${banner_1}) `,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "52% 12%",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                backgroundColor: "rgba(158, 155, 155, 0.5)",
              }}
            />
            <div
              style={{
                position: "relative",
                color: "white",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <PlayfairDisplayFont className='text-center font-medium text-[35px] text-white mb-1'>
                About Us
              </PlayfairDisplayFont>
              <RalewayFont className='uppercase text-center font-medium text-[11px] text-white'>
                home / about us
              </RalewayFont>
            </div>
          </div>

          <div className='trending_books'>
            <div className='trending_head_section text-center mt-14 mb-12'>
              <div className='trending_title'>
                <PlayfairDisplayFont className='capitalize text-[28px] font-medium mb-4'>
                  check out our trending books
                </PlayfairDisplayFont>
              </div>
              <div className='trending_subtitle'>
                <RalewayFont className='text-[12px] font-semibold'>
                  Sem fringilla ut morbi tincidunt augue interdum velit euismod
                  Odio facilisis mauris sit amet massa vitae <br /> tortor
                  condimentum risus nullam eget felis eget nunc.
                </RalewayFont>
              </div>
            </div>

            <main className='mx-[90px] my-8 grid  grid-cols-2 sm:grid-cols-1 md:grid-cols-3 gap-9 '>
              {/* Comic Book  */}
              <div
                style={iconContainerStyle}
                onMouseEnter={() => setComicIconHover(true)}
                onMouseLeave={() => setComicIconHover(false)}
              >
                <center>
                  <img
                    src={bookIcon}
                    alt='book-icon'
                    width={38}
                    style={{
                      transform: comicIconHover
                        ? "translateY(-10px)"
                        : "translateY(0)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                  <PlayfairDisplayFont className='capitalize text-[21px] mt-5 mb-2'>
                    comic book collection
                  </PlayfairDisplayFont>
                  <RalewayFont className='text-[8px] font-meidum'>
                    Etiam tempor orci eu lobortis elementum nibh <br /> tellus
                    vestibulum lorem sed risus ultricies.
                  </RalewayFont>
                </center>
              </div>
              {/* Database  */}
              <div
                style={iconContainerStyle}
                onMouseEnter={() => setDatabaseIconHover(true)}
                onMouseLeave={() => setDatabaseIconHover(false)}
              >
                <center>
                  <img
                    src={databaseIcon}
                    width={25}
                    style={{
                      transform: databaseIconHover
                        ? "translateY(-10px)"
                        : "translateY(0)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                  <PlayfairDisplayFont className='capitalize text-[21px] mt-6 mb-2'>
                    fantastic database collection
                  </PlayfairDisplayFont>
                  <RalewayFont className='text-[8px]'>
                    Arcu vitae elementum curabitur vitae nunc non <br /> enim
                    praesent elementum facilisis leo vel.
                  </RalewayFont>
                </center>
              </div>
              {/* Historical Book  */}
              <div
                style={iconContainerStyle}
                onMouseEnter={() => setHistoricalIconHover(true)}
                onMouseLeave={() => setHistoricalIconHover(false)}
              >
                <center>
                  <img
                    src={historicalBookIcon}
                    width={30}
                    style={{
                      transform: historicalIconHover
                        ? "translateY(-10px)"
                        : "translateY(0)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                  <PlayfairDisplayFont className='capitalize text-[21px] mt-6 mb-2'>
                    historical book collection
                  </PlayfairDisplayFont>
                  <RalewayFont className='text-[8px]'>
                    Qnim sed faucibus augue eget turpis pulvinar <br />{" "}
                    elementum integer enim neque volutpat.
                  </RalewayFont>
                </center>
              </div>
              {/* Horror Paper  */}
              <div
                style={iconContainerStyle}
                onMouseEnter={() => setHorrorIconHover(true)}
                onMouseLeave={() => setHorrorIconHover(false)}
              >
                <center>
                  <img
                    src={horrorPaperIcon}
                    width={30}
                    style={{
                      transform: horrorIconHover
                        ? "translateY(-10px)"
                        : "translateY(0)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                  <PlayfairDisplayFont className='capitalize text-[21px] mt-5 mb-2'>
                    horror paper collection
                  </PlayfairDisplayFont>
                  <RalewayFont className='text-[8px]'>
                    Pellentesque dignissim enim sit amet <br /> venenatis
                    malesuada proin libero nunc <br /> consequat.
                  </RalewayFont>
                </center>
              </div>
              {/* Detective Book  */}
              <div
                style={iconContainerStyle}
                onMouseEnter={() => setDetectiveIconHover(true)}
                onMouseLeave={() => setDetectiveIconHover(false)}
              >
                <center>
                  <img
                    src={detectiveBookIcon}
                    width={30}
                    style={{
                      transform: detectiveIconHover
                        ? "translateY(-10px)"
                        : "translateY(0)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                  <PlayfairDisplayFont className='capitalize text-[21px] mt-7 mb-2'>
                    detective book collection
                  </PlayfairDisplayFont>
                  <RalewayFont className='text-[8px]'>
                    Amet justo donec enim diam vulputate ut <br /> pharetra
                    faucibus pulvinar elementum integer <br /> enim.
                  </RalewayFont>
                </center>
              </div>
              {/* Graphic Novel  */}
              <div
                style={iconContainerStyle}
                onMouseEnter={() => setGraphicIconHover(true)}
                onMouseLeave={() => setGraphicIconHover(false)}
              >
                <center>
                  <img
                    src={graphicNovelIcon}
                    width={34}
                    style={{
                      transform: graphicIconHover
                        ? "translateY(-10px)"
                        : "translateY(0)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                  <PlayfairDisplayFont className='capitalize text-[21px] mt-7 mb-2'>
                    graphic novel collection
                  </PlayfairDisplayFont>
                  <RalewayFont className='text-[8px]'>
                    Bibendum neque egestas congue quisque <br /> egestas vitae
                    semper quis lectus nulla at <br /> volutpat.
                  </RalewayFont>
                </center>
              </div>
            </main>
            {/* Banner  */}
            <center>
              <section className='mx-[100px] grid grid-cols-2 gap-20 mt-20'>
                <div className='relative'>
                  <img
                    className='object-contain'
                    src={about1}
                    alt=''
                    style={{
                      ...imageStyle,
                      transform: aboutImgHover
                        ? "translate(0, 0)"
                        : "translate(0, 0)",
                    }}
                    onMouseEnter={() => setAboutImgHover(true)}
                    onMouseLeave={() => setAboutImgHover(false)}
                  />
                  <img
                    className='object-contain'
                    src={about1_2}
                    alt=''
                    style={{
                      ...imageStyle,
                      opacity: aboutImgHover ? 1 : 0,
                      transform: aboutImgHover
                        ? "translate(15px, 20px)"
                        : "translate(0, 0)",
                    }}
                    onMouseEnter={() => setAboutImgHover(true)}
                    onMouseLeave={() => setAboutImgHover(false)}
                  />
                  <p
                    className='text-[7.8px]  mt-[300px]'
                    style={{ position: "relative", zIndex: 1 }}
                  >
                    Ac feugiat sed lectus vestibulum mattis ullamcorper velit
                    sed risus nec <br /> feugiat in fermentum cras tincidunt
                    lobortis feugiat vivamus morbi quis <br /> commodo odio.
                  </p>
                </div>
                <div className='relative'>
                  <img
                    className='object-contain'
                    src={about2}
                    alt=''
                    style={{
                      ...imageStyle,
                      transform: about2ImgHover
                        ? "translate(0, 0)"
                        : "translate(0, 0)",
                    }}
                    onMouseEnter={() => setAbout2ImgHover(true)}
                    onMouseLeave={() => setAbout2ImgHover(false)}
                  />
                  <img
                    className='object-contain'
                    src={about2_2}
                    alt=''
                    style={{
                      ...imageStyle,
                      opacity: about2ImgHover ? 1 : 0,
                      transform: about2ImgHover
                        ? "translate(15px, 20px)"
                        : "translate(0, 0)",
                    }}
                    onMouseEnter={() => setAbout2ImgHover(true)}
                    onMouseLeave={() => setAbout2ImgHover(false)}
                  />
                  <p
                    className='text-[7.8px]  mt-[300px]'
                    style={{ position: "relative", zIndex: 1 }}
                  >
                    Ac feugiat sed lectus vestibulum mattis ullamcorper velit
                    sed risus nec <br /> feugiat in fermentum cras tincidunt
                    lobortis feugiat vivamus morbi quis <br /> commodo odio.
                  </p>
                </div>
              </section>
            </center>
            <div className=' about_banner_2 mx-[100px]'>
              <img
                className='h-[300px] mt-[50px] object-contain'
                src={banner2}
                alt=''
              />
            </div>
            <section className='team'>
              <div>
                <div className='team_title text-center mt-16 mb-5'>
                  <PlayfairDisplayFont className='capitalize text-[28px] font-medium mb-4'>
                    meet our team
                  </PlayfairDisplayFont>
                  <RalewayFont className='text-[12px] font-semibold'>
                    Dignissim cras tincidunt lobortis feugiat amet commodo nulla
                    facilisi nullam vehicula euismod in <br /> pellentesque
                    massa placerat.
                  </RalewayFont>
                </div>
                <div className='team_card'>
                  <div className='flex mx-[80px]'>
                    <div className='bg-white p-4 relative '>
                      <div className='relative'>
                        <img
                          src={avatar1}
                          width={460}
                          height={460}
                          alt=''
                          className='rounded-t-lg'
                        />
                        <div className='absolute bottom-0 left-0 right-0 bg-[#0B51BB] bg-opacity-60 text-white p-1'>
                          <center>
                            <PlayfairDisplayFont className='text-xl font-bold'>
                              Jessika
                            </PlayfairDisplayFont>
                            <PlayfairDisplayFont className='text-white'>
                              Customer Support
                            </PlayfairDisplayFont>
                          </center>
                        </div>
                      </div>
                    </div>
                    <div className='bg-white p-4 relative '>
                      <div className='relative'>
                        <img
                          src={avatar2}
                          width={460}
                          height={460}
                          alt=''
                          className='rounded-t-lg'
                        />
                        <div className='absolute bottom-0 left-0 right-0 bg-[#0B51BB] bg-opacity-60 text-white p-1'>
                          <center>
                            <PlayfairDisplayFont className='text-xl font-bold'>
                              Geoge
                            </PlayfairDisplayFont>
                            <PlayfairDisplayFont className='text-white'>
                              Manager
                            </PlayfairDisplayFont>
                          </center>
                        </div>
                      </div>
                    </div>
                    <div className='bg-white p-4 relative'>
                      <div className='relative'>
                        <img
                          src={avatar3}
                          width={460}
                          height={460}
                          alt=''
                          className='rounded-t-lg'
                        />
                        <div className='absolute bottom-0 left-0 right-0 bg-[#0B51BB] bg-opacity-60 text-white p-1'>
                          <center>
                            <PlayfairDisplayFont className='text-xl font-bold'>
                              Lisha
                            </PlayfairDisplayFont>
                            <PlayfairDisplayFont className='text-white'>
                              CEO
                            </PlayfairDisplayFont>
                          </center>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      ) : (
        <div>
          <div
            className='banner pt-12 pb-12 relative'
            style={{
              background: `url(${banner_1}) `,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "52% 15%",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                backgroundColor: "rgba(158, 155, 155, 0.5)",
              }}
            />
            <div
              style={{
                position: "relative",
                color: "white",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <PlayfairDisplayFont className='text-center font-medium text-[35px] text-white mb-1'>
                About Us
              </PlayfairDisplayFont>
              <RalewayFont className='uppercase text-center font-medium text-[11px] text-white'>
                home / about us
              </RalewayFont>
            </div>
          </div>
          <div className='trending_books'>
            <div className='trending_head_section text-center mt-14 mb-12'>
              <div className='trending_title'>
                <PlayfairDisplayFont className='capitalize text-[32px] font-medium mb-4'>
                  check out our trending books
                </PlayfairDisplayFont>
              </div>
              <div className='trending_subtitle'>
                <RalewayFont className='text-[12px] font-semibold'>
                  Sem fringilla ut morbi tincidunt augue interdum velit euismod
                  Odio facilisis mauris sit amet massa vitae <br /> tortor
                  condimentum risus nullam eget felis eget nunc.
                </RalewayFont>
              </div>
            </div>

            <main className='mx-[200px] my-8 grid  grid-cols-2 sm:grid-cols-1 md:grid-cols-3 gap-9 '>
              {/* Comic Book */}
              <div
                style={iconContainerStyle}
                onMouseEnter={() => setComicIconHover(true)}
                onMouseLeave={() => setComicIconHover(false)}
              >
                <center>
                  <img
                    src={bookIcon}
                    alt='book-icon'
                    width={45}
                    style={{
                      transform: comicIconHover
                        ? "translateY(-10px)"
                        : "translateY(0)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                  <PlayfairDisplayFont className='capitalize text-[20px] mt-5 mb-2'>
                    comic book collection
                  </PlayfairDisplayFont>
                  <RalewayFont className='text-[13px] font-meidum'>
                    Etiam tempor orci eu lobortis elementum nibh <br /> tellus
                    vestibulum lorem sed risus ultricies.
                  </RalewayFont>
                </center>
              </div>
              {/* Database*/}
              <div
                style={iconContainerStyle}
                onMouseEnter={() => setDatabaseIconHover(true)}
                onMouseLeave={() => setDatabaseIconHover(false)}
              >
                <center>
                  <img
                    src={databaseIcon}
                    width={30}
                    style={{
                      transform: databaseIconHover
                        ? "translateY(-10px)"
                        : "translateY(0)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                  <PlayfairDisplayFont className='capitalize text-[20px] mt-7 mb-2'>
                    fantastic database collection
                  </PlayfairDisplayFont>
                  <RalewayFont className='text-[13px]'>
                    Arcu vitae elementum curabitur vitae nunc non <br /> enim
                    praesent elementum facilisis leo vel.
                  </RalewayFont>
                </center>
              </div>
              {/* Historical Book */}
              <div
                style={iconContainerStyle}
                onMouseEnter={() => setHistoricalIconHover(true)}
                onMouseLeave={() => setHistoricalIconHover(false)}
              >
                <center>
                  <img
                    src={historicalBookIcon}
                    width={36}
                    style={{
                      transform: historicalIconHover
                        ? "translateY(-10px)"
                        : "translateY(0)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                  <PlayfairDisplayFont className='capitalize text-[20px] mt-8 mb-2'>
                    historical book collection
                  </PlayfairDisplayFont>
                  <RalewayFont className='text-[13px]'>
                    Qnim sed faucibus augue eget turpis pulvinar <br />{" "}
                    elementum integer enim neque volutpat.
                  </RalewayFont>
                </center>
              </div>
              {/* Horror Paper  */}
              <div
                style={iconContainerStyle}
                onMouseEnter={() => setHorrorIconHover(true)}
                onMouseLeave={() => setHorrorIconHover(false)}
              >
                <center>
                  <img
                    src={horrorPaperIcon}
                    width={30}
                    style={{
                      transform: horrorIconHover
                        ? "translateY(-10px)"
                        : "translateY(0)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                  <PlayfairDisplayFont className='capitalize text-[20px] mt-5 mb-2'>
                    horror paper collection
                  </PlayfairDisplayFont>
                  <RalewayFont className='text-[13px]'>
                    Pellentesque dignissim enim sit amet <br /> venenatis
                    malesuada proin libero nunc <br /> consequat.
                  </RalewayFont>
                </center>
              </div>
              {/* Detective Book  */}
              <div
                style={iconContainerStyle}
                onMouseEnter={() => setDetectiveIconHover(true)}
                onMouseLeave={() => setDetectiveIconHover(false)}
              >
                <center>
                  <img
                    src={detectiveBookIcon}
                    width={36}
                    style={{
                      transform: detectiveIconHover
                        ? "translateY(-10px)"
                        : "translateY(0)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                  <PlayfairDisplayFont className='capitalize text-[20px] mt-6 mb-2'>
                    detective book collection
                  </PlayfairDisplayFont>
                  <RalewayFont className='text-[13px]'>
                    Amet justo donec enim diam vulputate ut <br /> pharetra
                    faucibus pulvinar elementum integer <br /> enim.
                  </RalewayFont>
                </center>
              </div>
              {/* Graphic Novel  */}
              <div
                style={iconContainerStyle}
                onMouseEnter={() => setGraphicIconHover(true)}
                onMouseLeave={() => setGraphicIconHover(false)}
              >
                <center>
                  <img
                    src={graphicNovelIcon}
                    width={36}
                    style={{
                      transform: graphicIconHover
                        ? "translateY(-10px)"
                        : "translateY(0)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                  <PlayfairDisplayFont className='capitalize text-[20px] mt-8 mb-2'>
                    graphic novel collection
                  </PlayfairDisplayFont>
                  <RalewayFont className='text-[13px]'>
                    Bibendum neque egestas congue quisque <br /> egestas vitae
                    semper quis lectus nulla at <br /> volutpat.
                  </RalewayFont>
                </center>
              </div>
            </main>

            {/* Banner  */}
            <center>
              <section className='mx-[190px] grid grid-cols-2 gap-5 mt-20'>
                <div className='relative overflow-hidden'>
                  <img
                    style={{
                      ...imageStyle,
                      transform: aboutImgHover
                        ? "translate(0, 0)"
                        : "translate(0, 0)",
                    }}
                    className='h-[410px] w-[420px] mr-6 ml-[58px]'
                    src={about1}
                    alt=''
                    onMouseEnter={() => setAboutImgHover(true)}
                    onMouseLeave={() => setAboutImgHover(false)}
                  />
                  <img
                    style={{
                      ...imageStyle,
                      opacity: aboutImgHover ? 1 : 0,
                      transform: aboutImgHover
                        ? "translate(15px, 20px)"
                        : "translate(0, 0)",
                    }}
                    className='h-[410px] w-[420px] mr-6 ml-[58px]'
                    src={about1_2}
                    alt=''
                    onMouseEnter={() => setAboutImgHover(true)}
                    onMouseLeave={() => setAboutImgHover(false)}
                  />

                  <p
                    className='text-[12px] mr-6 mt-[460px]'
                    style={{ position: "relative", zIndex: 1 }}
                  >
                    Ac feugiat sed lectus vestibulum mattis ullamcorper velit
                    sed risus nec <br /> feugiat in fermentum cras tincidunt
                    lobortis feugiat vivamus morbi quis <br /> commodo odio.
                  </p>
                </div>

                <div className='relative overflow-hidden'>
                  <img
                    className='h-[410px] w-[420px]  ml-5 '
                    src={about2}
                    alt=''
                    style={{
                      ...imageStyle,
                      transform: about2ImgHover
                        ? "translate(0, 0)"
                        : "translate(0, 0)",
                    }}
                    onMouseEnter={() => setAbout2ImgHover(true)}
                    onMouseLeave={() => setAbout2ImgHover(false)}
                  />
                  <img
                    className='h-[410px] w-[420px]  ml-5 mr-[58px]'
                    src={about2_2}
                    alt=''
                    style={{
                      ...imageStyle,
                      opacity: about2ImgHover ? 1 : 0, // Hình 2 xuất hiện khi hover
                      transform: about2ImgHover
                        ? "translate(15px, 20px)"
                        : "translate(0, 0)", // Hình 2 di chuyển khi hover
                    }}
                    onMouseEnter={() => setAbout2ImgHover(true)}
                    onMouseLeave={() => setAbout2ImgHover(false)}
                  />
                  <p
                    className='text-[12px] mr-[100px] mt-[460px]'
                    style={{ position: "relative", zIndex: 1 }}
                  >
                    Ac feugiat sed lectus vestibulum mattis ullamcorper velit
                    sed risus nec <br /> feugiat in fermentum cras tincidunt
                    lobortis feugiat vivamus morbi quis <br /> commodo odio.
                  </p>
                </div>
              </section>
            </center>
            <div className=' about_banner_2'>
              <img
                className='mx-[248px] w-[960px] h-[400px] mt-[66px]'
                src={banner2}
                alt=''
              />
            </div>
            <section className='team'>
              <div>
                <div className='team_title text-center mt-16 mb-5'>
                  <PlayfairDisplayFont className='capitalize text-[32px] font-medium mb-4'>
                    meet our team
                  </PlayfairDisplayFont>
                  <RalewayFont className='text-[12px] font-semibold'>
                    Dignissim cras tincidunt lobortis feugiat amet commodo nulla
                    facilisi nullam vehicula euismod in <br /> pellentesque
                    massa placerat.
                  </RalewayFont>
                </div>
                <div className='team_card'>
                  <div className='flex justify-center mx-[150px]'>
                    <div className='bg-white p-4 relative mr-14'>
                      <div className='relative'>
                        <img
                          src={avatar1}
                          width={280}
                          height={280}
                          alt=''
                          className='rounded-t-lg'
                        />
                        <div className='absolute bottom-0 left-0 right-0 bg-[#0B51BB] bg-opacity-60 text-white p-4'>
                          <center>
                            <PlayfairDisplayFont className='text-xl font-bold'>
                              Jessika
                            </PlayfairDisplayFont>
                            <PlayfairDisplayFont className='text-white'>
                              Customer Support
                            </PlayfairDisplayFont>
                          </center>
                        </div>
                      </div>
                    </div>
                    <div className='bg-white p-4 relative mr-14'>
                      <div className='relative'>
                        <img
                          src={avatar2}
                          width={280}
                          height={280}
                          alt=''
                          className='rounded-t-lg'
                        />
                        <div className='absolute bottom-0 left-0 right-0 bg-[#0B51BB] bg-opacity-60 text-white p-4'>
                          <center>
                            <PlayfairDisplayFont className='text-xl font-bold'>
                              Geoge
                            </PlayfairDisplayFont>
                            <PlayfairDisplayFont className='text-white'>
                              Manager
                            </PlayfairDisplayFont>
                          </center>
                        </div>
                      </div>
                    </div>
                    <div className='bg-white p-4 relative'>
                      <div className='relative'>
                        <img
                          src={avatar3}
                          width={280}
                          height={280}
                          alt=''
                          className='rounded-t-lg'
                        />
                        <div className='absolute bottom-0 left-0 right-0 bg-[#0B51BB] bg-opacity-60 text-white p-4'>
                          <center>
                            <PlayfairDisplayFont className='text-xl font-bold'>
                              Lisha
                            </PlayfairDisplayFont>
                            <PlayfairDisplayFont className='text-white'>
                              CEO
                            </PlayfairDisplayFont>
                          </center>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutPages;
