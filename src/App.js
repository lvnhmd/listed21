import React, { Fragment } from 'react';
import './App.css';

const App = () => {
  return (
    <Fragment>
      <div id='canvas'>
        <div>
          <h1 class='logo'>
            <a href='index.html'>listed21</a>
          </h1>
        </div>
        <div className='gallery'>
          <a target='_blank' href='img_5terre.jpg'>
            <img
              src='https://www.stylist.co.uk/images/app/uploads/2019/06/27123555/jar-3-1680x1120.jpg?w=1200&h=1&fit=max&auto=format%2Ccompress'
              alt='Cinque Terre'
              width='600'
              height='400'
            />
          </a>
          <div className='desc'>Win a £100 voucher to spend at Matthew Calvine</div>
        </div>

        <div className='gallery'>
          <a target='_blank' href='img_forest.jpg'>
            <img
              src='https://images.squarespace-cdn.com/content/56d4a125e707eb7a02e4055f/1456778343214-6EXQ3R8UIDEWLZZQ3UYP/65.jpg?format=1000w&content-type=image%2Fjpeg'
              alt='Forest'
              width='600'
              height='400'
            />
          </a>
          <div className='desc'>Add a description of the image here</div>
        </div>

        <div className='gallery'>
          <a target='_blank' href='img_lights.jpg'>
            <img
              src='https://images.squarespace-cdn.com/content/56d4a125e707eb7a02e4055f/1456778343214-6EXQ3R8UIDEWLZZQ3UYP/65.jpg?format=1000w&content-type=image%2Fjpeg'
              alt='Northern Lights'
              width='600'
              height='400'
            />
          </a>
          <div className='desc'>Add a description of the image here</div>
        </div>

        <div className='gallery'>
          <a target='_blank' href='img_mountains.jpg'>
            <img
              src='https://images.squarespace-cdn.com/content/56d4a125e707eb7a02e4055f/1456778343214-6EXQ3R8UIDEWLZZQ3UYP/65.jpg?format=1000w&content-type=image%2Fjpeg'
              alt='Mountains'
              width='600'
              height='400'
            />
          </a>
          <div className='desc'>Add a description of the image here</div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
