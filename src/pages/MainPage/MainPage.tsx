import React from "react";
import { Header } from "../../components/UI/Header/Header";
import { MainStyle } from "./MainPage.style";

export const MainPage = () => {
  return (
    <MainStyle>
      <Header />
      <div className="MainPage">
        <LeftSide/>
        <main className="Main">
          <div className="WhatsNew">
            <img src="./img/users/arina-volkova.jpeg" alt="User" />
            <input
              type="text"
              name="whats-new"
              id="whats-new"
              placeholder="Что у вас нового?"
            />
            <div className="icons-wrapper">
              <svg
                className="icon icon-camera"
                viewBox="0 0 26 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M21.2727 7.2V4.8H18.9091V2.4H21.2727V0H23.6364V2.4H26V4.8H23.6364V7.2H21.2727ZM2.36364 24C1.71364 24 1.157 23.7648 0.693729 23.2944C0.230457 22.824 -0.000785872 22.2592 2.00648e-06 21.6V7.2C2.00648e-06 6.54 0.231638 5.9748 0.694911 5.5044C1.15818 5.034 1.71443 4.7992 2.36364 4.8H6.08637L8.27273 2.4H15.3636V4.8H9.30682L7.15 7.2H2.36364V21.6H21.2727V10.8H23.6364V21.6C23.6364 22.26 23.4047 22.8252 22.9415 23.2956C22.4782 23.766 21.9219 24.0008 21.2727 24H2.36364ZM11.8182 19.8C13.2955 19.8 14.5513 19.2748 15.5858 18.2244C16.6203 17.174 17.1372 15.8992 17.1364 14.4C17.1364 12.9 16.6191 11.6248 15.5846 10.5744C14.5502 9.524 13.2947 8.9992 11.8182 9C10.3409 9 9.08503 9.5252 8.05055 10.5756C7.01606 11.626 6.49921 12.9008 6.5 14.4C6.5 15.9 7.01724 17.1752 8.05173 18.2256C9.08621 19.276 10.3417 19.8008 11.8182 19.8ZM11.8182 17.4C10.9909 17.4 10.2917 17.11 9.72046 16.53C9.14924 15.95 8.86364 15.24 8.86364 14.4C8.86364 13.56 9.14924 12.85 9.72046 12.27C10.2917 11.69 10.9909 11.4 11.8182 11.4C12.6455 11.4 13.3447 11.69 13.9159 12.27C14.4871 12.85 14.7727 13.56 14.7727 14.4C14.7727 15.24 14.4871 15.95 13.9159 16.53C13.3447 17.11 12.6455 17.4 11.8182 17.4Z"
                />
              </svg>
              <svg
                className="icon icon-play-history"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M10.8182 16.285C10.4141 16.5503 10 16.5707 9.57576 16.3462C9.15152 16.1218 8.93939 15.7646 8.93939 15.2749V8.72455C8.93939 8.2348 9.15152 7.87769 9.57576 7.65323C10 7.42876 10.4141 7.44917 10.8182 7.71445L15.8485 10.959C16.0303 11.0814 16.1669 11.2345 16.2582 11.4181C16.3495 11.6018 16.3947 11.7957 16.3939 11.9997C16.3939 12.2038 16.3487 12.3976 16.2582 12.5813C16.1677 12.765 16.0311 12.918 15.8485 13.0404L10.8182 16.285ZM9.36364 23.9679C8.65657 23.8046 7.97455 23.5904 7.31758 23.3251C6.66061 23.0598 6.01939 22.7231 5.39394 22.315C5.07071 22.1109 4.89414 21.8253 4.86424 21.4579C4.83434 21.0906 4.9604 20.7641 5.24242 20.4785C5.44445 20.2744 5.70222 20.1569 6.01576 20.1258C6.32929 20.0948 6.61697 20.1613 6.87879 20.3254C7.32323 20.6111 7.78263 20.8511 8.25697 21.0453C8.73131 21.2396 9.22141 21.3975 9.72727 21.5192C10.0101 21.6008 10.2477 21.7591 10.44 21.9942C10.6323 22.2293 10.7281 22.4893 10.7273 22.7741C10.7273 23.1823 10.5911 23.5039 10.3188 23.7389C10.0465 23.974 9.72808 24.0503 9.36364 23.9679ZM3.51515 18.7337C3.23232 19.0194 2.91394 19.1472 2.56 19.117C2.20606 19.0868 1.92849 18.9182 1.72727 18.6113C1.32323 18.0195 0.98505 17.3922 0.712727 16.7294C0.440404 16.0667 0.22303 15.3675 0.0606062 14.6321C-0.0404039 14.2648 0.0254545 13.9383 0.258182 13.6526C0.490909 13.3669 0.808889 13.2241 1.21212 13.2241C1.49495 13.2241 1.75758 13.3261 2 13.5302C2.24242 13.7342 2.40404 13.9791 2.48485 14.2648C2.60606 14.7954 2.76768 15.2953 2.9697 15.7646C3.17172 16.234 3.40404 16.6931 3.66667 17.1421C3.82828 17.3869 3.89414 17.6624 3.86424 17.9685C3.83434 18.2746 3.71798 18.5297 3.51515 18.7337ZM1.24242 10.7754C0.838384 10.7754 0.515152 10.6325 0.272727 10.3468C0.0303031 10.0611 -0.0505051 9.73465 0.030303 9.36734C0.191919 8.65313 0.414141 7.95401 0.69697 7.27C0.979798 6.58599 1.32323 5.9485 1.72727 5.35754C1.92929 5.05145 2.20727 4.8882 2.56121 4.8678C2.91515 4.84739 3.23313 4.98003 3.51515 5.26572C3.71717 5.46978 3.83354 5.72485 3.86424 6.03094C3.89495 6.33704 3.82909 6.61252 3.66667 6.85739C3.40404 7.28592 3.17172 7.73975 2.9697 8.21888C2.76768 8.69802 2.60606 9.20327 2.48485 9.73465C2.40404 10.0203 2.24727 10.2652 2.01455 10.4693C1.78182 10.6733 1.52444 10.7754 1.24242 10.7754ZM14.4848 23.9373C14.1212 24.0189 13.8081 23.9475 13.5455 23.723C13.2828 23.4986 13.1515 23.1925 13.1515 22.8047C13.1515 22.5191 13.2477 22.2538 13.44 22.0089C13.6323 21.764 13.8695 21.6008 14.1515 21.5192C16.3131 20.9478 18.0909 19.7899 19.4848 18.0456C20.8788 16.3013 21.5758 14.286 21.5758 11.9997C21.5758 9.71424 20.8788 7.68384 19.4848 5.90851C18.0909 4.13318 16.3131 2.98023 14.1515 2.44968C13.8687 2.36805 13.6311 2.2097 13.4388 1.97462C13.2465 1.73955 13.1507 1.47957 13.1515 1.1947C13.1515 0.806987 13.2881 0.495998 13.5612 0.261737C13.8343 0.0274748 14.1523 -0.0492523 14.5152 0.0315558C17.2828 0.643738 19.5556 2.06196 21.3333 4.28622C23.1111 6.51049 24 9.08165 24 11.9997C24 14.8974 23.1063 17.4481 21.3188 19.652C19.5313 21.8559 17.2533 23.2843 14.4848 23.9373ZM6.78788 3.70465C6.52525 3.8679 6.24727 3.92912 5.95394 3.88831C5.66061 3.84749 5.41333 3.72506 5.21212 3.521C4.92929 3.23531 4.80283 2.90881 4.83273 2.5415C4.86263 2.17419 5.0396 1.88851 5.36364 1.68445C5.9899 1.27633 6.63636 0.939627 7.30303 0.674348C7.9697 0.409068 8.65657 0.194804 9.36364 0.0315558C9.72727 -0.0500686 10.0457 0.0266585 10.3188 0.261737C10.5919 0.496815 10.7281 0.807803 10.7273 1.1947C10.7273 1.48039 10.6263 1.74077 10.4242 1.97585C10.2222 2.21093 9.9798 2.36887 9.69697 2.44968C9.19192 2.57211 8.69697 2.74067 8.21212 2.95534C7.72727 3.17001 7.25253 3.4206 6.78788 3.70465Z"
                />
              </svg>
              <svg
                className="icon icon-music"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M24 2.54971V17.6242C23.9998 18.7471 23.6325 19.8386 22.9553 20.7293C22.278 21.62 21.3286 22.2603 20.2542 22.5507C19.1799 22.8412 18.0406 22.7656 17.0131 22.3358C15.9856 21.9059 15.1273 21.1457 14.5713 20.1732C14.0153 19.2006 13.7927 18.07 13.9379 16.9567C14.0832 15.8434 14.5883 14.8096 15.3748 14.0156C16.1613 13.2216 17.1853 12.7118 18.288 12.5653C19.3907 12.4188 20.5105 12.6437 21.4737 13.2051V7.65232L8.84198 9.77703V18.8995C8.84198 18.976 8.83567 19.0487 8.82304 19.1214C8.91372 20.1021 8.68058 21.0855 8.15993 21.9185C7.63929 22.7515 6.86038 23.3872 5.94455 23.7266C5.02873 24.066 4.02744 24.0901 3.09667 23.795C2.1659 23.4999 1.35794 22.9023 0.798654 22.0953C0.239371 21.2883 -0.0398186 20.3171 0.0045837 19.3332C0.048986 18.3492 0.414486 17.4077 1.04414 16.6554C1.67379 15.903 2.53224 15.3821 3.48572 15.1737C4.43921 14.9653 5.43419 15.0812 6.31565 15.5033V4.67569C6.31557 4.0719 6.52765 3.48766 6.91415 3.02691C7.30066 2.56616 7.83651 2.25878 8.4264 2.15945L21.0581 0.0347476C21.4199 -0.02618 21.7906 -0.00681253 22.1443 0.0915035C22.498 0.18982 22.8262 0.364725 23.1062 0.604062C23.3861 0.843399 23.6111 1.14143 23.7655 1.47742C23.9198 1.81342 23.9999 2.17933 24 2.54971ZM4.4209 17.6242C3.91838 17.6242 3.43644 17.8257 3.0811 18.1845C2.72577 18.5432 2.52614 19.0298 2.52614 19.5372C2.52614 20.0445 2.72577 20.5311 3.0811 20.8899C3.43644 21.2486 3.91838 21.4502 4.4209 21.4502C4.92341 21.4502 5.40535 21.2486 5.76069 20.8899C6.11602 20.5311 6.31565 20.0445 6.31565 19.5372C6.31565 19.0298 6.11602 18.5432 5.76069 18.1845C5.40535 17.8257 4.92341 17.6242 4.4209 17.6242ZM18.9473 15.0735C18.2773 15.0735 17.6347 15.3422 17.1609 15.8206C16.6872 16.2989 16.421 16.9477 16.421 17.6242C16.421 18.3006 16.6872 18.9494 17.1609 19.4278C17.6347 19.9061 18.2773 20.1748 18.9473 20.1748C19.6174 20.1748 20.2599 19.9061 20.7337 19.4278C21.2075 18.9494 21.4737 18.3006 21.4737 17.6242C21.4737 16.9477 21.2075 16.2989 20.7337 15.8206C20.2599 15.3422 19.6174 15.0735 18.9473 15.0735ZM21.4737 2.54971L8.84198 4.67569V7.19192L21.4737 5.06594V2.54971Z"
                />
              </svg>
            </div>
          </div>
          <div className="History">
            <svg
              className="icon icon-slider-button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 72 72"
            >
              <g>
                <g>
                  <path
                    d="M72,36c0,19.9-16.1,36-36,36S0,55.9,0,36,16.1,0,36,0s36,16.1,36,36Z"
                    style={{ fill: "#fcfcff" }}
                  />
                  <path
                    d="M38.8,46.2c-.4-.4-.5-.9-.5-1.4s.2-1,.6-1.4l5.2-5.5H23.4c-.5,0-1-.2-1.3-.6-.4-.4-.5-.8-.5-1.4,0-.5,.2-1,.5-1.4,.4-.4,.8-.6,1.3-.6h20.6l-5.3-5.5c-.4-.4-.6-.8-.6-1.4,0-.5,.2-1,.6-1.4,.4-.4,.8-.6,1.3-.6s.9,.2,1.3,.6l8.5,8.9c.2,.2,.3,.4,.4,.6,.1,.2,.1,.5,.1,.7,0,.3,0,.5-.1,.7s-.2,.4-.4,.6l-8.5,8.9c-.3,.4-.8,.5-1.3,.5-.4,.3-.8,.1-1.2-.3Z"
                    style={{ fill: "#526ed3" }}
                  />
                </g>
              </g>
            </svg>
            <div className="History__wrapper">
              <div className="History__item add-history">
                <div className="icon-wrapper">
                  <svg
                    className="icon icon-plus"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                  >
                    <g>
                      <path d="M13,8h-5v5c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29c-.19-.19-.29-.44-.29-.71v-5H1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29H6V1c0-.27,.11-.52,.29-.71,.19-.19,.44-.29,.71-.29s.52,.11,.71,.29c.19,.19,.29,.44,.29,.71V6h5c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71s-.11,.52-.29,.71c-.19,.19-.44,.29-.71,.29Z" />
                    </g>
                  </svg>
                  <span>История</span>
                </div>
                <img
                  src="./img/users/andrey-kashirskiy.jpeg"
                  alt="Add History"
                />
              </div>
              <div className="History__item">
                <img src="./img/history/poster-1.jpeg" alt="History Poster" />
                <div className="History__owner">
                  <img
                    className="owner__img"
                    src="./img/users/aleksandr-maykov.jpeg"
                    alt="History Owner"
                  />
                  <span className="owner__name">Александр Майков</span>
                </div>
              </div>
              <div className="History__item">
                <img src="./img/history/poster-2.jpeg" alt="History Poster" />
                <div className="History__owner">
                  <img
                    className="owner__img"
                    src="./img/users/darya-gertner.jpeg"
                    alt="History Owner"
                  />
                  <span className="owner__name">Дарья Гертнер</span>
                </div>
              </div>
              <div className="History__item">
                <img src="./img/history/poster-3.jpeg" alt="History Poster" />
                <div className="History__owner">
                  <img
                    className="owner__img"
                    src="./img/users/denis-frolov.jpeg"
                    alt="History Owner"
                  />
                  <span className="owner__name">Денис Фролов</span>
                </div>
              </div>
              <div className="History__item">
                <img src="./img/history/poster-4.jpeg" alt="History Poster" />
                <div className="History__owner">
                  <img
                    className="owner__img"
                    src="./img/users/katarina-fisher.jpeg"
                    alt="History Owner"
                  />
                  <span className="owner__name">Катарина Фишер</span>
                </div>
              </div>
              <div className="History__item">
                <img src="./img/history/poster-1.jpeg" alt="History Poster" />
                <div className="History__owner">
                  <img
                    className="owner__img"
                    src="./img/users/aleksandr-maykov.jpeg"
                    alt="History Owner"
                  />
                  <span className="owner__name">Александр Майков</span>
                </div>
              </div>
              <div className="History__item">
                <img src="./img/history/poster-2.jpeg" alt="History Poster" />
                <div className="History__owner">
                  <img
                    className="owner__img"
                    src="./img/users/darya-gertner.jpeg"
                    alt="History Owner"
                  />
                  <span className="owner__name">Дарья Гертнер</span>
                </div>
              </div>
            </div>
          </div>
          <div className="Post _liked _marked">
            <div className="UserElem">
              <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
              <div className="user__description">
                <a href="#" className="main__text">
                  Александр Майков
                </a>
                <p className="secondary__text">Сегодня 9:37</p>
              </div>
            </div>
            <p className="Post__text">Момент умиротворения и спокойствия</p>
            <div className="media-container">
              <img
                className="media__item"
                src="./img/post/nature-1.png"
                alt="Post Item"
              />
              <img
                className="media__item"
                src="./img/post/nature-2.png"
                alt="Post Item"
              />
              <img
                className="media__item"
                src="./img/post/nature-3.png"
                alt="Post Item"
              />
              <img
                className="media__item"
                src="./img/post/nature-4.png"
                alt="Post Item"
              />
              <img
                className="media__item"
                src="./img/post/nature-5.png"
                alt="Post Item"
              />
              <img
                className="media__item"
                src="./img/post/nature-6.png"
                alt="Post Item"
              />
            </div>
            <div className="PostControls">
              <div className="icon-wrapper like">
                <span className="count likes-count">-500</span>
                <svg
                  className="icon icon-like"
                  viewBox="0 0 23 23"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="icon"
                    d="M11.5 23L9.8325 21.3455C3.91 15.4921 0 11.6191 0 6.89373C0 3.02071 2.783 0 6.325 0C8.326 0 10.2465 1.01526 11.5 2.60708C12.7535 1.01526 14.674 0 16.675 0C20.217 0 23 3.02071 23 6.89373C23 11.6191 19.09 15.4921 13.1675 21.3455L11.5 23Z"
                  />
                </svg>
              </div>
              <div className="icon-wrapper comment">
                <span className="count comments-count">500</span>
                <svg
                  className="icon icon-comment"
                  viewBox="0 0 26 26"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="comment"
                    d="M9.25 25.5C8.91848 25.5 8.60054 25.3683 8.36612 25.1339C8.1317 24.8995 8 24.5815 8 24.25V20.5H3C2.33696 20.5 1.70107 20.2366 1.23223 19.7678C0.763392 19.2989 0.5 18.663 0.5 18V3C0.5 2.33696 0.763392 1.70107 1.23223 1.23223C1.70107 0.763392 2.33696 0.5 3 0.5H23C23.663 0.5 24.2989 0.763392 24.7678 1.23223C25.2366 1.70107 25.5 2.33696 25.5 3V18C25.5 18.663 25.2366 19.2989 24.7678 19.7678C24.2989 20.2366 23.663 20.5 23 20.5H15.375L10.75 25.1375C10.5 25.375 10.1875 25.5 9.875 25.5H9.25ZM10.5 18V21.85L14.35 18H23V3H3V18H10.5Z"
                    fill="#6D6F7A"
                  />
                </svg>
              </div>
              <div className="icon-wrapper repost">
                <svg
                  className="icon icon-repost"
                  viewBox="0 0 32 26"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="icon"
                    d="M31.1767 11.6881L20.105 0.818783C19.9503 0.666682 19.753 0.563052 19.5383 0.520999C19.3235 0.478945 19.1009 0.500357 18.8985 0.582526C18.6962 0.664696 18.5232 0.803931 18.4014 0.982625C18.2797 1.16132 18.2146 1.37144 18.2145 1.58643V7.06864C14.6246 7.37026 10.6595 9.09577 7.39755 11.8117C3.46988 15.0834 1.02443 19.2993 0.510988 23.6824C0.470864 24.0231 0.541243 24.3676 0.712109 24.6669C0.882976 24.9661 1.14562 25.2048 1.46267 25.349C1.77972 25.4932 2.13502 25.5355 2.47801 25.47C2.82099 25.4044 3.13418 25.2344 3.37301 24.984C4.89536 23.393 10.3122 18.3619 18.2145 17.9189V23.3251C18.2146 23.54 18.2797 23.7502 18.4014 23.9289C18.5232 24.1075 18.6962 24.2468 18.8985 24.329C19.1009 24.4111 19.3235 24.4325 19.5383 24.3905C19.753 24.3484 19.9503 24.2448 20.105 24.0927L31.1767 13.2234C31.3837 13.0196 31.5 12.7436 31.5 12.4557C31.5 12.1679 31.3837 11.8919 31.1767 11.6881ZM20.4289 20.7015V16.8035C20.4289 16.5152 20.3122 16.2387 20.1046 16.0349C19.897 15.831 19.6153 15.7165 19.3217 15.7165C15.4356 15.7165 11.6504 16.7124 8.07153 18.6784C6.24879 19.6841 4.55049 20.8932 3.01041 22.2816C3.8131 19.0425 5.83645 15.9625 8.82994 13.4693C12.0435 10.7941 15.9656 9.19495 19.3217 9.19495C19.6153 9.19495 19.897 9.08043 20.1046 8.87659C20.3122 8.67275 20.4289 8.39629 20.4289 8.10802V4.21137L28.8281 12.4557L20.4289 20.7015Z"
                    fill="#6D6F7A"
                  />
                </svg>
              </div>
              <div className="icon-wrapper mark">
                <svg
                  className="icon icon-mark"
                  viewBox="0 0 21 25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="mark"
                    d="M2.5 24.8819C2.02381 25.0725 1.57143 25.031 1.14286 24.7574C0.714285 24.4838 0.5 24.0844 0.5 23.5591V2.85999C0.5 2.07349 0.78 1.39996 1.34 0.839407C1.9 0.278851 2.57238 -0.0009509 3.35714 2.42783e-06H17.6429C18.4286 2.42783e-06 19.1014 0.280281 19.6614 0.840837C20.2214 1.40139 20.5009 2.07444 20.5 2.85999V23.5591C20.5 24.0834 20.2857 24.4829 19.8571 24.7574C19.4286 25.032 18.9762 25.0735 18.5 24.8819L10.5 21.4499L2.5 24.8819Z"
                  />
                </svg>
              </div>
            </div>
            <div className="CommentBlock">
              <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
              <div className="comment__description">
                <a href="#" className="comment__owner">
                  Карина Савина
                </a>
                <p className="comment__text">Это текст комментария...</p>
                <a href="#" className="reply">
                  Ответить
                </a>
              </div>
              <span className="date">25 марта</span>
              <svg
                className="icon icon-like"
                viewBox="0 0 23 23"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="icon"
                  d="M11.5 23L9.8325 21.3455C3.91 15.4921 0 11.6191 0 6.89373C0 3.02071 2.783 0 6.325 0C8.326 0 10.2465 1.01526 11.5 2.60708C12.7535 1.01526 14.674 0 16.675 0C20.217 0 23 3.02071 23 6.89373C23 11.6191 19.09 15.4921 13.1675 21.3455L11.5 23Z"
                />
              </svg>
            </div>
            <svg
              className="icon icon-more"
              viewBox="0 0 25 5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="more">
                <circle id="ellipse" cx="22.5" cy="2.5" r="2.5" />
                <circle id="ellipse_2" cx="12.5" cy="2.5" r="2.5" />
                <circle id="ellipse_3" cx="2.5" cy="2.5" r="2.5" />
              </g>
            </svg>
          </div>
          <div className="Post Repost _liked _marked">
            <div className="UserElem Repost__owner">
              <img src="./img/users/mark-krahmalev.jpeg" alt="User" />
              <div className="user__description">
                <a href="#" className="main__text">
                  Марк Крахмалев
                </a>
                <p className="secondary__text">20 марта 23:31</p>
              </div>
            </div>
            <div className="Repost__wrapper">
              <div className="UserElem">
                <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
                <div className="user__description">
                  <a href="#" className="main__text">
                    Александр Майков
                  </a>
                  <p className="secondary__text">Сегодня 9:37</p>
                </div>
              </div>
              <div className="media-container">
                <img
                  className="media__item"
                  src="./img/post/garnet-man.png"
                  alt="Post Item"
                />
                <img
                  className="media__item"
                  src="./img/post/garnet.png"
                  alt="Post Item"
                />
              </div>
            </div>
            <div className="PostControls">
              <div className="icon-wrapper like">
                <span className="count likes-count">-500</span>
                <svg
                  className="icon icon-like"
                  viewBox="0 0 23 23"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="icon"
                    d="M11.5 23L9.8325 21.3455C3.91 15.4921 0 11.6191 0 6.89373C0 3.02071 2.783 0 6.325 0C8.326 0 10.2465 1.01526 11.5 2.60708C12.7535 1.01526 14.674 0 16.675 0C20.217 0 23 3.02071 23 6.89373C23 11.6191 19.09 15.4921 13.1675 21.3455L11.5 23Z"
                  />
                </svg>
              </div>
              <div className="icon-wrapper comment">
                <span className="count comments-count">500</span>
                <svg
                  className="icon icon-comment"
                  viewBox="0 0 26 26"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="comment"
                    d="M9.25 25.5C8.91848 25.5 8.60054 25.3683 8.36612 25.1339C8.1317 24.8995 8 24.5815 8 24.25V20.5H3C2.33696 20.5 1.70107 20.2366 1.23223 19.7678C0.763392 19.2989 0.5 18.663 0.5 18V3C0.5 2.33696 0.763392 1.70107 1.23223 1.23223C1.70107 0.763392 2.33696 0.5 3 0.5H23C23.663 0.5 24.2989 0.763392 24.7678 1.23223C25.2366 1.70107 25.5 2.33696 25.5 3V18C25.5 18.663 25.2366 19.2989 24.7678 19.7678C24.2989 20.2366 23.663 20.5 23 20.5H15.375L10.75 25.1375C10.5 25.375 10.1875 25.5 9.875 25.5H9.25ZM10.5 18V21.85L14.35 18H23V3H3V18H10.5Z"
                    fill="#6D6F7A"
                  />
                </svg>
              </div>
              <div className="icon-wrapper repost">
                <svg
                  className="icon icon-repost"
                  viewBox="0 0 32 26"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="icon"
                    d="M31.1767 11.6881L20.105 0.818783C19.9503 0.666682 19.753 0.563052 19.5383 0.520999C19.3235 0.478945 19.1009 0.500357 18.8985 0.582526C18.6962 0.664696 18.5232 0.803931 18.4014 0.982625C18.2797 1.16132 18.2146 1.37144 18.2145 1.58643V7.06864C14.6246 7.37026 10.6595 9.09577 7.39755 11.8117C3.46988 15.0834 1.02443 19.2993 0.510988 23.6824C0.470864 24.0231 0.541243 24.3676 0.712109 24.6669C0.882976 24.9661 1.14562 25.2048 1.46267 25.349C1.77972 25.4932 2.13502 25.5355 2.47801 25.47C2.82099 25.4044 3.13418 25.2344 3.37301 24.984C4.89536 23.393 10.3122 18.3619 18.2145 17.9189V23.3251C18.2146 23.54 18.2797 23.7502 18.4014 23.9289C18.5232 24.1075 18.6962 24.2468 18.8985 24.329C19.1009 24.4111 19.3235 24.4325 19.5383 24.3905C19.753 24.3484 19.9503 24.2448 20.105 24.0927L31.1767 13.2234C31.3837 13.0196 31.5 12.7436 31.5 12.4557C31.5 12.1679 31.3837 11.8919 31.1767 11.6881ZM20.4289 20.7015V16.8035C20.4289 16.5152 20.3122 16.2387 20.1046 16.0349C19.897 15.831 19.6153 15.7165 19.3217 15.7165C15.4356 15.7165 11.6504 16.7124 8.07153 18.6784C6.24879 19.6841 4.55049 20.8932 3.01041 22.2816C3.8131 19.0425 5.83645 15.9625 8.82994 13.4693C12.0435 10.7941 15.9656 9.19495 19.3217 9.19495C19.6153 9.19495 19.897 9.08043 20.1046 8.87659C20.3122 8.67275 20.4289 8.39629 20.4289 8.10802V4.21137L28.8281 12.4557L20.4289 20.7015Z"
                    fill="#6D6F7A"
                  />
                </svg>
              </div>
              <div className="icon-wrapper mark">
                <svg
                  className="icon icon-mark"
                  viewBox="0 0 21 25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="mark"
                    d="M2.5 24.8819C2.02381 25.0725 1.57143 25.031 1.14286 24.7574C0.714285 24.4838 0.5 24.0844 0.5 23.5591V2.85999C0.5 2.07349 0.78 1.39996 1.34 0.839407C1.9 0.278851 2.57238 -0.0009509 3.35714 2.42783e-06H17.6429C18.4286 2.42783e-06 19.1014 0.280281 19.6614 0.840837C20.2214 1.40139 20.5009 2.07444 20.5 2.85999V23.5591C20.5 24.0834 20.2857 24.4829 19.8571 24.7574C19.4286 25.032 18.9762 25.0735 18.5 24.8819L10.5 21.4499L2.5 24.8819Z"
                  />
                </svg>
              </div>
            </div>
            <div className="CommentBlock">
              <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
              <div className="comment__description">
                <a href="#" className="comment__owner">
                  Карина Савина
                </a>
                <p className="comment__text">Это текст комментария...</p>
                <a href="#" className="reply">
                  Ответить
                </a>
              </div>
              <span className="date">25 марта</span>
              <svg
                className="icon icon-like"
                viewBox="0 0 23 23"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="icon"
                  d="M11.5 23L9.8325 21.3455C3.91 15.4921 0 11.6191 0 6.89373C0 3.02071 2.783 0 6.325 0C8.326 0 10.2465 1.01526 11.5 2.60708C12.7535 1.01526 14.674 0 16.675 0C20.217 0 23 3.02071 23 6.89373C23 11.6191 19.09 15.4921 13.1675 21.3455L11.5 23Z"
                />
              </svg>
            </div>
            <svg
              className="icon icon-more"
              viewBox="0 0 25 5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="more">
                <circle id="ellipse" cx="22.5" cy="2.5" r="2.5" />
                <circle id="ellipse_2" cx="12.5" cy="2.5" r="2.5" />
                <circle id="ellipse_3" cx="2.5" cy="2.5" r="2.5" />
              </g>
            </svg>
          </div>
        </main>
        <aside className="RightSide">
          <div className="List">
            <div className="List__title">
              <h2>Близкие друзья</h2>
              <span className="count">123</span>
            </div>
            <div className="UserElem">
              <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
              <div className="user__description">
                <p className="main__text">Александр Майков</p>
                <p className="secondary__text _online">Онлайн</p>
              </div>
              <span className="Badge">3</span>
            </div>
            <div className="UserElem">
              <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
              <div className="user__description">
                <p className="main__text">Александр Майков</p>
                <p className="secondary__text _online">Онлайн</p>
              </div>
              <span className="Badge">3</span>
            </div>
            <div className="UserElem">
              <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
              <div className="user__description">
                <p className="main__text">Александр Майков</p>
                <p className="secondary__text _online">Онлайн</p>
              </div>
              <span className="Badge">3</span>
            </div>
          </div>
          <div className="MusicBlock">
            <div className="MusicBlock__title">
              <h2>Вы недавно слушали</h2>
              <span>123</span>
            </div>
            <div className="MusicElem">
              <img src="./img/music/album-1.png" alt="Album" />
              <div className="music__description">
                <p className="main__text">Pieces</p>
                <p className="secondary__text">Andrew Belle</p>
              </div>
              <div className="plus-button _active"></div>
            </div>
            <div className="MusicElem">
              <img src="./img/music/album-2.png" alt="Album" />
              <div className="music__description">
                <p className="main__text">In the Wind</p>
                <p className="secondary__text">On-The-Go</p>
              </div>
              <div className="plus-button"></div>
            </div>
            <div className="MusicElem">
              <img src="./img/music/album-3.png" alt="Album" />
              <div className="music__description">
                <p className="main__text">On you own</p>
                <p className="secondary__text">Meltt</p>
              </div>
              <div className="plus-button _active"></div>
            </div>
            <div className="MusicElem">
              <img src="./img/music/album-4.png" alt="Album" />
              <div className="music__description">
                <p className="main__text">Infinity</p>
                <p className="secondary__text">James Young</p>
              </div>
              <div className="plus-button"></div>
            </div>
            <div className="MusicElem">
              <img src="./img/music/album-5.png" alt="Album" />
              <div className="music__description">
                <p className="main__text">Let me follow</p>
                <p className="secondary__text">Son Lux</p>
              </div>
              <div className="plus-button _active"></div>
            </div>
            <div className="MusicElem">
              <img src="./img/music/album-6.png" alt="Album" />
              <div className="music__description">
                <p className="main__text">Youth</p>
                <p className="secondary__text">Glass Animals</p>
              </div>
              <div className="plus-button"></div>
            </div>
          </div>
        </aside>
      </div>
    </MainStyle>
  );
};
