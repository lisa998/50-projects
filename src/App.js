import React from "react";
import { Switch, Route } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import Sider from "./core/sider/sider";

import ExpendingCard from "./projects/expendingCard/expendingCard";
import ProgressSteps from "./projects/progressSteps/progressSteps";
import RotatingNavigation from "./projects/rotatingNavigation/rotatingNavigation";
import SearchBar from "./projects/hiddenSearchWidget/hiddenSearchWidget";
import BlurryLoading from "./projects/blurryLoading/blurryLoading";
import ScrollAnimation from "./projects/scrollAnimation/scrollAnimation";
import SplitLandingPage from "./projects/splitLandingPage/splitLandingPage";
import FormWave from "./projects/formWave/formWave";
import SoundBoard from "./projects/soundBoard";
import DadJokes from "./projects/dadJokes/dadJokes";
import EventKeyCode from "./projects/eventKeyCode/eventKeyCode";
import FaqCollapse from "./projects/faqCollapse/faqCollapse";
import RandomChoicePicker from "./projects/randomChoicePicker/randomChoicePicker";
import AnimatedNavigation from "./projects/animatedNavigation/animatedNavigation";
import IncrementingCounter from "./projects/incrementingCounter/incrementingCounter";
import DrinkWater from "./projects/drinkWater/drinkWater.js";
import MovieApp from "./projects/movieApp/movieApp";
import BackgroundSlider from "./projects/backgroundSlider/backgroundSlider";
import ThemeClock from "./projects/themeClock/themeClock";
import ButtonRippleEffect from "./projects/buttonRippleEffect/buttonRippleEffect";
import DrawingApp from "./projects/drawingApp/drawingApp";
import DragNDrop from "./projects/dragNDrop/dragNDrop";
import KineticLoader from "./projects/kineticLoader";
import ContentPlaceholder from "./projects/contentPlaceholder";
import StickyNavbar from "./projects/stickyNavbar";
import DoubleVerticalSlider from "./projects/doubleVerticalSlider";
import ToastNotification from "./projects/toastNotification";
import GithubProfiles from "./projects/githubProfiles";
import DoubleClickHeart from "./projects/doubleClickHeart";
import AutoTextEffect from "./projects/autoTextEffect";
import PasswordGenerator from "./projects/passwordGenerator";
import SwitchBtn from "./projects/Switch";
import NoteApp from "./projects/noteApp";
import AnimatedCountdown from "./projects/animatedCountdown";
import ImageCarousel from "./projects/imageCarousel";
import Hoverboard from "./projects/hoverboard";
import PokeDex from "./projects/pokeDex";
import MobileTabNavigation from "./projects/mobileTabNavigation";
import PasswordStrengthBackground from "./projects/passwordStrengthBackground";
import BoxesBackground from "./projects/boxesBackground";
import VerifyAccountUI from "./projects/verifyAccountUI";
import LiveUserFilter from "./projects/liveUserFilter";
import FeedbackUiDesign from "./projects/feedbackUiDesign";
import CustomRangeSlider from "./projects/customRangeSlider";
import NexflixMobileNav from "./projects/nexflixMobileNav";
import QuizApp from "./projects/quizApp";
import TestimonialBoxSwitcher from "./projects/testimonialBoxSwitcher";
import RandomImageFeed from "./projects/randomImageFeed";
import Todos from "./projects/todos";
import CatchGame from "./projects/catchGame";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    overflow: "hidden",
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            50 Project 50 Days in React
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <Sider />
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Switch>
          <Route path="/catch-game">
            <CatchGame />
          </Route>
          <Route path="/todos">
            <Todos />
          </Route>
          <Route path="/random-image-feed">
            <RandomImageFeed />
          </Route>
          <Route path="/testimonial-box-switcher">
            <TestimonialBoxSwitcher />
          </Route>
          <Route path="/quiz-app">
            <QuizApp />
          </Route>
          <Route path="/netflix-mobile-navigation">
            <NexflixMobileNav />
          </Route>
          <Route path="/custom-range-slider">
            <CustomRangeSlider />
          </Route>
          <Route path="/feedback-ui-design">
            <FeedbackUiDesign />
          </Route>
          <Route path="/live-user-filter">
            <LiveUserFilter />
          </Route>
          <Route path="/verify-account-ui">
            <VerifyAccountUI />
          </Route>
          <Route path="/3d-boxes-background">
            <BoxesBackground />
          </Route>
          <Route path="/password-strength-background">
            <PasswordStrengthBackground />
          </Route>
          <Route path="/mobile-tab-navigation">
            <MobileTabNavigation />
          </Route>
          <Route path="/poke-dex">
            <PokeDex />
          </Route>
          <Route path="/hoverboard">
            <Hoverboard />
          </Route>
          <Route path="/image-carousel">
            <ImageCarousel />
          </Route>
          <Route path="/animated-countdown">
            <AnimatedCountdown />
          </Route>
          <Route path="/note-app">
            <NoteApp />
          </Route>
          <Route path="/switch-btn">
            <SwitchBtn />
          </Route>
          <Route path="/password-generator">
            <PasswordGenerator />
          </Route>
          <Route path="/auto-text-effect">
            <AutoTextEffect />
          </Route>
          <Route path="/double-click-heart">
            <DoubleClickHeart />
          </Route>
          <Route path="/github-profiles">
            <GithubProfiles />
          </Route>
          <Route path="/toast-notification">
            <ToastNotification />
          </Route>
          <Route path="/double-vertical-slider">
            <DoubleVerticalSlider />
          </Route>
          <Route path="/sticky-navbar">
            <StickyNavbar />
          </Route>
          <Route path="/content-placeholder">
            <ContentPlaceholder />
          </Route>
          <Route path="/kinetic-loader">
            <KineticLoader />
          </Route>
          <Route path="/drawing-app">
            <DrawingApp />
          </Route>
          <Route path="/drag-n-drop">
            <DragNDrop />
          </Route>
          <Route path="/button-ripple-effect">
            <ButtonRippleEffect />
          </Route>
          <Route path="/theme-clock">
            <ThemeClock />
          </Route>
          <Route path="/background-slider">
            <BackgroundSlider />
          </Route>
          <Route path="/movie-app">
            <MovieApp />
          </Route>
          <Route path="/drink-water">
            <DrinkWater />
          </Route>
          <Route path="/incrementing-counter">
            <IncrementingCounter />
          </Route>
          <Route path="/animated-navigation">
            <AnimatedNavigation />
          </Route>
          <Route path="/random-choice-picker">
            <RandomChoicePicker />
          </Route>
          <Route path="/faq-collapse">
            <FaqCollapse />
          </Route>
          <Route path="/event-key-code">
            <EventKeyCode />
          </Route>
          <Route path="/dad-jokes">
            <DadJokes />
          </Route>
          <Route path="/sound-board">
            <SoundBoard />
          </Route>
          <Route path="/form-wave">
            <FormWave />
          </Route>
          <Route path="/split-landing-page">
            <SplitLandingPage />
          </Route>
          <Route path="/scroll-animation">
            <ScrollAnimation />
          </Route>
          <Route path="/blurry-loading">
            <BlurryLoading />
          </Route>
          <Route path="/hidden-search-widget">
            <SearchBar />
          </Route>
          <Route path="/rotating-navigation">
            <RotatingNavigation />
          </Route>
          <Route path="/progress-steps">
            <ProgressSteps />
          </Route>
          <Route path="/expanding-cards">
            <ExpendingCard />
          </Route>
          <Route path="/"></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
