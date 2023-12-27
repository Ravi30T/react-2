const element = (
  // Write your code here.
  <div className='bg-container'>
    <h1> Congratulations </h1>
    <div className='card-container'>
      <img src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png' />
      <p className='para'> Kiran V </p>
      <p className='para'>
        {' '}
        Vishnu Institute of Computer Education and Technology, Bhimavaram{' '}
      </p>
      <img src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
