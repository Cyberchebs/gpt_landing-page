import React from 'react'
import './features.css';
import Feature from '../../components/feature/Feature';

const featuresData = [
  {
    title:'improving and growing instantly',
    text:'dddggash text  wjdh  aafganistan monkeies msckdhv machine gun guuggogggg hljhkjkj jk i be ak for my jt no garabolastic gtra sdoa crest mathematics'
  },
  {
    title:'Become the tended active',
    text:'dddggash text  wjdh  aafganistan monkeies msckdhv machine gun guuggogggg hljhkjkj'
  },
  {
    title:'Message or arm nothing',
    text:'dddggash text  wjdh  aafganistan monkeies msckdhv machine gun guuggogggg hljhkjkj brrr ice on my wrist lets goooo do front end dodododo'
  },
  {
    title:'Really boy law country',
    text:'dddggash text  wjdh  aafganistan monkeies msckdhv machine gun they say this town is though but im thougher guuggogggg hljhkjkj'
  },
]


const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
        <div className="gpt3__features-heading">
          <h1 className="gradient__text">The Future is Now and You Just Need To Realise it.Step into Future Today & Make it Happen</h1>
          <p>Request Early access</p>
        </div>
        <div className="gpt3__features-container">
        {featuresData.map((item, index) =>(
          <Feature title={item.title} text={item.text}  key={item.title + index} />
        ))}
        </div>
    </div>
  )
}

export default Features