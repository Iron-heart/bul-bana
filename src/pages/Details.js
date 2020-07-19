import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { MdLocationOn } from "react-icons/md";
import { MdRateReview } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";
import { AiFillPhone } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/io";
import BusinessLocationMap from "../components/BusinessLocationMap/BusinessLocationMap";
import StarRatingComponent from "react-star-rating-component";

export default function Details({ searchYelp, match }) {
  useEffect(() => {
    fetchBusiness();
  }, []);

  const [business, setBusiness] = useState({});
  const [loading, setLoading] = useState(true);
  //const [businessImages, setBusinessImages] = useState([]);

  const fetchBusiness = async () => {
    const fetchBusiness = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${match.params.id}?locale=tr_TR`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}`,
        },
      }
    );
    const business = await fetchBusiness.json();
    setBusiness(business);
    //setBusinessImages(business.photos);
    setLoading(false);
    console.log(JSON.stringify(business, null, 2));
  };

  if (loading) {
    return <div className="details__loading">Yükleniyor...</div>;
  }
  return (
    <div className="details">
      <div className="details__navbar">
        <Link to="/">
          <p className="details__logo">Bul Bana!</p>
        </Link>
        <IconContext.Provider value={{ size: "1.5em" }}>
          <div>
            <Link to="/">
              <IoMdArrowRoundBack />
            </Link>
          </div>
        </IconContext.Provider>
      </div>
      <div className="details__photo-container">
        {business.image_url ? (
          <img src={business.image_url} alt="İşletme Görseli" />
        ) : (
          <p>İşletme Görseli Bulunamadı.</p>
        )}
      </div>
      <div className="details__business-info">
        <div className="details__business-header">
          <h2>{business.name}</h2>
        </div>
        <div className="details__info-container">
          <div className="details__address">
            <p>
              <MdLocationOn />
              <span>Adres:</span>
              {business.location.display_address}
            </p>
          </div>
          <div className="details__rating">
            <p>
              <MdRateReview />
              <span>İnceleme Sayısı:</span>
              {business.review_count}
            </p>
            <p>
              <FaThumbsUp />
              <span>Puan:</span>
              <StarRatingComponent
                name="rate2"
                editing={false}
                starColor={"#0b8457"}
                starCount={5}
                value={business.rating}
                className="details__stars"
              />
            </p>
          </div>
          {business.price ? (
            <div className="details__price">
              <p>
                <IoMdPricetags />
                <span>Fiyat:</span>
                {business.price}
              </p>
            </div>
          ) : null}
          {business.display_phone ? (
            <div className="details__phone">
              <p>
                <AiFillPhone />
                <span>Telefon:</span>
                {business.display_phone}
              </p>
            </div>
          ) : null}

          <div className="details__map">
            <BusinessLocationMap
              lat={business.coordinates.latitude}
              lng={business.coordinates.longitude}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
