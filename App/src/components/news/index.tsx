import * as React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { newsData } from "../../store/types";
import "./style.scss";
import { fetchNews } from "../../utilities/fetchNews";
interface IProps {
    setClose: () => any;
}
const News = (props: IProps) => {
    const { setClose } = props;
    const { useEffect, useState } = React;
    const [news, setNews] = useState<newsData[]>();
    useEffect(() => {
        fetchNews().then((r) => {
            setNews(r);
        });
    }, []);
    return (
        <div className="news">
            <div className="header">
                <div className="title">News</div>
                <div
                    className="closeBtn"
                    onClick={() => {
                        setClose();
                    }}
                >
                    <CloseIcon />
                </div>
            </div>
            <ul className="block">
                {news?.map((p) => {
                    return (
                        <li key={p.title + p.publishedAt}>
                            {p.publishedAt.split("T")[0]}
                            <a href={p.url} target="_blank" rel="noopener noreferrer">
                                {p.title}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default News;
