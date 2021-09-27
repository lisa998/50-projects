import { styled } from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";

export default function TestimonialBoxSwitcher() {
  const testimonials = [
    {
      name: "Miyah Myles",
      position: "Marketing",
      photo:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
      text: "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.",
    },
    {
      name: "June Cha",
      position: "Software Engineer",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!",
    },
    {
      name: "Iida Niskanen",
      position: "Data Entry",
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him.",
    },
    {
      name: "Renee Sims",
      position: "Receptionist",
      photo: "https://randomuser.me/api/portraits/women/65.jpg",
      text: "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
    },
    {
      name: "Jonathan Nunfiez",
      position: "Graphic Designer",
      photo: "https://randomuser.me/api/portraits/men/43.jpg",
      text: "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!",
    },
    {
      name: "Sasha Ho",
      position: "Accountant",
      photo:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
      text: "This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!",
    },
    {
      name: "Veeti Seppanen",
      position: "Director",
      photo: "https://randomuser.me/api/portraits/men/97.jpg",
      text: "This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.",
    },
  ];
  const [active, setActive] = useState(false);
  const [page, setPage] = useState(0);
  useEffect(() => {
    setActive(true);
    let id = setInterval(() => {
      setActive(false);
      setTimeout(() => {
        setActive(true);
        setPage((page) => (page + 1) % testimonials.length);
      }, 10);
    }, 5000);
    return () => clearInterval(id);
  }, [testimonials.length]);
  return (
    <Body>
      <Content>
        <div style={{ width: "100%", height: 4, overflow: "hidden" }}>
          <Line active={active} />
        </div>
        <Icon right={40}>
          <i className="fas fa-quote-right fa-quote"></i>
        </Icon>
        <Icon left={40}>
          <i className="fas fa-quote-left fa-quote"></i>
        </Icon>
        <p style={{ marginTop: 30 }}>{testimonials[page].text}</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Img src={testimonials[page].photo} alt="" />
          <div style={{ marginLeft: 15 }}>
            <h5>{testimonials[page].name}</h5>
            <p>{testimonials[page].position}</p>
          </div>
        </div>
      </Content>
    </Body>
  );
}
const Body = styled("div")({
  position: "relative",
  display: "flex",
  width: "100%",
  height: "85vh",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "'Montserrat', sans-serif",
  letterSpacing: 3,
  lineHeight: "1.5rem",
});
const Content = styled("div")({
  padding: "50px 80px",
  backgroundColor: "#476ce4",
  color: "white",
  width: 800,
  borderRadius: 10,
  position: "relative",
});
const Img = styled("img")({
  width: 75,
  height: 75,
  objectFit: "cover",
  borderRadius: "50%",
});
const Icon = styled("div")({
  fontSize: 26,
  opacity: 0.7,
  position: "absolute",
  top: 60,
  left: (props) => props.left,
  right: (props) => props.right,
});
const Line = styled("div")({
  width: "100%",
  height: 4,
  backgroundColor: "white",
  transition: (props) => (props.active ? "5s linear" : null),
  transform: (props) => (props.active ? "translateX(0%)" : "translateX(-100%)"),
});
