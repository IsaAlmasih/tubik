"use client";
import styles from "./styles.module.css"
import ImageViewer from "react-simple-image-viewer";

import logo from "../assets/Pho.png";

import img1 from "../assets/112.jpg";
import img2 from "../assets/112.jpg";
import img3 from "../assets/112.jpg";
import img5 from "../assets/182.jpg";
import img6 from "../assets/210.jpg";
import img7 from "../assets/270.jpg";
import img8 from "../assets/512.jpg";
import img10 from "../assets/512.jpg";
import img15 from "../assets/512.jpg";
import img12 from "../assets/910.jpg";
import img13 from "../assets/910.jpg";
import img14 from "../assets/512.jpg";

import { useCallback, useState } from "react";

import Image from "next/image";

import img11 from "../assets/tu.jpg";
import img16 from "../assets/tubi.jpg";
import Link from "next/link";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    img15.src,
    img12.src,
    img13.src,
    img14.src,
    img10.src,
    img1.src,
    img2.src,
    img3.src,
    img5.src,
    img6.src,
    img7.src,
    img8.src,
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.intro}>
        {" "}
        {/* Дешевле и быстрей наносить клей нашими машинами. */}
      </div>
      <div className={styles.section}>
        <div className={styles.contacts}>
          <div>
            <a
              href={
                "https://www.google.com/maps/search/119071,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,%20%D1%83%D0%BB%20%D0%9E%D1%80%D0%B4%D0%B6%D0%BE%D0%BD%D0%B8%D0%BA%D0%B8%D0%B4%D0%B7%D0%B5,%2010,"
              }
            >
              {" "}
              +7(905)899-45-73 Город Орск. Ул. Краматорская, дом 42.
            </a>
          </div>
          <div>
            Тел: <a href={"tel:+7(905)8994573"}>+7(905)899-45-73 (WhatsApp)</a>
          </div>
          <div>
            {/* email: */}
            {/* <a href={"mailto:info@sharov-tech.com"}> 23v@mail.ru</a> */}
          </div>
        </div>
        <div className={styles.about}>
          <h2>Добро пожаловать на наш сайт!</h2>
          <p>
            Впусти в свою жизнь краски! У нас можно не только приобрести
            художественные товары,но и получить качественные рекомендации по их
            использованию.
          </p>
          <ul>
            <center>
              <li>Товары для художников.</li>
              <li>Товары для писателей.</li>
              <li>Товары для лепщиков.</li>
              <li>Товары для затейников.</li>
            </center>
          </ul>
        </div>
        <div className={styles.photos}>
          {images.map((src, index) => (
            <img
              src={src}
              onClick={() => openImageViewer(index)}
              width="300"
              key={index}
              style={{ margin: "2px" }}
              alt=""
            />
          ))}

          {isViewerOpen && (
            <ImageViewer
              src={images}
              currentIndex={currentImage}
              onClose={closeImageViewer}
              disableScroll={false}
              backgroundStyle={{
                backgroundColor: "rgba(0,0,0,0.9)",
              }}
              style={{
                padding: "60px",
              }}
              closeOnClickOutside={true}
            />
          )}
        </div>
        {/* <div className={styles.about}>
          <h2>Клеемазательные машины: МКМ39 и МКМ59</h2>
          <p>Описание магазина и товаров в нём.</p>
        </div> */}
        {/* <div className={styles.aboutTex}>
          <h3>Технические характеристики:</h3>
          <ul>
            <li>Рабочая ширина: МКМ39 – 390 – 590 мм.</li>
            <li>Расположение клеевого аппарата – нижнее</li>
            <li>Загрузка/приёмка листов – вручную</li>
            <li>Электропитание – 220В</li>
            <li>Габариты – 580х250х130</li>
            <li>Вес: МКМ39– 10 кг., МКМ59 – 12 кг.</li>
            <li>Цена: МКМ39 — 57000 руб., МКМ59 — 65000 руб.</li>
          </ul>
        </div> */}
        {/* <div className={styles.video}>
          <h2>Видео инструкция.</h2>
          <iframe
            title="28 декабря 2021 г."
            width="750"
            height="422"
            src="https://www.youtube.com/embed/Qx5B9isjumQ?feature=oembed"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
          <iframe
            title="9 октября 2021 г."
            width="750"
            height="422"
            src="https://www.youtube.com/embed/cPrfIAsJZFw?feature=oembed"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
          <iframe
            title="Клеемазательная машина made in RUSSIA"
            width="750"
            height="422"
            src="https://www.youtube.com/embed/VxbTsAnSNwk?feature=oembed"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div> */}
        {/* <div className={styles.video}>
          <h2>Машина в работе</h2>
          <iframe
            width="720"
            height="405"
            src="https://rutube.ru/play/embed/59ed7d58c1b327282743d5f1a12da5e2/"
            allow="clipboard-write; autoplay"
          ></iframe>
        </div> */}
        {/* <div className={styles.video}>
          <h2>Загиб клапанов</h2>
          <iframe
            width="720"
            height="405"
            src="https://rutube.ru/play/embed/cb0d52ef97865933fe6f6a289fb29242/"
            allow="clipboard-write; autoplay"
          ></iframe>
          <iframe
            width="720"
            height="405"
            src="https://rutube.ru/play/embed/a8ba3e3ee71420219c642c4715dad14f/"
            allow="clipboard-write; autoplay"
          ></iframe>
        </div> */}
        <div className={styles.feedback}>
          <h2>Наше сообщество в контакте.</h2>
          <Link href="https://vk.com/tube_orsk">
            <Image src={img11} width={50} height={50} alt="logo" />
          </Link>
        </div>
        <div className={styles.feedback}></div>
        {/* <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A590e57a4b7be241dc451428b14f86ef59816a8888cea70038fb858f36b1a71e4&amp;source=constructor"
          width="100%"
          height="400"
          frameBorder="0"
        ></iframe> */}
        {/* Подвал */}
        <footer className={styles.footer}>
          {/*Препроцессор. Что это */}

          {/* Stylus, ++++(SASS/SCSS) - надо разобрать!!!!! */}

          {/* БЭМ - методология БЛОК-ЭЛЕМЕНТ-МОДИФИКАТОР */}
          {/* <footer className="footer">
                <div className="footer__col">
                    <a className="footer__col-link footer__col-link_active">
                    </a>
                    <a className="footer__col-link">
                    </a>
                    <a className="footer__col-link">
                    </a>
                </div>
          </footer> */}

          {/* Левая колонка */}
          <div className={styles.footerCol}>
            <a href="\">
              <Image
                className={styles.footerLogo}
                src={img16}
                width={60}
                height={50}
                alt="logo"
              />
            </a>
            <h3 className={styles.footerHeading}>Реквизиты:</h3>
            <div className={styles.footerGroup}>
              <p className={styles.footerText}>ИНН 000000000</p>
              <p className={styles.footerText}>КПП 000000000</p>
              <p className={styles.footerText}>БИГ БАНКА 000000000</p>
              <p className={styles.footerText}>
                РАСЧЁТНЫЙ СЧЕТ 000000000000000000
              </p>
              <p className={styles.footerText}>КОР СЧЕТ 000000000000000000</p>
              <p className={styles.footerText}>ТЕЛ: +7(905)899-45-73</p>
            </div>
          </div>

          {/* Правая колонка */}
          <div className={styles.footerCol}>
            <a href={"/"}>SEO Продвижение.</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
