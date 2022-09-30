import {Col} from "react-bootstrap"
import { card } from "./Projects"

export const ProjectCard1 = ({title, description, imgUrl}) => {
    return (
        <Col sm={6} md={4}>
            {card?.map((card) => (
            <div key={card.projects1.title.toString()} className="proj-imgbx">
                <img src={card.projects1.imgUrl} />
                <div className="proj-txtx">
                    <h4>{card.projects1.title}</h4>
                    <span>{card.projects1.description}</span>
                </div>
            </div>
            ))}
        </Col>
    )
}

export const ProjectCard2 = ({title, description, imgUrl}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                <a href="https://whitelist-dapp-digitoxic.vercel.app/"><h4>{title}</h4></a>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}

export const ProjectCard3 = ({title, description, imgUrl}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}