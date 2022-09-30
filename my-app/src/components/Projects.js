import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard1, ProjectCard2 } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {

    const projects1 = [
      {
      title: "More project coming",
      description: "Building",
      imgUrl: projImg3,
    },
    {
      title: "More project coming",
      description: "Building",
      imgUrl: projImg3,
    },
    {
      title: "More project coming",
      description: "Building",
      imgUrl: projImg3,
    },
    {
      title: "More project coming",
      description: "Building",
      imgUrl: projImg3,
    },
    {
      title: "More project coming",
      description: "Building",
      imgUrl: projImg3,
    },
    {
      title: "More project coming",
      description: "Building",
      imgUrl: projImg3,
    },
  ];

      const projects2 = [
        {
          title: "Whitelist dApp",
          description: "Giving WL to user",
          imgUrl: projImg1,
        },
        {
          title: "NFT collection",
          description: "Minting nft from a dApp",
          imgUrl: projImg2,
        },
        {
          title: "More project coming",
          description: "Building",
          imgUrl: projImg3,
        },
        {
          title: "More project coming",
          description: "Building",
          imgUrl: projImg3,
        },
        {
          title: "More project coming",
          description: "Building",
          imgUrl: projImg3,
        },
        {
          title: "More project coming",
          description: "Building",
          imgUrl: projImg3,
        },
      ];

      const projects3 = [
        {
          title: "More project coming",
          description: "Building",
        imgUrl: projImg3,
      },
      {
        title: "More project coming",
        description: "Building",
        imgUrl: projImg3,
      },
      {
        title: "More project coming",
        description: "Building",
        imgUrl: projImg3,
      },
      {
        title: "More project coming",
        description: "Building",
        imgUrl: projImg3,
      },
      {
        title: "More project coming",
        description: "Building",
        imgUrl: projImg3,
      },
      {
        title: "More project coming",
        description: "Building",
        imgUrl: projImg3,
      },
    ];

  return (
    <section className="project" id="project">
        <Container>
            <Row>
                <Col>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Main Project</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tutorial Project</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">
                        Smart contract
                        </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                   <Tab.Pane eventKey="first">
                    <Row>
                    {
                          projects1.map((project, index) => {
                            return (
                                <ProjectCard1
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                    </Row>
                   </Tab.Pane>
                   <Tab.Pane eventKey="second">
                   <Row>
                    {
                          projects2.map((project, index) => {
                            return (
                                <ProjectCard2
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                    </Row>
                    </Tab.Pane>
                   <Tab.Pane eventKey="third">
                   <Row>
                    {
                          projects3.map((project, index) => {
                            return (
                                <ProjectCard2
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                    </Row>
                    </Tab.Pane>
                  </Tab.Content>
                  </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

export default Projects
