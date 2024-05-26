import React from 'react';
import './home.css';
import Popup from '../popup/Popup';

const Home = () => {
  const data = [
    
{
  id: 1,
  title: 'Kalakrithi',
  description: "The Kalatrithi celebrates creative art in its most popular forms: music, dance and theater. The popular student club is responsible for organizing extra curricular activities on-campus, facilitating GITAMites' affinity for arts and culture.",
  image: 'kalakrithihyd.jpeg',
  logo: 'Kalakrithi.jpg'
},
{
  id: 2,
  title: 'GitHub Community at Gitam',
  description: "GitHub Community GITAM (GCG) was founded in September 2021 unofficially by a group of six like-minded individuals in GITAM Bangalore to promote technology and its importance in the university. In January 2022, GitHub Community GITAM was named an official SIG (Special Interest Group) under the Directorate of Student Life. From a group of six people, GitHub Community GITAM grew to be a community of over 350 people. It is known by students on all three campuses at Visakhapatnam, Hyderabad, and Bangalore. Our Mission is to facilitate an active and striving technical community on campus. We have a team of 25 working every day towards our mission.",
  image: 'epoch.JPG',
  logo: 'github.svg'
},
{
  id: 3,
  title: 'Innovation Center',
  description: 'GITAM’s Innovation Center is a space for enthusiastic students to imagine, collaborate, create and bring their innovative ideas to life. It is a platform to give their creative minds a little more spark.',
  image: 'card2.jpg',
  logo: 'iclogo.jpg'
},
{
  id: 4,
  title: 'GITAM Quiz club',
  description: 'The main objective of GQC (presumably standing for " Gitam Quiz Club") is to create an engaging platform for conducting quizzes and fostering collaboration with other clubs.',
  image: '',
  logo: 'quiz.png',
},
{
  id: 5,
  title: 'GITAM Cooking Club',
  description: 'Bringing all cooking enthusiasts together on an exciting journey into the world of cooking involves creating a vibrant and inclusive community where people can share their passion for food, learn new culinary skills, and explore diverse cuisines.',
  image: 'card3.jpg',
  logo: 'cooking.png',
},
{
  id: 6,
  title: 'Korean culture club',
  description: "The club's mission to promote a profound understanding and awareness of Korean culture and language through various activities and events is a commendable endeavor that can have a significant impact on the campus community.",
  image: 'kccteam.jpg',
  logo: 'kcc.png',
},
{
  id: 7,
  title: 'Engineers Without Borders (EWB)',
  description: "Engineers Without Borders (EWB) is a non-profit organization that works for the development of society. The organization works in collaboration with other institutions to fund and develop ideas that benefit people in low income and rural areas, and offers students real-world experience.",
  image: 'card3.jpg',
  logo: 'ewb.jpg'
},
{
  id: 8,
  title: 'Entrepreneurs club',
  description: "To facilitate an active and thriving entrepreneurial ecosystem on the campus.",
  image: 'card3.jpg',
  logo: 'eclub.png'
},
{
  id: 9,
  title: 'Disha',
  description: "Disha was started by the student body, under the guidance of Dr. Joseph RatnaJaykar, Associate Professor in the Department of English and inaugurated in December 2017.",
  image: 'card3.jpg',
  logo: 'disha.jpg'
},

  ];

  const [showModal, setShowModal] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setShowModal(true);
  };

  return (
    <div className="home-container">
      {data.map((card, idx) => (
        <div key={idx} className="card" onClick={() => handleCardClick(card)}>
          <img src={`/assets/${card.logo}`} alt={card.title} />
          <h2>{card.title}</h2>
        </div>
      ))}
      {showModal && (
        <Popup
          onClose={() => setShowModal(false)}
          card={selectedCard}
        />
      )}
    </div>
  );
};

export default Home;