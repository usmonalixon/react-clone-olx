import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import data from "../data";

export default class Ads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ad: null,
    };
  }
  openModal = (ad) => {
    this.setState({ ad });
  };
  closeModal = () => {
    this.setState({ ad: null });
  };
  render() {
    const { ad } = this.state;
    return (
      <div>
        <Fade bottom cascade>
          <ul className="ads">
            {data.ads.map((ad) => (
              <li key={ad._id}>
                <div className="ad">
                  <a href={"#" + ad._id} onClick={() => this.openModal(ad)}>
                    <img src={ad.image} alt={ad.title}></img>
                    <p>{ad.title}</p>
                  </a>
                  <div className="ad-sort">{ad.sort}</div>
                  <div className="ad-price">{ad.price}</div>
                </div>
              </li>
            ))}
          </ul>
        </Fade>
        {ad && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <button className="close-modal" onClick={this.closeModal}>
                x
              </button>
              <div className="details">
            <div className="details-image">
              <img src={ad.image} alt="product"></img>
            </div>
            <div className="details-info">
              <ul>
                <li>
                  <h4>{ad.name}</h4>
                </li>
                <li>
                  Price: <b>${ad.price}</b>
                </li>
                <li>
                  Description:
                  <div>{ad.description}</div>
                </li>
              </ul>
            </div>
            <div className="details-action">
              <ul>
                <li>Price: {ad.price}</li>
              </ul>
            </div>
          </div>
            </Zoom>
          </Modal>
        )}
      </div>
    );
  }
}
