import React from "react";
import { Row, Col, Tabs, Tab, Figure } from "react-bootstrap";

const vertigo3Team = [
  {
    name: "Brett Kettle",
    description:
      "Brett, a marine scientist with an idea, who built the first prototype, reached out to others to help, and continues to crafy the hardware and its technical capabilities for the future... ",
    socialLinks: [
      {
        platform: "LinkedIn",
        link:
          "https://www.linkedin.com/in/brettkettle?lipi=urn:li:page:d_flagship3_profile_view_base_contact_details;NFp%2BW01OS82O/P5HzcfiiA%3D%3D",
      },
    ],
    image: "/images/team-img1.png",
  },
  {
    name: "David",
    description:
      "David is a business analyst who loves data and has a knack for crafting algorithms to solve problems. He’s kinda the middle guy between the databases you don’t see, and the analyses that you do... ",
    socialLinks: [
      {
        platform: "LinkedIn",
        link:
          "https://www.linkedin.com/in/kettledavid?lipi=urn:li:page:d_flagship3_profile_view_base_contact_details;vxhnicgBRl%2BYT9D4W4Qd5A%3D%3D",
      },
    ],
    image: "/images/team-img18.png",
  },
  {
    name: "Luke",
    description:
      "Luke, an great RC builder and pilot, who helped assemble the first analogue control system, manually piloted the glider in its earliest trials, and accompanied the first flights in the Great Barrier Reef.",
    socialLinks: [],
    image: "/images/luke_1.png",
  },
  {
    name: "Sabbar",
    description:
      "Sabbar is a web dev guy who likes to make the buttons that you click do something meaningful.  If you use our ‘Tools’ pages or the console tablets that we use to fly the glider, you’ve almost certainly encountered his meticulous work...",
    socialLinks: [
      {
        platform: "LinkedIn",
        link:
          "https://www.linkedin.com/in/sabbarbutt?lipi=urn:li:page:d_flagship3_profile_view_base_contact_details;QVl9zfgIT1%2B/v52/V1lZxQ%3D%3D",
      },
    ],
    image: "/images/team-img12.png",
  },
  {
    name: "Sorin",
    description:
      "Sorin is an engineer who (literally, but using Python and C++ code) bridges the data gap between robotic operating systems and the databases that the scientists like to use.  He’s worked with vehicular systems before, but fortunately the tech works just the same under water...",
    socialLinks: [
      {
        platform: "LinkedIn",
        link:
          "https://www.linkedin.com/in/kettledavid?lipi=urn:li:page:d_flagship3_profile_view_base_contact_details;vxhnicgBRl%2BYT9D4W4Qd5A%3D%3D",
      },
    ],
    image: "/images/team-img21.png",
  },
  {
    name: "Henry",
    description:
      "Henry loves building heavily customized high end PCs.  So its perfectly fitting that he’d take on the challenge of the world’s fastest field computer to work under the tropical sun in a little rubber boat, counting sea creatures at the far ends of the Great Barrier Reef...",
    socialLinks: [
      {
        platform: "LinkedIn",
        link:
          "https://www.linkedin.com/in/kettledavid?lipi=urn:li:page:d_flagship3_profile_view_base_contact_details;vxhnicgBRl%2BYT9D4W4Qd5A%3D%3D",
      },
    ],
    image: "/images/henry_1.png",
  },
];
const csiroTeam = [
  {
    name: "Russ",
    description:
      "Russ, a marine scientist who bounced some of the earliest starfish survey concepts around with Brett, and who continues helping to evaluate Vertigo3 as a tool for broad scale reef survey...",
    socialLinks: [
      {
        platform: "LinkedIn",
        link:
          "https://www.linkedin.com/in/russell-babcock-92b6571b?lipi=urn:li:page:d_flagship3_profile_view_base_contact_details;0ZN/xiwIT8WnoqMXCv/U9A%3D%3D",
      },
    ],
    image: "/images/team-img2.png",
  },
  {
    name: "Andy",
    description:
      "Andy, from CSIRO’s Oceans &  Atmosphere’s Coastal Group, who recognised the potential of <span class='text-orange'>Vertigo3</span> as a tool for marine scientists in many applications, and backed the next steps...",
    socialLinks: [],
    image: "/images/team-img4.png",
  },
  {
    name: "Brano",
    description:
      "Brano, who saw the potential of the glider’s datasets to answer important environmental questions and to advance techniques for handling massive amounts of image data, who brought the project to CSIRO’s Data61...",
    socialLinks: [
      {
        platform: "LinkedIn",
        link: "http://linkedin.com/in/branislav-kusy-0601798",
      },
    ],
    image: "/images/team-img5.png",
  },
  {
    name: "Josh",
    description:
      "Josh, the mechatronics engineer who turned the analogue RC ‘airplane’ into a complex, well-functioning and well-behaved  underwater robot...",
    socialLinks: [
      {
        platform: "LinkedIn",
        link: "http://linkedin.com/in/joshua-riddell",
      },
    ],
    image: "/images/team-img6.png",
  },
  {
    name: "Scarlett",
    description: `Scarlett, the first of the team to publish – a great paper on the world’s first multi-species seagrass classifier, 
      built for the oblique camera pose of the Vertigo3 glider... <br />
      <span class='text-blue'>Raine S, R Marchant, P Moghadam, F Maire, B Kettle, B Kusy, 2020. 
      Multi-species Seagrass Detection and Classification from Underwater Images. 
      <a href='https://arxiv.org/abs/2009.09924' target='_blank'>Arxiv:2009.09924</a>
      </span>
      `,
    socialLinks: [
      {
        platform: "LinkedIn",
        link:
          "https://www.linkedin.com/in/scarlett-raine?lipi=urn:li:page:d_flagship3_profile_view_base_contact_details;/AEp1JGcQHq/X8g9XWMFcA%3D%3D",
      },
    ],
    image: "/images/team-img7.png",
  },
  {
    name: "Ross",
    description: `Ross, excited by the challenge of vision-based ML in complex habitats with multiple targets and a great temporal and spatial data series to explore.  And with all that data, we’re lucky he’s more than a little bit handy with coding...`,
    socialLinks: [
      {
        platform: "LinkedIn",
        link:
          "https://www.linkedin.com/in/ross-marchant-10b27211?lipi=urn:li:page:d_flagship3_profile_view_base_contact_details;3YwoTMlQTXecHosDVJFgug%3D%3D",
      },
    ],
    image: "/images/team-img8.png",
  },
  {
    name: "Torsten",
    description: `Torsten, an aviator, SCUBA diver and unmanned aviation control systems expert (usually rotor craft  ), taking advanced flight control underwater, where NOTHING provides a fixed reference for flight control...`,
    socialLinks: [
      {
        platform: "LinkedIn",
        link:
          "https://www.linkedin.com/in/torsten-merz-693ab15?lipi=urn:li:page:d_flagship3_profile_view_base_contact_details;6PnM6VQpRGG2OZwSpa17%2Bw%3D%3D",
      },
    ],
    image: "/images/team-img9.png",
  },
  {
    name: "Peyman",
    description: `Peyman leads CSIRO’s Spatiotemporal Machine Learning and Artificial Intelligence group at CSIRO, perfect for the ‘multiple overlapping images’ nature of the Vertigo3 vision system...`,
    socialLinks: [
      {
        platform: "LinkedIn",
        link:
          "https://www.linkedin.com/in/peymanmoghadam?lipi=urn:li:page:d_flagship3_profile_view_base_contact_details;GGRYMQD8Q4yX9v0AmjSiPw%3D%3D",
      },
    ],
    image: "/images/team-img10.png",
  },
  {
    name: "Frederic",
    description: `Frederic is a senior lecturer in artificial intelligence and computer vision at QUT.  He’s focussed on semi-supervised training methods.  This has great relevance to Vertigo3, operating in a high biodiversity but remote area like the Great Barrier Reef...`,
    socialLinks: [
      {
        platform: "LinkedIn",
        link:
          "https://www.linkedin.com/in/frederic-maire-29b6105?lipi=urn:li:page:d_flagship3_profile_view_base_contact_details;nG4zWP4OS32D0vhHqJObbQ%3D%3D",
      },
    ],
    image: "/images/team-img11.png",
  },
  {
    name: "Pavan",
    description: `Pavan is the steady hand of logic and process… a highly experienced scientist in CSIRO’s ’Dependable Long Term Autonomy’ group, leading deep insights into Vertigo3’s underwater performance… and keeping us on the straight and narrow when we get a little ahead of ourselves...`,
    socialLinks: [
      {
        platform: "CSIRO",
        link: "https://people.csiro.au/S/P/Pavan-Sikka",
      },
    ],
    image: "/images/team-img13.png",
  },
  {
    name: "Adrian",
    description: `Adrian has spent 26 years in delivering automation in agriculture, mining and manufacturing… and now in little gliders towed quickly around the Great Barrier Reef.  His models help us understand flight dynamics and find the glider relative to the boat...`,
    socialLinks: [
      {
        platform: "LinkedIn",
        link:
          "https://www.linkedin.com/in/nicholas-heaney-535831120?lipi=urn:li:page:d_flagship3_profile_view_base_contact_details;S39odwStTWuRD2sDGHVShA%3D%3D",
      },
    ],
    image: "/images/team-img14.png",
  },
  {
    name: "Jack",
    description: `Jack makes the best 3D printed stuff, with some of the coolest printers around.  Which feels like an absolute necessity if you’re building tricky robots that fly fast underwater to great depths...`,
    socialLinks: [
      {
        platform: "LinkedIn",
        link:
          "https://www.linkedin.com/in/jack-o-connor-369aa0186?lipi=urn:li:page:d_flagship3_profile_view_base_contact_details;2vurDwM3QdGzlAQ5a8dwwg%3D%3D",
      },
    ],
    image: "/images/team-img15.png",
  },
  {
    name: "Sheridan",
    description: `Sheridan is an electrical and computer engineer with a keen interest in robotics, who has spent her time so far on optimising Machine Learning models for detecting Crown-of-Thorns Starfish on the Vertigo3 glider...`,
    socialLinks: [
      {
        platform: "LinkedIn",
        link:
          "https://www.linkedin.com/in/sheridan-tapsall-18070414a?lipi=urn:li:page:d_flagship3_profile_view_base_contact_details;jbfqfZqaRjafHLjuV%2B9bTg%3D%3D",
      },
    ],
    image: "/images/team-img16.png",
  },
  {
    name: "Nic",
    description: `Nic is a mechatronics engineer with CSIRO, and is super interested in embedded ML systems for wildlife monitoring, both on land and in the ocean...`,
    socialLinks: [
      {
        platform: "LinkedIn",
        link:
          "https://www.linkedin.com/in/nicholas-heaney-535831120?lipi=urn:li:page:d_flagship3_profile_view_base_contact_details;S39odwStTWuRD2sDGHVShA%3D%3D",
      },
    ],
    image: "/images/team-img17.png",
  },
  {
    name: "Haard",
    description: `Haard is an mechatronics engineer with a keen interest in robotic vision.  He’s busy building the tracking methods that allow the Vertigo3 glider to count the same animal across long sequences of video frames...`,
    socialLinks: [
      {
        platform: "LinkedIn",
        link:
          "https://www.linkedin.com/in/sheridan-tapsall-18070414a?lipi=urn:li:page:d_flagship3_profile_view_base_contact_details;jbfqfZqaRjafHLjuV%2B9bTg%3D%3D",
      },
    ],
    image: "/images/team-img19.png",
  },
  {
    name: "Kanupriya",
    description: `Kanupriya (Kanu) loves Mathematics & Information Tech, and has a keen interest in modelling the big ecological processes that govern the health of the Great Barrier Reef.  That’s cool for Vertigo3 because starfish are a key coral predator and a good place to start the modelling...`,
    socialLinks: [
      {
        platform: "LinkedIn",
        link:
          "https://www.linkedin.com/in/nicholas-heaney-535831120?lipi=urn:li:page:d_flagship3_profile_view_base_contact_details;S39odwStTWuRD2sDGHVShA%3D%3D",
      },
    ],
    image: "/images/team-img20.png",
  },
  {
    name: "Jiajun",
    description: `Jiajun is a Science Leader in CSIRO’s Distributed Sensing Systems Group, focused on step change in efficiency and quality of large scale data that protects Australia’s environmental sustainability… makes sense that he’d be helping us on the Vertigo3 glider :)`,
    socialLinks: [
      {
        platform: "LinkedIn",
        link:
          "https://www.linkedin.com/in/ryan-jiajun-liu-49119016?lipi=urn:li:page:d_flagship3_profile_view_base_contact_details;SXpue0HwSliNMB0dYo9lvQ%3D%3D",
      },
    ],
    image: "/images/team-img22.png",
  },
  {
    name: "Margaux",
    description: `Margaux is a mechatronics engineer at QUT and CSIRO, with an interest on robotic movement.  This is really lucky for us because she is processing the ‘optical flow’ of the Vertigo3 vision system for autopiloting, flightpath guidance and starfish tracking...`,
    socialLinks: [
      {
        platform: "LinkedIn",
        link:
          "https://www.linkedin.com/in/margaux-edwards-415772159?lipi=urn:li:page:d_flagship3_profile_view_base_contact_details;nXjQ0oDTQPefhXv8KwqBPA%3D%3D",
      },
    ],
    image: "/images/team-img23.png",
  },
];
const marenrayRPS = [
  {
    name: "Richard",
    description:
      "Richard, a marine biologist who started in crown-of-thorns starfish ecology and has spent many years integrating hydrodynamic models with biological risk assessments and environmental risk management in coastal industrial settings...",
    socialLinks: [
      {
        platform: "LinkedIn",
        link:
          "https://www.linkedin.com/in/russell-babcock-92b6571b?lipi=urn:li:page:d_flagship3_profile_view_base_contact_details;0ZN/xiwIT8WnoqMXCv/U9A%3D%3D",
      },
    ],
    image: "/images/richard.png",
  },
  {
    name: "Sasha",
    description:
      "Sasha has lived hydrodynamic modelling at the pointy end of many marine applications, for many decades.  Some of the most interesting of these are fine scale operational forecast and hindcast models, typically applied to spills, lost-overboard cases, or marine pest incursions.  And some of these have an uncanny similarity to the technical challenges facing operational fore- and hind-casting that can help manage crown of thorns on the Great Barrier Reef...",
    socialLinks: [
      {
        platform: "LinkedIn",
        link:
          "https://www.linkedin.com/in/russell-babcock-92b6571b?lipi=urn:li:page:d_flagship3_profile_view_base_contact_details;0ZN/xiwIT8WnoqMXCv/U9A%3D%3D",
      },
    ],
    image: "/images/sasha.png",
  },
  {
    name: "Sasha",
    description:
      "Ryan is the kind of modeller who turns good ideas into working solutions.  While this usually involves a fancy computer in his office, he’s quite happy to make it an embedded system operating from a small boat on the Great Barrier Reef.  Phew!.",
    socialLinks: [
      {
        platform: "LinkedIn",
        link:
          "https://www.linkedin.com/in/russell-babcock-92b6571b?lipi=urn:li:page:d_flagship3_profile_view_base_contact_details;0ZN/xiwIT8WnoqMXCv/U9A%3D%3D",
      },
    ],
    image: "/images/ryan.png",
  },
];

export function Team() {
  return (
    <div className="inner-detail p-4">
      <Row>
        <h3 className="mb-4">Honoring those who have helped along the way…</h3>
        <h5 className="mb-4">
          <span className="text-orange">Vertigo3.org</span> delivers global
          impact from a dedicated core group of staff and contractors, and a
          series of <span className="text-orange">Collaborations</span> to
          expand the glider’s skillsets and use cases across the globe. These
          are their stories…
        </h5>
      </Row>

      <Tabs defaultActiveKey="vertigo3" id="team" className="team-tabs">
        <Tab
          eventKey="vertigo3"
          title="Vertigo3.org"
          style={{ marginRight: "25%" }}
        >
          <div className="team-wrap mt-5 mb-5">
            {vertigo3Team.map((member, i) => (
              <Row className="m-0" key={i}>
                <Col md={3} className="mb-4">
                  <Figure>
                    <Figure.Image
                      className="w-100 img-fluid"
                      src={member.image}
                      alt={member.name}
                    />
                  </Figure>
                </Col>
                <Col md={9} className="mb-4">
                  <h5 className="mt-4">
                    <div
                      dangerouslySetInnerHTML={{ __html: member.description }}
                    ></div>{" "}
                    {member.socialLinks.map((link, j) => (
                      <a key={j} href={link.link}>
                        {link.platform}
                      </a>
                    ))}
                  </h5>
                </Col>
              </Row>
            ))}
          </div>
        </Tab>
        <Tab eventKey="collab" title="Collaborations: " disabled></Tab>
        <Tab eventKey="csiro" title="CSIRO">
          <div className="team-wrap mt-5 mb-5">
            <h5 className="mb-5">
              <u>
                <a
                  href="https://www.linkedin.com/in/brettkettle?lipi=urn:li:page:d_flagship3_profile_view_base_contact_details;NFp%2BW01OS82O/P5HzcfiiA%3D%3D"
                  target="_blank"
                  style={{ color: "white" }}
                >
                  CSIRO’s
                </a>
              </u>{" "}
              Coastal Group and Data 61 first recognised the potential of a fast
              vision-based robotic glider for expanding and automating marine
              survey. Their early involvement was a collaboration to convert
              Vertigo3’s guidance system from drone-style autopiloting by a
              ‘flight computer’ to an industry-standard Robotic Operating
              System; and upgrading image transmission from radio frequency to
              ethernet. This led into a Machine Learning phase, collaborating on
              developing models for detecting starfish and seagrasses in Moreton
              Bay and later Crown-of-Thorns Starfish on the Great Barrier Reef;
              and more advanced flight path controls suited to rugged coral reef
              enironments.
            </h5>
            {csiroTeam.map((member, i) => (
              <Row className="m-0" key={i}>
                <Col md={3} className="mb-4">
                  <Figure>
                    <Figure.Image
                      className="w-100 img-fluid"
                      src={member.image}
                      alt={member.name}
                    />
                  </Figure>
                </Col>
                <Col md={9} className="mb-4">
                  <h5 className="mt-4">
                    <div
                      dangerouslySetInnerHTML={{ __html: member.description }}
                    ></div>{" "}
                    {member.socialLinks.map((link, j) => (
                      <a key={j} href={link.link}>
                        {link.platform}
                      </a>
                    ))}
                  </h5>
                </Col>
              </Row>
            ))}
          </div>
        </Tab>
        <Tab eventKey="rps" title="Marenray/RPS">
          <div className="team-wrap mt-5 mb-5">
            <h5 className="mb-5">
              Marenray and RPS are exploring system integrations with the
              Vertigo3 glider that extend its skillset beyond real-time analysis
              of starfish location and size, to the environmental risks they
              pose – individually and collectively – as point sources that
              recruit to down-stream high priority ‘sink’ reef. Their formal
              project proposal “Application of real-time forecasting spatial
              distributions of crown-of-thorns populations to prioritise
              monitoring and management actions:  integrating starfish detection
              technology, using AI-enabled towed-glider surveys, with fine-scale
              larval connectivity models, across the GBR” highlights that this
              represents a unique combination of ecological and hydrodynamic
              data, made possible by the glider’s skill at defining starfish
              position and size, and facilitated by spare capacity in the
              glider’s computational resources.
            </h5>
            {marenrayRPS.map((member, i) => (
              <Row className="m-0" key={i}>
                <Col md={3} className="mb-4">
                  <Figure>
                    <Figure.Image
                      className="w-100 img-fluid"
                      src={member.image}
                      alt={member.name}
                    />
                  </Figure>
                </Col>
                <Col md={9} className="mb-4">
                  <h5 className="mt-4">
                    <div
                      dangerouslySetInnerHTML={{ __html: member.description }}
                    ></div>{" "}
                    {member.socialLinks.map((link, j) => (
                      <a key={j} href={link.link}>
                        {link.platform}
                      </a>
                    ))}
                  </h5>
                </Col>
              </Row>
            ))}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
