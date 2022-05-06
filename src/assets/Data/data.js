
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




export default {
  projects:[
    { 
      id:1,
      tags: 'React',
      image:Landing,
      info:'React, Next Js , Tailwind , Next Auth for authentication, Stripe API, Firebase'  ,
      description: 'Amazon Clone it is a mini Amazon Project.use Stripe API to checkout',
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
      id:4,
      tags: 'JQuery',
      image: Tweeter,
      info:'Technology Used: HTML, CSS , JS, jQuery, AJAX.',
      description:'Tweeter is a single-page app, Twitter clone.Technology Used: HTML, CSS , JS, jQuery, AJAX.',
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
    id:2,
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
    info:'React , Stream-api,twilio',
    description: 'A real chat app using Stream-api , also Twillio api used  to send notifications to offline users that they got messages using there phoneNumbers' ,
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
      id:3,
      tags: 'React',
      image:homebidder1,
      info:'HomeBidder is an online platform for buying and selling homes without the use of blind-bidding..',
      description: 'Technology Used :React, React-Bootstrap, CSS,PostgreSQL, node.js, Express, Axios, JWT,Socket-io, Cloudinary API',
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
        id:6,
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
        //  {
        // id:6,
        // tags: 'React',
        // image: View,
        // info:'Technology Used:React, PostgreSQL, Axios, Jest, storybook, Cypress.',
        // description: 'Interview Scheduler single app page,where students can book appointments with interviewers and edit and delete them.',
        // title:'Scheduler',
        
        // links: [
        //     {link: 'https://github.com/mays4/Scheduler', icon:git},
           
        // ] ,
        // images:[{
        //   image_1: View,
        //   image_2:Appointment,
        //   image_3:Save,
        // }]
        // },
  ]
}