import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "./utilities/fetchData";
import { fetchEvents } from "./utilities/fetchEvents";
import { ParkData, eventData, UPDATE_ROWDATA, UPDATE_DETAIL, fetchtype } from "./store/types";
import Card from "./components/card";
import Detail from "./components/detail";
import News from "./components/news";
import "./style.scss";
import SearchIcon from "@material-ui/icons/Search";
import CircularProgress from "@material-ui/core/CircularProgress";
function App() {
    const { useEffect, useState } = React;
    const [keyWord, setKeyword] = useState("acad");
    const [fType, setFtype] = useState(fetchtype.parkCode);
    const rowData: ParkData[] = useSelector((state) => state.rowData);
    const detailData: ParkData[] = useSelector((state) => state.detailData);
    const eventsData: eventData[] = useSelector((state) => state.eventData);
    const [isloaging, setIsloading] = useState(true);
    const [isShowDetail, setIsShowDetail] = useState(false);
    const [isShowNews, setIsShowNews] = useState(false);
    const dispatch = useDispatch();
    const updateRowData = (data: ParkData[]) => {
        dispatch({
            type: UPDATE_ROWDATA,
            payload: data,
        });
    };
    const updateDetail = (data: ParkData[], events: eventData[]) => {
        dispatch({
            type: UPDATE_DETAIL,
            payload: { data, events },
        });
    };
    useEffect(() => {
        fetchData().then((r) => {
            updateRowData(r.data);
        });
        //eslint-disable-next-line
    }, []);
    useEffect(() => {
        if (rowData) {
            setIsloading(false);
        }
        //eslint-disable-next-line
    }, [rowData]);

    const handleSearch = () => {
        setIsloading(true);
        fetchData(keyWord, fType).then((r) => {
            updateRowData(r.data);
        });
    };
    const handleDetail = (data: ParkData[]) => {
        fetchEvents(data[0].parkCode).then((r) => {
            updateDetail(data, r.data);
        });
    };
    return (
        <div className="App">
            <div className="searchBar">
                <div className="searchInput">
                    <input
                        defaultValue={keyWord}
                        onChange={(e) => {
                            setKeyword(e.currentTarget.value);
                        }}
                    />
                    <div
                        className="searchBtn"
                        onClick={() => {
                            handleSearch();
                            setIsShowNews(false);
                            setIsShowDetail(false);
                        }}
                    >
                        <SearchIcon />
                    </div>
                    <div className="dropdown">
                        <select value={fType} onChange={(v) => setFtype(v.target.value as fetchtype)}>
                            <option value={fetchtype.parkCode}>Park code</option>
                            <option value={fetchtype.stateCode}>State code</option>
                        </select>
                    </div>
                </div>
                <div
                    className="news_btn"
                    onClick={() => {
                        setIsShowNews(true);
                        setIsShowDetail(false);
                    }}
                >
                    News
                </div>
            </div>
            {isloaging ? (
                <div className="progress">
                    <CircularProgress color="primary" />
                </div>
            ) : (
                <>
                    <div className="cardContainer">
                        {rowData.map((d) => {
                            return (
                                <Card
                                    key={d.id}
                                    data={d}
                                    setShow={() => {
                                        handleDetail([d]);
                                        setIsShowDetail(true);
                                    }}
                                />
                            );
                        })}
                    </div>
                </>
            )}
            {isShowDetail && detailData[0] ? (
                <>
                    <div
                        className="mask"
                        onClick={() => {
                            setIsShowDetail(false);
                        }}
                    ></div>
                    <div className="detailCard">
                        <Detail
                            data={detailData[0]}
                            events={eventsData}
                            setClose={() => {
                                setIsShowDetail(false);
                            }}
                        />
                    </div>
                </>
            ) : null}
            {isShowNews ? (
                <>
                    <div
                        className="mask"
                        onClick={() => {
                            setIsShowNews(false);
                        }}
                    ></div>
                    <div className="detailCard">
                        <News
                            setClose={() => {
                                setIsShowNews(false);
                            }}
                        />
                    </div>
                </>
            ) : null}
        </div>
    );
}

export default App;
