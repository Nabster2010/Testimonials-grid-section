import React from "react";

const Card = ({ person, inverted = false }) => {
  const { avatar, name, position, header, text, quote } = person;
  return (
    <div
      className={`px-6 py-4 relative bg-transparent  ${
        inverted ? "text-VeryDarkGrayishBlue" : "text-White"
      } space-y-4`}
    >
      {quote && (
        <img
          className="absolute top-0 right-16 "
          src="/images/bg-pattern-quotation.svg"
          alt=""
        />
      )}
      <div className="flex justify-start items-center gap-4  ">
        <div
          className={`w-9 h-9 ${
            inverted ? "bg-VeryDarkGrayishBlue/50" : "bg-White/50"
          }  rounded-full flex justify-center items-center`}
        >
          <img src={avatar} alt="" className="w-8 h-8 rounded-full" />
        </div>
        <div>
          <h4 className="text-[13px] font-semibold">{name}</h4>
          <h4
            className={`text-[12px] ${
              inverted ? "text-VeryDarkGrayishBlue/50" : "text-White/50"
            }   `}
          >
            {position}
          </h4>
        </div>
      </div>
      <h2 className="text-lg font-semibold z-10 relative ">{header}</h2>
      <p
        className={`text-[13px] ${
          inverted ? "text-VeryDarkGrayishBlue/70" : "text-White/70"
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default Card;
