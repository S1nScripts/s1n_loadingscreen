import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import { debugData } from "../utils/debugData";

import backgroundimage from '../images/backgroundimage.png'
import backgroundimage2 from '../images/backgroundimg2.png'
import tip from '../images/tip.png'
import backShape from '../images/backshape.png'
import loadingPNG from '../images/LOADING.png'
import guy from '../images/guyinrightsize.png'
import border from '../images/border.png'
import arrowup from '../images/arrowup.png'
import arrowdown from '../images/arrowdown.png'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import jsonData from '../config/config.json';


// import { fetchNui } from "../utils/fetchNui";
// import { Grid } from "@mui/material";
// import { Button } from "@mui/material";
// import pineaple from "../images/pineapple.png";
// import arrows from "../images/arrows.png";
// import del from "../images/del.png";
// import xIcon from "../images/close.png";
// import { useNuiEvent } from "../hooks/useNuiEvent";

// import SearchIcon from "@mui/icons-material/Search";
// import Alert from "./Alert";

// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

debugData([
  {
    action: "setVisible",
    data: true,
  },
]);

const App: React.FC = () => {
  const [text, setText] = useState(0)
  const [textToShow, setTextToShow] = useState<any | null>(['rules' , 'events' , 'news'])


  const loadedData = JSON.stringify(jsonData);
  const json = JSON.parse(loadedData);
  window.addEventListener("message", (e:any) => {
    if (e.data.eventName === "loadProgress") {
      let percent = e.data.loadFraction * 100
      setText(Math.floor(percent))
    }

   
});

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

  return (
    <div className="nui-wrapper">
      <div className="Container" style={{backgroundImage: `url(${backgroundimage})` , backgroundSize: 'cover'}}>
        <div className="backShapes">
          <div className="backShape">
            
          </div>
          <div className="backShape">
            
            </div>
            <div className="backShape">
            
            </div>
            <div className="backShape">
            
            </div>
            <div className="backShape">
            
            </div>
            <div className="backShape">
            
            </div>

        </div>
        <div style={{backgroundImage: `url(${backgroundimage2})`, backgroundSize: 'cover', height: '100%' , width: '100%', position:'absolute', left: '0'}}>

        </div>
        <div className="LeftPartContainer" style={{zIndex:'1'}}>
          <div className="header">
            <div style={{display: 'flex', width: '95%', justifyContent:'center' , alignItems: 'center', gap: '1vw'}}>
              <p style={{fontSize: 'calc(8.4px + 0.4vw)'}}>WELCOME TO</p>
              <hr style={{color: 'white',width: '11vw'}}></hr>
            </div>
            <div className="headerTitle">
              <h1 style={{fontFamily: 'Akrobat'}}>{json.ServerName}</h1>
            </div>
            <hr  style={{color: 'white',width: '16vw'}}></hr>
            <div className="PicturesSlides">
              <Slider {...settings} >
                {
                  json.Photos.map((e:any) => {
                    return(
                      <div>
                        <img style={{height: '6vw'}} src={e} />
                      </div>
                    )
                  })
                }
              </Slider>
            </div>
            <div className="News">
              {textToShow.includes ('news')  ? 
                <div className="newsPart">
                <div className="servernews">
                  <h1>SERVER NEWS</h1>
                  <hr style={{color: 'white' , width: '4vw', height: '0.1vw', border: '0.1px solid white'}}></hr>
                  <p>{json.Texts[0].News[0].date}</p>
                
                </div>
                <div className="Box ">
                <div className={textToShow.includes('news') && textToShow.length > 1 ? 'boxText' : 'boxText Expanded'}>
                  <p>{json.Texts[0].News[0].content}</p>
                  </div>
                  <img style={{display: 'flex' , justifyContent: 'center', alignItems: 'center' , zIndex: '8'}} onClick={() => {
                        if(textToShow.length > 1) {
                          if(textToShow.includes('news')) {
                            setTextToShow(['news'])
                          }
                        } else {
                          if(textToShow.includes('news')) {
                            setTextToShow(['rules', 'news' , 'events'])
                          }
                        }
                      }}  src={textToShow.includes('news') && textToShow.length > 1 ? arrowdown : arrowup}></img>
                </div>
                <hr  style={{color: 'white',width: '17vw'}}></hr>
              </div>
              : ''}
                {textToShow.includes ('events') ? 
                  <div className="newsPart">
                  <div className="servernews">
                    <h1>SERVER EVENTS</h1>
                    <hr style={{color: 'white' , width: '10.4vw'}}></hr>
                  
                  </div>
                  <div className="Box">
                  <div className={textToShow.includes('events') && textToShow.length > 1 ? 'boxText' : 'boxText Expanded'}>
                  <p>{json.Texts[0].Events[0].content}</p>
                  </div>
                    <img style={{display: 'flex' , justifyContent: 'center', alignItems: 'center' , zIndex: '8'}} onClick={() => {
                        if(textToShow.length > 1) {
                          if(textToShow.includes('events')) {
                            setTextToShow(['events'])
                          }
                        } else {
                          if(textToShow.includes('events')) {
                            setTextToShow(['rules', 'news' , 'events'])
                          }
                        }
                      }} src={textToShow.includes('news') && textToShow.length > 1 ? arrowdown : arrowup}></img>
                  </div>
                  <hr  style={{color: 'white',width: '17vw'}}></hr>
                </div>
                :''}
                 {textToShow.includes ('rules')  ? 
                    <div className="newsPart">
                    <div className="servernews">
                      <h1>SERVER RULES</h1>
                      <hr style={{color: 'white' , width: '10.9vw'}}></hr>
                    
                    </div>
                    <div className="Box ">
                    <div className={textToShow.includes('rules') && textToShow.length > 1 ? 'boxText' : 'boxText Expanded'}>
                    <p>{json.Texts[0].Rules[0].content}</p>
                  </div>
                      <img style={{display: 'flex' , justifyContent: 'center', alignItems: 'center' , zIndex: '8'}} onClick={() => {
                        if(textToShow.length > 1) {
                          if(textToShow.includes('rules')) {
                            setTextToShow(['rules'])
                          }
                        } else {
                          if(textToShow.includes('rules')) {
                            setTextToShow(['rules', 'news' , 'events'])
                          }
                        }
                      }} src={textToShow.includes('rules') && textToShow.length > 1 ? arrowdown : arrowup}></img>
                    </div>
                    </div>

                : ''}
             
 

            
            </div>
          </div>
        </div>
        <div className="CenterPartContainer">
          <div className="headerTip">
            <img src={tip}></img>
            <p style={{color: 'white' , fontFamily:'Akrobat',marginTop: '-4.5vw', fontSize: 'calc(5px + 0.4vw)'}}>{json.ServerTip}</p>
          </div>
          <div className="LoadingPart">
            <img style={{display: 'flex' , justifyContent: 'center', alignItems: 'center', opacity: '0.1', position: 'absolute', top: '44.5%' , left: '50.5%' , transform: 'translate(-50% , -50%)'}} src={loadingPNG}></img>
            <div style={{display:'flex' , flexDirection:'row', justifyContent:'center', alignItems: 'center'}}>
              <img  src={loadingPNG}></img>
              <p className="percentage">{text}%</p>
            </div>
            <div className="percentageBar">
             <div className={ text >= 10 ? 'Bar ActiveBar' : 'Bar'} style={{borderTopLeftRadius:'10rem',borderBottomLeftRadius:'10rem'}}></div>
             <div className={ text >= 20 ? 'Bar ActiveBar' : 'Bar'}></div>
             <div className={ text >= 30 ? 'Bar ActiveBar' : 'Bar'}></div>
             <div className={ text >= 40 ? 'Bar ActiveBar' : 'Bar'}></div>
             <div className={ text >= 50 ? 'Bar ActiveBar' : 'Bar'}></div>
             <div className={ text >= 60 ? 'Bar ActiveBar' : 'Bar'}></div>
             <div className={ text >= 70 ? 'Bar ActiveBar' : 'Bar'}></div>
             <div className={ text >= 80 ? 'Bar ActiveBar' : 'Bar'}></div>
             <div className={ text >= 90 ? 'Bar ActiveBar' : 'Bar'}></div>
             <div className={ text >= 100 ? 'Bar ActiveBar' : 'Bar'} style={{borderTopRightRadius: '10rem', borderBottomRightRadius: '10rem'}}></div>
              
              
            </div>
          </div>
        </div>
        <div className="guy">
          <img src={guy}></img>
        </div>
        <div className="border"  style={{backgroundImage: `url(${border})` , backgroundSize: 'cover' , zIndex:'-8'}}>
        </div>
      </div>
      
    </div>
  );
};

export default App;
