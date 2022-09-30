import {Col} from "react-bootstrap"

// export const ProjectCard1 = ({title, description, imgUrl}) => {
//     return (
//         <Col sm={6} md={4}>
//             <div className="proj-imgbx">
//                 <img src={imgUrl} />
//                 <div className="proj-txtx">
//                     <h4>{title}</h4>
//                     <span>{description}</span>
//                 </div>
//             </div>
//         </Col>
//     )
// }

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