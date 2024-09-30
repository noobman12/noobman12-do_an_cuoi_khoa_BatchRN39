"use client";
import bookIcon from "../../../public/images/icon/comic_book-icon.png";
import databaseIcon from "../../..//public/images/icon/database-icon.png";
import detectiveBookIcon from "../../..//public/images/icon/detective_book-icon.png";
import graphicNovelIcon from "../../..//public/images/icon/graphic_novel-icon.png";
import historicalBookIcon from "../../..//public/images/icon/historical_book-icon.png";
import horrorPaperIcon from "../../..//public/images/icon/horror_paper-icon.png";
import about1 from "../../..//public/images/img/about-1.png";
import about1_2 from "../../..//public/images/img/about-1_2.png";
import about2 from "../../..//public/images/img/about-2.png";
import about2_2 from "../../..//public/images/img/about-2_2.png";
import avatar1 from "../../..//public/images/img/avatar_1.png";
import avatar2 from "../../..//public/images/img/avatar_2.png";
import avatar3 from "../../..//public/images/img/avatar_3.png";
import banner2 from "../../..//public/images/img/banner_2.png";
import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import PageBanner from "../../components/PageBanner";

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
  return (
    <div className="about">
      <div>
        <PageBanner bannerTitle="About Us" bannerUrl="HOME/ABOUT" />
      </div>
      <div className="trending_books">
        <div className="trending_head_section text-center mt-14 mb-12">
          <div className="trending_title">
            <PlayfairDisplayFont className="capitalize text-[32px] font-medium mb-4">
              check out our trending books
            </PlayfairDisplayFont>
          </div>
          <div className="trending_subtitle">
            <RalewayFont className="text-[12px] font-semibold">
              Sem fringilla ut morbi tincidunt augue interdum velit euismod Odio
              facilisis mauris sit amet massa vitae <br /> tortor condimentum
              risus nullam eget felis eget nunc.
            </RalewayFont>
          </div>
        </div>

        <main className="mx-[200px] my-8 grid  grid-cols-2 sm:grid-cols-1 md:grid-cols-3 gap-9 ">
          {/* Comic Book */}
          <div
            style={iconContainerStyle}
            onMouseEnter={() => setComicIconHover(true)}
            onMouseLeave={() => setComicIconHover(false)}
          >
            <center>
              <Image
                src={bookIcon}
                alt="book-icon"
                width={45}
                height={45}
                style={{
                  transform: comicIconHover
                    ? "translateY(-10px)"
                    : "translateY(0)",
                  transition: "transform 0.3s ease",
                }}
              />
              <PlayfairDisplayFont className="capitalize text-[20px] mt-5 mb-2">
                comic book collection
              </PlayfairDisplayFont>
              <RalewayFont className="text-[13px] font-meidum">
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
              <Image
                src={databaseIcon}
                alt="database-icon"
                width={30}
                height={30}
                style={{
                  transform: databaseIconHover
                    ? "translateY(-10px)"
                    : "translateY(0)",
                  transition: "transform 0.3s ease",
                }}
              />
              <PlayfairDisplayFont className="capitalize text-[20px] mt-7 mb-2">
                fantastic database collection
              </PlayfairDisplayFont>
              <RalewayFont className="text-[13px]">
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
              <Image
                src={historicalBookIcon}
                alt="historical-book-icon"
                width={36}
                height={36}
                style={{
                  transform: historicalIconHover
                    ? "translateY(-10px)"
                    : "translateY(0)",
                  transition: "transform 0.3s ease",
                }}
              />
              <PlayfairDisplayFont className="capitalize text-[20px] mt-8 mb-2">
                historical book collection
              </PlayfairDisplayFont>
              <RalewayFont className="text-[13px]">
                Qnim sed faucibus augue eget turpis pulvinar <br /> elementum
                integer enim neque volutpat.
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
              <Image
                src={horrorPaperIcon}
                alt="horror-paper-icon"
                width={30}
                height={30}
                style={{
                  transform: horrorIconHover
                    ? "translateY(-10px)"
                    : "translateY(0)",
                  transition: "transform 0.3s ease",
                }}
              />
              <PlayfairDisplayFont className="capitalize text-[20px] mt-5 mb-2">
                horror paper collection
              </PlayfairDisplayFont>
              <RalewayFont className="text-[13px]">
                Pellentesque dignissim enim sit amet <br /> venenatis malesuada
                proin libero nunc <br /> consequat.
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
              <Image
                src={detectiveBookIcon}
                alt="detective-book-icon"
                width={36}
                height={36}
                style={{
                  transform: detectiveIconHover
                    ? "translateY(-10px)"
                    : "translateY(0)",
                  transition: "transform 0.3s ease",
                }}
              />
              <PlayfairDisplayFont className="capitalize text-[20px] mt-6 mb-2">
                detective book collection
              </PlayfairDisplayFont>
              <RalewayFont className="text-[13px]">
                Amet justo donec enim diam vulputate ut <br /> pharetra faucibus
                pulvinar elementum integer <br /> enim.
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
              <Image
                src={graphicNovelIcon}
                alt="graphic-novel-icon"
                width={36}
                height={36}
                style={{
                  transform: graphicIconHover
                    ? "translateY(-10px)"
                    : "translateY(0)",
                  transition: "transform 0.3s ease",
                }}
              />
              <PlayfairDisplayFont className="capitalize text-[20px] mt-8 mb-2">
                graphic novel collection
              </PlayfairDisplayFont>
              <RalewayFont className="text-[13px]">
                Bibendum neque egestas congue quisque <br /> egestas vitae
                semper quis lectus nulla at <br /> volutpat.
              </RalewayFont>
            </center>
          </div>
        </main>

        {/* Banner  */}
        <center>
          <section className=" mx-[20%] grid grid-cols-2 gap-[10%] mt-20">
            <div className="relative overflow-hidden">
              <Image
                src={about1}
                alt="about1"
                width={420}
                height={410}
                style={{
                  ...imageStyle,
                  transform: aboutImgHover
                    ? "translate(0, 0)"
                    : "translate(0, 0)",
                }}
                onMouseEnter={() => setAboutImgHover(true)}
                onMouseLeave={() => setAboutImgHover(false)}
              />
              <Image
                src={about1_2}
                alt="about1_2"
                width={420}
                height={410}
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
                className="text-[12px] mr-6 mt-[460px]"
                style={{ position: "relative", zIndex: 1 }}
              >
                Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed
                risus nec <br /> feugiat in fermentum cras tincidunt lobortis
                feugiat vivamus morbi quis <br /> commodo odio.
              </p>
            </div>

            <div className="relative overflow-hidden">
              <Image
                src={about2}
                alt="about2"
                width={420}
                height={410}
                style={{
                  ...imageStyle,
                  transform: about2ImgHover
                    ? "translate(0, 0)"
                    : "translate(0, 0)",
                }}
                onMouseEnter={() => setAbout2ImgHover(true)}
                onMouseLeave={() => setAbout2ImgHover(false)}
              />
              <Image
                src={about2_2}
                alt="about2_2"
                width={420}
                height={410}
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
                className="text-[12px]  mt-[460px]"
                style={{ position: "relative", zIndex: 1 }}
              >
                Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed
                risus nec feugiat in fermentum cras tincidunt lobortis feugiat
                vivamus morbi quis <br /> commodo odio.
              </p>
            </div>
          </section>
        </center>
        <div className=" about_banner_2 m-[50px] flex justify-center">
          <Image
            className="w-[960px] h-[400px]"
            src={banner2}
            alt="Banner Image"
            width={960}
            height={400}
          />
        </div>
        <section className="team">
          <div>
            <div className="team_title text-center mt-16 mb-5">
              <PlayfairDisplayFont className="capitalize text-[32px] font-medium mb-4">
                meet our team
              </PlayfairDisplayFont>
              <RalewayFont className="text-[12px] font-semibold">
                Dignissim cras tincidunt lobortis feugiat amet commodo nulla
                facilisi nullam vehicula euismod in <br /> pellentesque massa
                placerat.
              </RalewayFont>
            </div>
            <div className="team_card">
              <div className="flex justify-center mx-[150px]">
                <div className="bg-white p-4 relative mr-14">
                  <div className="relative">
                    <Image
                      src={avatar1}
                      width={280}
                      height={280}
                      alt="Jessika - Customer Support"
                      className="rounded-t-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-[#0B51BB] bg-opacity-60 text-white p-4">
                      <center>
                        <PlayfairDisplayFont className="text-xl font-bold">
                          Jessika
                        </PlayfairDisplayFont>
                        <PlayfairDisplayFont className="text-white">
                          Customer Support
                        </PlayfairDisplayFont>
                      </center>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 relative mr-14">
                  <div className="relative">
                    <Image
                      src={avatar2}
                      width={280}
                      height={280}
                      alt="Geoge - Manager"
                      className="rounded-t-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-[#0B51BB] bg-opacity-60 text-white p-4">
                      <center>
                        <PlayfairDisplayFont className="text-xl font-bold">
                          Geoge
                        </PlayfairDisplayFont>
                        <PlayfairDisplayFont className="text-white">
                          Manager
                        </PlayfairDisplayFont>
                      </center>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 relative">
                  <div className="relative">
                    <Image
                      src={avatar3}
                      width={280}
                      height={280}
                      alt="Team Member 3"
                      className="rounded-t-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-[#0B51BB] bg-opacity-60 text-white p-4">
                      <center>
                        <PlayfairDisplayFont className="text-xl font-bold">
                          Lisha
                        </PlayfairDisplayFont>
                        <PlayfairDisplayFont className="text-white">
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
  );
};

export default AboutPages;
