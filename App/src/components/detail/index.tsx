import * as React from "react";
import CloseIcon from "@material-ui/icons/Close";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { ParkData, eventData } from "../../store/types";
import "./style.scss";

interface IProps {
    data: ParkData;
    setClose: () => any;
    events: eventData[];
}
const Detail = (props: IProps) => {
    const { data, setClose, events } = props;
    const { useState } = React;
    const weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const [isGood, setIsgood] = useState(false);
    return (
        <div className="detailCardContent">
            <div className="header">
                <a
                    href={`https://www.google.com.tw/maps/place/` + data.latitude + "," + data.longitude}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="name">{data.fullName} @Google map</div>
                </a>
                <div
                    className="closeBtn"
                    onClick={() => {
                        setClose();
                    }}
                >
                    <CloseIcon />
                </div>
            </div>

            <div className="imgs">
                {data.images.map((img) => {
                    return <img key={img.url} src={img.url} alt={img.altText} />;
                })}
            </div>
            <div className="block">
                <div className="sheftr">
                    <div className="hours">
                        <b>Open hours: </b>
                        {data.operatingHours.map((op, idx) => {
                            return (
                                <div key={op.name + idx}>
                                    <b> - {op.name}: </b>
                                    <ul className="op_hours">
                                        {weekdays.map((d) => {
                                            return (
                                                <li className="op_hour" key={`hour_${op.standardHours[d].name + d}`}>
                                                    {d.toLocaleUpperCase()}
                                                    <div className="status">{op.standardHours[d]}</div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="sheftl">
                    <div className="fees">
                        <b>Entrance Fees: </b>
                        {data.entranceFees.map((d) => {
                            return (
                                <ul className="fee" key={d.title}>
                                    <li>{d.title + ": " + d.cost}</li>
                                </ul>
                            );
                        })}
                    </div>
                    <div className="contact">
                        <b>Contact: </b>
                        {data.contacts.phoneNumbers.map((p) => {
                            return (
                                <ul className="phone" key={p.phoneNumber}>
                                    <li>{p.type + ": " + p.phoneNumber}</li>{" "}
                                </ul>
                            );
                        })}
                        {data.contacts.emailAddresses.map((p, idx) => {
                            return (
                                <ul className="email" key={p.emailAddress}>
                                    <li>
                                        Email{idx === 0 ? "" : idx}: {p.emailAddress}
                                    </li>
                                </ul>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="things">
                <p>
                    <b>Things to do: </b>
                    {data.topics.map((a, idx) => {
                        if (idx === data.topics.length - 1) {
                            return a.name;
                        }
                        return a.name + ", ";
                    })}
                </p>
            </div>
            <div className="events">
                <b>Events: </b>

                {events.map((d) => {
                    return (
                        <div className="event" key={d.title}>
                            <div className="icon">
                                <ArrowRightIcon />
                            </div>
                            <div className="date">
                                {d.date} - {d.dateend}
                            </div>
                            <div className="title">{d.title}</div>
                        </div>
                    );
                })}
            </div>
            <div>
                <b> Vote for this park:</b>
            </div>
            <div className={`vote ${isGood ? "active" : ""}`} onClick={() => setIsgood(!isGood)}>
                <ThumbUpAltIcon />
            </div>
        </div>
    );
};

export default Detail;
