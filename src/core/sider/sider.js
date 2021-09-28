import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Expanding Cards",
    path: "/expanding-cards",
  },
  {
    name: "Progress Steps",
    path: "/progress-steps",
  },
  {
    name: "Rotating Navigation",
    path: "/rotating-navigation",
  },
  {
    name: "Hidden Search Widget",
    path: "/hidden-search-widget",
  },
  {
    name: "Blurry Loading",
    path: "/blurry-loading",
  },
  {
    name: "Scroll Animation",
    path: "/scroll-animation",
  },
  {
    name: "Split Landing Page",
    path: "/split-landing-page",
  },
  {
    name: "Form Wave",
    path: "/form-wave",
  },
  {
    name: "Sound Board",
    path: "/sound-board",
  },
  {
    name: "Dad Jokes",
    path: "/dad-jokes",
  },
  {
    name: "Event Key Code",
    path: "/event-key-code",
  },
  {
    name: "Faq Collapse",
    path: "/faq-collapse",
  },
  {
    name: "Random Choice Picker",
    path: "/random-choice-picker",
  },
  {
    name: "Animated Navigation",
    path: "/animated-navigation",
  },
  {
    name: "Incrementing Counter",
    path: "/incrementing-counter",
  },
  {
    name: "Drink Water",
    path: "/drink-water",
  },
  {
    name: "Movie App",
    path: "/movie-app",
  },
  {
    name: "Background Slider",
    path: "/background-slider",
  },
  {
    name: "Theme Clock",
    path: "/theme-clock",
  },
  {
    name: "ButtonRippleEffect",
    path: "/button-ripple-effect",
  },
  {
    name: "Drag N Drop",
    path: "/drag-n-drop",
  },
  {
    name: "DrawingApp",
    path: "/drawing-app",
  },
  {
    name: "Kinetic Loader",
    path: "/kinetic-loader",
  },
  {
    name: "Content Placeholder",
    path: "/content-placeholder",
  },
  {
    name: "Sticky Navbar",
    path: "/sticky-navbar",
  },
  {
    name: "Double Vertical Slider",
    path: "/double-vertical-slider",
  },
  {
    name: "Toast Notification",
    path: "/toast-notification",
  },
  {
    name: "Github Profiles",
    path: "/github-profiles",
  },
  {
    name: "Double Click Heart",
    path: "/double-click-heart",
  },
  {
    name: "Auto Text Effect",
    path: "/auto-text-effect",
  },
  {
    name: "Password Generator",
    path: "/password-generator",
  },
  {
    name: "Switch Button",
    path: "/switch-btn",
  },
  {
    name: "Note App",
    path: "/note-app",
  },
  {
    name: "Animated Countdown",
    path: "/animated-countdown",
  },
  {
    name: "Image Carousel",
    path: "/image-carousel",
  },
  {
    name: "Hoverboard",
    path: "/hoverboard",
  },
  {
    name: "Poke Dex",
    path: "/poke-dex",
  },
  {
    name: "Mobile Tab Navigation",
    path: "/mobile-tab-navigation",
  },
  {
    name: "Password Strength Background",
    path: "/password-strength-background",
  },
  {
    name: "3D Boxes Background",
    path: "/3d-boxes-background",
  },
  {
    name: "Verify Account-ui",
    path: "/verify-account-ui",
  },
  {
    name: "LiveUserFilter",
    path: "/live-user-filter",
  },
  {
    name: "Feedback Ui Design",
    path: "/feedback-ui-design",
  },
  {
    name: "Custom Range Slider ",
    path: "/custom-range-slider",
  },
  {
    name: "Nexflix Mobile Nav",
    path: "/netflix-mobile-navigation",
  },
  {
    name: "Quiz App",
    path: "/quiz-app",
  },
  {
    name: "Testimonial Box Switcher",
    path: "/testimonial-box-switcher",
  },
  {
    name: "Random Image Feed",
    path: "/random-image-feed",
  },
  {
    name: "Todos",
    path: "/todos",
  },
  {
    name: "Catch Game",
    path: "/catch-game",
  },
];

const Sider = (props) => {
  const [select, setSelect] = useState(
    `/${window.location.href.split("/")[3]}`
  );
  return (
    <MenuList>
      {routes.map((route) => (
        <MenuItem
          component={Link}
          to={route.path}
          key={route.path}
          selected={route.path === select}
          onClick={() => {
            setSelect(route.path);
          }}
        >
          <ListItemText primary={route.name} />
        </MenuItem>
      ))}
    </MenuList>
  );
};

Sider.propTypes = {};

export default Sider;
