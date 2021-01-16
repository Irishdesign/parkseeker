import * as React from "react";

import { ParkData } from "../../store/types";
import "./style.scss";

interface IProps {
    data: ParkData;
    setShow: () => any;
}
const Card = (props: IProps) => {
    const { data } = props;

    return (
        <div className="card">
            <div className="header">
                <div className="name">{data.fullName}</div>
                <div className="states">
                    <span>states</span>: {data.states}
                </div>
            </div>
            <div className="img">
                {data.images[0] ? <img src={data.images[0].url} alt={data.images[0].altText} /> : null}
            </div>
            <div className={data.description}>{data.description} </div>

            <div className="Activities">
                <p>
                    {data.activities.length > 0 ? <b>Activities: </b> : null}
                    {data.activities.map((a, idx) => {
                        if (idx === data.activities.length - 1) {
                            return a.name;
                        }
                        return a.name + ", ";
                    })}
                </p>
            </div>
            <div className="btn" onClick={() => props.setShow()}>
                Details
            </div>
        </div>
    );
};

export default Card;
