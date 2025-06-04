
import React from 'react';

const Newsletter = () => {
  return (
    <div className="w-[600px] h-[2344px] bg-[#f5f2f0] font-barlow mx-auto relative">
      {/* Header with logo */}
      <div className="pt-8 pb-6 px-8">
        <div className="w-[46.5252571105957px] h-[37px] absolute top-[28.27px] left-[277px] flex items-center justify-center">
          <img 
            src="/public/logo.png" 
            alt="Logo" 
            
          />
        </div>
      </div>

      {/* Main Title Section */}
      <div className="px-8 pb-8 pt-8">
        <div className="flex items-start gap-10">
          <div className="flex-1">
            <h1 className="text-[42px] font-extrabold leading-[34.93px] text-black uppercase tracking-[0.02em] font-barlow pt-8">
              HOW TO WRITE<br />
              A 30 SECOND<br />
              COMMERCIAL<br />
              FOR THE<br />
              SUPER BOWL
            </h1>
          </div>
          {/* <div className="w-[417px] h-[283px] rounded-[218.34px] border-[1.77px] border-[#FEE83F] flex items-center justify-center relative overflow-hidden">
            <img 
              src="/public/dunkings.png" 
              alt="Featured Image" 
              className="w-full h-full object-cover"
            />
          </div> */}

          <div className="flex-1 max-w-sm">
                <div
                  className="w-full h-48 overflow-hidden"
                  style={{
                    width: "417px",
                    height: "283px",
                    borderRadius: "370px",
                    border: "1.77px solid #FEE83F",
                    borderWidth: "3px",
                  }}
                >
                  <img
                    src="/public/dunkings.png"
                    alt="Film clapperboard on set"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

        </div>
      </div>

      <div 
        style={{
          width: "530px",
          position: "absolute",
          top: "404px",
          left: "35px",
          borderBottom: "1px solid #DDDDDD"
        }}
      />

      {/* Content Section */}
      <div className="px-8 pb-8">
        <div className="w-[530px] h-[100px] absolute top-[441.5px] left-[35px]">
          <p className="font-barlow font-normal text-[18px] leading-[25px] tracking-[0.05em] text-[#101010]">
            We previously wrote about using emotional advertising and storytelling to market your brand. In that article, we analyzed a Super Bowl ad and how it was written, but we wanted to break down new ads from 2025's Super Bowl LIX.
          </p>
        </div>

        <div className="w-[530px] h-[228px] absolute top-[591px] left-[35px]">
          <h2 className="text-[24px] font-semibold uppercase tracking-[0.05em] text-black mb-4 leading-[25px] font-barlow">
            EMOTIONAL ADVERTISING REFRESHER
          </h2>

          <p className="font-barlow font-normal text-[18px] leading-[25px] tracking-[0.05em] text-[#101010] mb-8">
            If you remember from the previous article, when writing a commercial or ad, a Super Bowl ad, you want to identify how you want your audience to feel when watching your commercial. A lot of times this comes organically without having to think about it or even identify it, but a lot of times this is missing from big Super Bowl ads because they're solely focused on coming up with a cool idea that features a celebrity.
          </p>
        </div>

        <div className="w-[548px] h-[220px] absolute top-[869px] left-[24px]">
          <h3 className="w-[414px] h-[50px] absolute left-[11px] font-barlow font-semibold text-[24px] leading-[25px] tracking-[0.05em] uppercase text-black mb-4">
            HERE'S A LIST OF<br />
            COMMON EMOTIONAL MOTIVATORS:
          </h3>

          <div className="grid grid-cols-2 gap-x-8 gap-y-2 mb-8" style={{ height: "150px", marginTop: "70px" }}>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              <span className="font-barlow font-normal text-[18px] leading-[25px] tracking-[0.05em] text-gray-700">Sense of belonging</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              <span className="font-barlow font-normal text-[18px] leading-[25px] tracking-[0.05em] text-gray-700">Enjoy a sense of well-being</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              <span className="font-barlow font-normal text-[18px] leading-[25px] tracking-[0.05em] text-gray-700">Stand out from the crowd</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              <span className="font-barlow font-normal text-[18px] leading-[25px] tracking-[0.05em] text-gray-700">Feel a sense of thrill</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              <span className="font-barlow font-normal text-[18px] leading-[25px] tracking-[0.05em] text-gray-700">Sense of achievement</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              <span className="font-barlow font-normal text-[18px] leading-[25px] tracking-[0.05em] text-gray-700">Live up to my self image</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              <span className="font-barlow font-normal text-[18px] leading-[25px] tracking-[0.05em] text-gray-700">Attain success</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              <span className="font-barlow font-normal text-[18px] leading-[25px] tracking-[0.05em] text-gray-700">Sense of security</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              <span className="font-barlow font-normal text-[18px] leading-[25px] tracking-[0.05em] text-gray-700">Have hope or confidence in the future</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              <span className="font-barlow font-normal text-[18px] leading-[25px] tracking-[0.05em] text-gray-700">Fear of missing out (FOMO)</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 mb-8" style={{ marginTop: "750px" }}>
          {/* <div className="w-[470px] h-[283px] bg-gray-300 rounded-[370px] overflow-hidden border-[3px] border-[#FEE83F]">
            <img 
              src="/public/horse.png" 
              alt="Budweiser commercial" 
              className="w-full h-full object-cover"
            />
          </div> */}

<div className="flex-1 max-w-sm relative " style={{ width: "470px", height: "283px", borderRadius: "370px", borderWidth: "3px",}}>
                <div
                  className="w-full h-48 overflow-hidden"
                  style={{
                    width: "470px",
                    height: "283px",
                    borderRadius: "370px",
                    border: "3px solid #FEE83F",
                    borderWidth: "3px",
                    marginLeft: "-220px",               
                  }}
                >
                  <img
                    src="/public/horse.png"
                    alt="Some image of horse"
                    className="w-full h-full object-cover"
                    style={{
                      width: "470px",
                      height: "283px",
                      borderRadius: "370px",
                      objectFit: "cover"

                      
                    }}
                  />
                </div>
              </div>

          <div className="w-[265px] flex flex-col gap-[17px]">
            <p style={{
              width: "265px",
              height: "150px",
              fontFamily: "Barlow",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "25px",
              letterSpacing: "5%",
              color: "#374151"
            }}>
              For example, Super Bowl LVIII (2024) Budweiser commercial, "Old School Delivery," featured the emotional motivators "overcome life's obstacles" or perhaps "succeed in life."
            </p>
            <div className="flex items-center justify-start">
              <button
                className="px-6 rounded-full text-black border border-black"
                style={{ 
                  backgroundColor: "#FEE83F",
                  width: "176.81922912597656px",
                  height: "28.882823944091797px",
                  borderRadius: "14.44px",
                  borderWidth: "0.35px",
                  fontFamily: "Barlow",
                  fontWeight: 400,
                  fontSize: "14.09px",
                  lineHeight: "28.18px",
                  letterSpacing: "5%",
                  textAlign: "center",
                  verticalAlign: "middle",
                  textTransform: "uppercase"
                }}
              >
                CONTINUE READING
              </button>
              <button
                className="rounded-full flex items-center justify-center border border-black"
                style={{ 
                  width: "28.88px",
                  height: "28.88px",
                  borderWidth: "0.35px",
                  backgroundColor: "#FEE83F" 
                }}
              >
                <span className="text-black font-bold">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div 
        className="px-8 py-6 w-[660px] h-[87px] rounded-[20px] bg-[#8FED4A] overflow-hidden"
        style={{ marginLeft: "-27px" }}
      >
        <div className="w-max animate-marquee">
        <span className="text-[#101010] text-[27px] font-medium uppercase whitespace-nowrap tracking-widest font-barlow leading-[40px] mr-10">
      MORE FROM OUR BLOG. NO MISPELLINGS HERE • MORE FROM OUR BLOG. NO MISPELLINGS HERE •
    </span>
    <span className="text-[#101010] text-[27px] font-medium uppercase whitespace-nowrap tracking-widest font-barlow leading-[40px] mr-10">
      MORE FROM OUR BLOG. NO MISPELLINGS HERE • MORE FROM OUR BLOG. NO MISPELLINGS HERE •
    </span>

        </div>
      </div>


      {/* Blog Cards */}
      <div className="bg-white px-8 py-8" style={{backgroundColor: "#FBF8EF" }}>
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div>
            <div className="flex flex-col" style={{ width: "250px", height: "335px", marginTop: "20px",  gap: "35px" }}>
              <div 
                className="overflow-hidden relative"
                style={{
                  width: "250px",
                  height: "146px",
                  borderRadius: "260px",
                  border: "2px solid #FEE83F"
                }}
              >
                <img 
                  src="/public/image column 1.jpg" 
                  alt="Streaming TV advertising" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div style={{ width: "250px", height: "154px", gap: "10px" }}>
                <h4 className="text-[20px] font-semibold uppercase tracking-[5%] text-black"
                    style={{
                      width: "250px",
                      height: "44px",
                      fontFamily: "Barlow",
                      lineHeight: "22px"
                    }}>
                  WHAT IS STREAMING TV ADVERTISING?
                </h4>
                <p className="text-gray-600"
                   style={{
                    marginTop: "10px",
                     width: "250px",
                     height: "100px",
                     fontFamily: "Barlow",
                     fontWeight: 400,
                     fontSize: "15px",
                     lineHeight: "20px",
                     letterSpacing: "5%",
                   }}>
                  While streaming services initially touted their lack of advertising, all major streaming services now feature ad-supported tiers, or are completely ad-supported.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-start" style={{ width: "205.7px", height: "29.59px", marginTop: "40px"}}>
                  <button
                    className="px-6 rounded-full text-black border border-black"
                    style={{ 
                      backgroundColor: "#FEE83F",
                      width: "176.82px",
                      height: "28.88px",
                      borderRadius: "14.44px",
                      borderWidth: "0.35px",
                      fontFamily: "Barlow",
                      fontWeight: 400,
                      fontSize: "14.09px",
                      lineHeight: "28.18px",
                      letterSpacing: "5%",
                      textAlign: "center",
                      verticalAlign: "middle",
                      textTransform: "uppercase"
                    }}
                  >
                    READ MORE
                  </button>
                  <button
                    className="rounded-full flex items-center justify-center border border-black"
                    style={{ 
                      width: "28.88px",
                      height: "28.88px",
                      borderWidth: "0.35px",
                      backgroundColor: "#FEE83F" 
                    }}
                  >
                    <span className="text-black font-bold">→</span>
                  </button>
                </div>
          </div>

          <div>
            <div className="flex flex-col" style={{ width: "250px", height: "352px", marginTop: "20px",  gap: "30px" }}>
              <div className="w-full h-32 bg-gray-200 rounded-lg overflow-hidden relative" style={{
                width: "250px",
                height: "146px",
                borderRadius: "260px",
                border: "2px solid #FEE83F"
              }}>
                <img 
                  src="/public/image column 2.png" 
                  alt="Emotional advertising" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div style={{ width: "250px", height: "154px", gap: "10px" }}>
                <h4 className="text-[20px] font-semibold uppercase tracking-[5%] text-black"
                    style={{
                      width: "250px",
                      height: "44px",
                      fontFamily: "Barlow",
                      lineHeight: "22px"
                    }}>
                  HOW IS YOUR BRAND CAN USE EMOTIONAL ADVERTISING
                </h4>
                <p className="text-gray-600"
                   style={{
                    marginTop: "30px",
                     width: "250px",
                     height: "100px",
                     fontFamily: "Barlow",
                     fontWeight: 400,
                     fontSize: "15px",
                     lineHeight: "20px",
                     letterSpacing: "5%",
                   }}>
                  One of the most effective things you can do for your brand is to create an emotional connection with your customers. But what does this mean, exactly?
                </p>
              </div>
            </div>
            <div className="flex items-center justify-start" style={{ width: "205.7px", height: "29.59px", marginTop: "20px"}}>
                  <button
                    className="px-6 rounded-full text-black border border-black"
                    style={{ 
                      backgroundColor: "#FEE83F",
                      width: "176.82px",
                      height: "28.88px",
                      borderRadius: "14.44px",
                      borderWidth: "0.35px",
                      fontFamily: "Barlow",
                      fontWeight: 400,
                      fontSize: "14.09px",
                      lineHeight: "28.18px",
                      letterSpacing: "5%",
                      textAlign: "center",
                      verticalAlign: "middle",
                      textTransform: "uppercase"
                    }}
                  >
                    READ MORE
                  </button>
                  <button
                    className="rounded-full flex items-center justify-center border border-black"
                    style={{ 
                      width: "28.88px",
                      height: "28.88px",
                      borderWidth: "0.35px",
                      backgroundColor: "#FEE83F" 
                    }}
                  >
                    <span className="text-black font-bold">→</span>
                  </button>
                </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
            className="text-center py-12 px-6"
            style={{
              background: "linear-gradient(to top, #FEE83F, #FBF8EF 85%)",
              width: "600px",
              height: "293px",
              top: "2001.59px",
            }}
          >
            <h2
              className="mb-6 "
              style={{
                color: "#101010",
                fontFamily: "Barlow",
                fontWeight: 900,
                fontSize: "clamp(28px, 5vw, 50px)",
                lineHeight: "1.2",
                letterSpacing: "0.02em",
                textAlign: "center",
                textTransform: "uppercase",
                margin: "0 auto",
                maxWidth: "100%",
                marginTop: "5%",
              }}
            >
              HELLO@COLAB.COM
              <br />
              818.850.4212
            </h2>
            <p
              style={{
                color: "#101010",
                fontFamily: "Barlow",
                fontWeight: 400,
                fontSize: "clamp(12px, 2.5vw, 15px)",
                lineHeight: "1.4",
                letterSpacing: "0.05em",
                textAlign: "center",
                margin: "0 auto",
                marginTop: "20px",
                maxWidth: "100%",
              }}
            >
              21300 VICTORY BLVD #860
              <br />
              WOODLAND HILLS, CA 91367
            </p>
          </div>
    </div>
  );
};

export default Newsletter;
