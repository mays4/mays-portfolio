
import {faDisplay} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub as git,
} from '@fortawesome/free-brands-svg-icons';
import Register from '../images/register.png';
import Update from '../images/urls-page.png .png';
import Create from '../images/create-URL.png';
import Text from '../images/emptyText.png';
import showText from '../images/showText.png';
import Tweeter from '../images/tweeterPage.png';
import homebidder1 from '../images/homebidder1.gif';
import homebidder2 from '../images/homebidder2.gif';
import homebidder3 from '../images/homebidder3.gif';
import Landing from '../images/Landing_page.png';
import Payment from '../images/payment.png';
import Card from '../images/Adding_to_card.png';
import Chat from '../images/chat.png';
import Page from '../images/page.png';
import Search from '../images/Search.png';
import Save from '../images/Saving-an-appointment.png';
import View from '../images/Scheduler-view.png';
import Appointment from '../images/Appointment_booked.png';
import Drum2 from '../images/Drum2.png';
import Drum1 from '../images/Drum1.png';
import Drum from '../images/Drum.mov';
import calc1 from '../images/calc1.png';
import calc2 from '../images/calc2.png';
import Calc from '../images/Calc.mov';
import Quote2 from '../images/Quote2.png';
import Quote1 from '../images/Quote1.png';
import Quote from '../images/Quote.mov';
import Recipe from '../images/Recipe.png';
import Recipe1 from '../images/Recipe1.png';
import Recipe2 from '../images/Recipe2.png';
import coach1 from '../images/coach1.png';
import coach2 from '../images/coach2.png';
import coach3 from '../images/coach3.png';

export const projects = [
  {
      id:11,
      tags: 'Vue',
      image:coach1,
      info:'Technology Used:Vue, Javascript, CSS, Vuex, Firebase',
      description: 'Single page app use to find coaches and send them requests',
      title:'Find a Coach',
      links: [   
          {link: 'https://github.com/mays4/Find-Coach-Vue', icon:git},
          {link: 'https://coach-finder-cb684.web.app/coaches', icon:faDisplay}     
      ] ,
      images:[{
        image_1:coach1,
        image_2:coach2,
        image_3:coach3
      }]
      },
    {
      id:1,
      tags: 'Angluar',
      image: Recipe,
      info:'Technology Used:Angular, bootstrap, Firebase',
      description: 'Recipe app where user can create account and add recipe and add items to shopping list.',
      title:'Recipe Book',    
      links: [
          {link: 'https://github.com/mays4/Recipe-app-Angular', icon:git},
          {link: 'https://recipe-book-15b88.firebaseapp.com/auth', icon:faDisplay},
         
      ] ,
      images:[{
        image_1:Recipe,
        image_2:Recipe1,
        image_3:Recipe2,
      }]
      },
    { 
      id:2,
      tags: 'React',
      image:Landing,
      info:'React, Next Js, Tailwind, Next Auth for authentication, Stripe API,  Firebase'  ,
      description:'Amazon Clone it is a mini Amazon Project.use Stripe API to checkout',
      title: 'Amazon Clone',
      
      links: [
          {link: 'https://github.com/mays4/Amazon', icon:git},
          {link: 'https://amazon-clone-jxgfi8qnr-mays.vercel.app', icon: faDisplay},
      ] ,
      images:[{
        image_1:Landing,
        image_2:Card,
        image_3:Payment,
      }]
    },
    { 
      id:3,
      tags: 'JQuery',
      image: Tweeter,
      info:'Technology Used:HTML, CSS, JS, jQuery, AJAX.',
      description:'Tweeter is a single-page app, Twitter clone.Technology Used: HTML, CSS, JS, jQuery, AJAX.',
      title: 'Tweeter',
      links: [
          {link: 'https://github.com/mays4/tweeter', icon:git},
          
      ],
      images:[{
        image_1:Tweeter,
        image_2:Text,
        image_3:showText,
      } ]
    },
    {
    id:4,
    tags: 'Express',
    image:Register,
    info: 'Tech Stack: Express, Node',
    description: 'TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs (à la bit.ly).',
    title: 'TinyApp',
    
    links: [
        {link: 'https://github.com/mays4/tinyapp', icon:git},
        {link: 'https://app-tiny.herokuapp.com/login', icon: faDisplay},
    ] ,
    images:[{
      image_1:Register,
      image_2:Update,
      image_3:Create,
    }]
    },
    {
    id:5,
    tags: 'React',
    image:Page,
    info:'React, Stream-API, Twilio-API',
    description: 'A real chat app using Stream-API , also Twilio API  used  to send notifications to offline users that they got messages using there phoneNumbers' ,
    title: 'Medical-pager',
    
    links: [
        {link: 'https://github.com/mays4/medical-pager', icon:git},
        {link:'https://medical-chat-page.netlify.app', icon: faDisplay},
    ] ,
    images:[{
      image_1:Page,
      image_2:Chat,
      image_3:Search,
    }]
    },
    {
      id:6,
      tags: 'React',
      image:homebidder1,
      info:'HomeBidder is an online platform for buying and selling homes without the use of blind-bidding..',
      description: 'Technology Used:React, React-Bootstrap, CSS,PostgreSQL, node.js, Express, Axios, JWT, Socket-io, Cloudinary API',
      title:'HomeBidder',
      
      links: [
          {link: 'https://github.com/RameesaRijas/HomeBidder', icon:git},
          
      ] ,
      images:[{
        image_1:homebidder1,
        image_2:homebidder2,
        image_3:homebidder3,
      }]
      },
      {
        id:7,
        tags: 'React',
        image: View,
        info:'Technology Used:React, PostgreSQL, Axios, Jest, storybook, Cypress.',
        description: 'Interview Scheduler single app page,where students can book appointments with interviewers and edit and delete them.',
        title:'Scheduler',
        
        links: [
            {link: 'https://github.com/mays4/Scheduler', icon:git},
           
        ] ,
        images:[{
          image_1: View,
          image_2:Appointment,
          image_3:Save,
        }]
        },
        {
          id:8,
          tags: 'React',
          image: Drum2,
          info:'Technology Used:React, Javascript,CSS',
          description: 'Drum Machine is a app that you can press a key and play the sound and record sounds and ajust speed and volume',
          title:'Drum Machine',
          
          links: [
              {link: 'https://github.com/mays4/Drum-machine', icon:git},
             
          ] ,
          images:[{
            image_1: Drum,
            image_2:Drum1,
            image_3:Drum2,
          }]
          },
         {
        id:9,
        tags: 'React',
        image: calc2,
        info:'Technology Used:React, Javascript, CSS',
        description: 'Calculator that you can use to Multiple divide sum and subtract .',
        title:'Calcluator',
        
        links: [
            {link: 'https://github.com/mays4/calculator-', icon:git},
           
        ] ,
        images:[{
          image_1: Calc,
          image_2:calc1,
          image_3:calc2,
        }]
        },
        {
          id:10,
          tags: 'JQuery',
          image: Quote2,
          info:'Technology Used:React, Javascript, CSS',
          description: 'Quote machine is an app that can you use to generate random quote and post them in Twitter .',
          title:'Quote',
          
          links: [
              {link: 'https://github.com/mays4/Quote-Machine', icon:git},
             
          ] ,
          images:[{
            image_1:Quote,
            image_2:Quote1,
            image_3:Quote2,
          }]
          }
         
          
        ];
