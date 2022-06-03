import './App.css';
import Data from './data.json'
function App() {

  return (
    <div className="App">
      <div className='head'>

      </div>
      <div className="filter-container">
        <div className="filter-div">
          <div className="filters">
          </div>
          <div className="clear">

          </div>

        </div>
      </div>
      <div className='listings'>
        {
          Data.map(
            (item)=>{
              return <div key={item.id} className='listing'>
              <div className="details">
                <img src={`.${item.logo}`} alt="" />
                <div className='details-contents' >
                  <div className="heading">
                    <span className="company">{item.company}</span>
                    <span className="new">{item.new?"NEW!":""}</span>
                    <span className="featured">{item.featured?"Featured":""}</span>
                  </div>
                  <div className="position">
                    {item.position}
                  </div>
                  <div className="more-details">
                    {item.postedAt} . {item.contract} . {item.location}
                  </div>
      
                </div>
      
              </div>
              <div className="filter-options">
                <button id={item.role}>{item.role}</button>
                <button id={item.level}>{item.level}</button>
                {
                  item.languages.map(
                    (ln)=>{
                     return <button key={ln} id={ln}>{ln}</button>
                      
                    }
                  )
                }
                {
                  item.tools.map(
                    (tool)=>{
                      return <button key={tool} id={tool}>{tool}</button>
                    }
                  )
                }
      
      
              </div>
      
            </div>
      
            }
          )
        }

      </div>
    </div>
  );
}

export default App;
