import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Carousel from "../../carousel/carousel";

import base_circle from "./assets/base_circle.svg";
import plus_circle from "./assets/plus_circle.svg";

export const UploadModal = () => {
  return (
    <StyledUploadModal>
      <Link to="/file-upload/embed" className="embeded__btn">
        <div className="embeded__btn-wrapper">
          <img src={plus_circle} alt="임베드" />
          <span>임베드 영상 업로드</span>
        </div>
      </Link>
      <Link to="/file-upload" className="self__btn">
        <div>
          <img src={base_circle} alt="직접" />
          <span>직접 영상 업로드</span>
        </div>
      </Link>
    </StyledUploadModal>
  );
};

export const MainLoginModal = () => {
  const items = [
    {
      idx: "carousel1",
      title: "자연스러운 매칭 서비스",
      content1: "조회수, 좋아요수는 필요 없어요!",
      content2: "그냥 서로의 영상에 하트를 누르면 자연스럽게 매칭돼요.",
    },
    {
      idx: "carousel2",
      title: "관심사 기반의 추천",
      content1: "나와 관심사/취미가 비슷한 사람을 찾고 싶으신가요?",
      content2: "회원님의 관심사가 반영된 영상을 추천해드려요.",
    },
    {
      idx: "carousel3",
      title: "차별화된 소개방식",
      content1:
        "외모, 직업, 인기등급 다 좋지만, 좀 더 다양한 매력을 짧은 영상에 담아 나를 소개해보세요!",
    },
  ];

  return (
    <StyledModal>
      <div className="loginModal_wrapper">
        <Carousel items={items} />
      </div>
      <a href="/login">로그인하고 시작하기</a>
    </StyledModal>
  );
};

const StyledModal = styled.div`
  position: absolute;
  width: 95%;
  z-index: 2;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;

  .loginModal_wrapper {
    margin: 12px;
    margin-bottom: 25px;
  }

  > a {
    display: block;
    text-align: center;
    line-height: 50px;
    background-color: #5dccc6;
    font-weight: 700;
    color: #ffffff;
    border: none;
    width: 100%;
    font-size: 17px;
    height: 50px;
  }

  .slick-dots {
    bottom: -20px;
  }

  .slick-dots li.slick-active button:before {
    color: #5dccc6;
  }

  .slick-dots li {
    margin: 0;
  }
`;

const StyledUploadModal = styled.div`
  position: absolute;
  width: 90%;
  top: 30%;
  z-index: 2;
  left: 50%;
  transform: translateX(-50%);

  .embeded__btn,
  .self__btn {
    display: block;
    font-size: 24px;
    font-weight: 600;
    border-radius: 10px;
    padding: 48px 50px;

    * {
      color: white;
      text-align: center;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        margin-right: 4px;
      }
    }
  }

  .embeded__btn {
    background-color: #5dccc6;
    margin-bottom: 15px;
  }
  .self__btn {
    background-color: #f3576c;
  }
`;
