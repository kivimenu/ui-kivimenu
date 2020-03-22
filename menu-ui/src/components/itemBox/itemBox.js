import React from 'react';

import "./itemBox.css";
import { Link } from 'react-router-dom';

class ItemBox extends React.Component {
    render() {
        return (

            <div className="itemBox mb-4"><Link to={'/itemDetails/' + this.props.card.id}>
                <img alt="" src={"http://" + this.props.card.contents[0].relativePath} width="100%" height="55%" />
            </Link>
                <div className="container name">{this.props.card.name}</div>
                <div className="container details">
                    <small>Açıklama:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</small>
                    <hr />
                    <div className="d-flex flex-row detailsWrapper align-items-center">
                        <div className="duration text-left">{this.props.card.unitPrice} ₺</div>
                        <div className="ingredients button text-center ml-auto rounded-sm">
                            <span className="quantity__minus">-</span>
                            <input name="quantity" type="text" className="quantity__input" value="1"></input>
                            <span className="quantity__plus">+</span>
                        </div>
                        <button className="button text-center ml-auto rounded-sm">🍽 Order</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default ItemBox
