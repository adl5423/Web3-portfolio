import {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = ["Web developer", "Web Designer", "UI/UX Designer"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

  return (
   <section className= "banner" id="home">
    <Container>
        <Row ClassName="align-intems-center">
            <Col xs={12} md={6} xl={7}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{"Hello! I'm a web3 developper" }</h1>
                <p>I am a junior web3 developper as well as being and mod and a collab manager. I would be happy to work with you!</p>
                <a href="https://twitter.com/messages"><button onClick= {() => console.log("connect")}> Let's connect <ArrowRightCircle size={25} /></button></a>
            </Col>
            <Col xs={12} md={6} xl={5}>
                <img src={headerImg} alt="Header img" />
            </Col>
        </Row>
    </Container>
   </section>
  )
}
