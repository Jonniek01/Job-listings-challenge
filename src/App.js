import './App.css';
import Data from './data.json'
import Tags from './Tags'
import React, { Component } from 'react'

export default class App extends Component {
    state={
      tags:Tags,
      data:Data,
      filters:{
        Role: [],
        Level: [],
        Languages: [],
        Tools: []
      }
      

  }

  setRole=(role)=>{
    let Obj=this.state.tags;
    Obj.Role[`${role}`]=true
    this.setState(
      this.state.tags=Obj
    )
    this.collect()
   this.multiFilter()

 
  }
  setLevel=(level)=>{
    let Obj=this.state.tags;
    Obj.Level[`${level}`]=true
    this.setState(
      this.state.tags=Obj
    )
    this.collect()
   this.multiFilter()


  }

  setLanguage=(lang)=>{
    let Obj=this.state.tags;
    Obj.Languages[`${lang}`]=true
    this.setState(
      this.state.tags=Obj
    )
    this.collect()
   this.multiFilter()

  } 
   setTool=(tool)=>{
    let Obj=this.state.tags;
    Obj.Tools[`${tool}`]=true
    this.setState(
      this.state.tags=Obj
    )
    this.collect()
    this.multiFilter()
 
  }
    
    
  collect = () => {
    console.log("Collecting")
    const collectedTrueKeys = {
      Role: [],
      Level: [],
      Languages: [],
      Tools: []
    };
    const { Role, Level, Languages, Tools } = this.state.tags;
    for (let role in Role) {
      if (Role[role]) collectedTrueKeys.Role.push(role);
    }
    for (let level in Level) {
      if (Level[level]) collectedTrueKeys.Level.push(level);
    }
    for (let lang in Languages) {
      if (Languages[lang]) collectedTrueKeys.Languages.push(lang);
    }
    for (let tool in Tools) {
      if (Tools[tool]) collectedTrueKeys.Tools.push(tool);
    }   
    this.setState(
      this.state.filters=collectedTrueKeys

    )
    
  };



  /*Filter function*/ 
  multiFilter=()=>{
    let data=this.state.data;
    let filters=this.state.filters;

      /*  Role*/
        const data1=()=>{
          console.log("one",filters.Role)
          if(filters.Role.length>0){
            this.setState(
              this.state.data= data.filter(item=>filters.Role.includes(item.role))


            )

         }
   }

  
    /*Level*/
        const data2=()=>{
          console.log("two",filters.Level)

          if(filters.Level.length>0){
            this.setState(
              this.state.data= data.filter(item=>filters.Level.includes(item.level))

            )
        }
    }


/*Languages*/
      const data3=()=>{
        console.log("three",filters.Languages)

        if(filters.Languages.length>0){
          this.setState(
            this.state.data= data.filter((item)=>{ return filters.Languages.every(lang=>{ return item.languages.includes(lang)})})

          )
  
      }
      }

  /*Tools*/
  const data4=()=>{
    console.log("four",filters.Tools)

    if(filters.Tools.length>0){
      this.setState(
        this.state.data=data.filter((item)=>{ return filters.Tools.every(tool=>{ return item.tools.includes(tool)})})

      )


  }
  }
  data1()
  data2()
  data3()
  data4()


}

removeRole=(role)=>{
  this.setState(
    this.state.data=Data
  )

  let Obj=this.state.tags;
  Obj.Role[`${role}`]=false
  this.setState(
    this.state.tags=Obj
  )
  this.collect()
  this.multiFilter()






}
removeLevel=(level)=>{
  this.setState(
    this.state.data=Data
  )

  let Obj=this.state.tags;
  Obj.Level[`${level}`]=false
  this.setState(
    this.state.tags=Obj
  )
  this.collect()
  this.multiFilter()




}
removeLang=(lang)=>{
  this.setState(
    this.state.data=Data
  )

  let Obj=this.state.tags;
  Obj.Languages[`${lang}`]=false
  this.setState(
    this.state.tags=Obj
  )
  this.collect()
  this.multiFilter()



}
removeTool=(tool)=>{
  this.setState(
    this.state.data=Data
  )

  let Obj=this.state.tags;
  Obj.Tools[`${tool}`]=false
  this.setState(
    this.state.tags=Obj
  )
  this.collect()
  this.multiFilter()


}

clear=()=>{
  this.setState(
    this.state.data=Data
  )

  let Obj=this.state.tags;
  Object.keys(Obj.Languages).forEach((key)=>{
    Obj.Languages[key]=false;
  })
  Object.keys(Obj.Level).forEach((key)=>{
    Obj.Level[key]=false;
  })
  Object.keys(Obj.Tools).forEach((key)=>{
    Obj.Tools[key]=false;
  })
  Object.keys(Obj.Role).forEach((key)=>{
    Obj.Role[key]=false;
  })

  this.setState(
    this.state.tags=Obj
  )
  this.collect()
  this.multiFilter()
 
}


  render() {
    return (
      <div className="App">
      <div className='head'>
  
      </div>
      <div className="filter-container">
      {
                    this.state.filters.Role.length>0||
                    this.state.filters.Level.length>0||
                    this.state.filters.Languages.length>0||
                    this.state.filters.Tools.length>0
                    ?
                    <div className="filter-div">

                    <div className="filters">
                    {
                        this.state.filters.Role.map(
                          (role)=>{
                            return <span key={role} className='filter'><span id={role} className='name'>{role}</span><span onClick={()=>{this.removeRole(role)}} className='delete'>X</span></span>
          
          
                          }
                        )
                        
                      }
                                  {
                        this.state.filters.Level.map(
                          (level)=>{
                            return <span key={level} className='filter'><span id={level} className='name'>{level}</span><span onClick={()=>{ this.removeLevel(level)}} className='delete'>X</span></span>
          
          
                          }
                        )
                        
                      }
          
          
                      {
                        this.state.filters.Languages.map(
                          (lang)=>{
                            return <span key={lang} className='filter'><span id={lang} className='name'>{lang}</span><span onClick={()=>{this.removeLang(lang)}} className='delete'>X</span></span>
          
          
                          }
                        )
                        
                      }
                     {
                        this.state.filters.Tools.map(
                          (tool)=>{
                            return <span key={tool} className='filter'><span id={tool} className='name'>{tool}</span><span onClick={()=>{this.removeTool(tool)}} className='delete'>X</span></span>
          
          
                          }
                        )
                        
                      }
          
                      
                      
                  
            
                    </div>
                    <div className="clear"> 
                    <p onClick={()=>{this.clear()}} className='clear-button'>Clear</p>
            
            
                    </div>
            
                  </div>
                  :
                  <div></div>
        
      
            


          }
       

      </div>
      <div className='listings'>
        {
          this.state.data.map(
            (item)=>{
              return <div key={item.id} className='listing'>
              <div className="details">
                <img className='image' src={`.${item.logo}`} alt="" />
                <div className='details-contents' >
                  <div className="heading">
                    <span className="company">{item.company}</span>
                    <span >{item.new?<p className="new">New!</p>:""}</span>
                    <span >{item.featured?<p className="featured" >FEATURED</p>:""}</span>
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
                <button onClick={()=>{this.setRole(item.role)}}  id={item.role}>{item.role}</button>
                <button onClick={()=>{this.setLevel(item.level)}} id={item.level}>{item.level}</button>
                {
                  item.languages.map(
                    (ln)=>{
                     return <button onClick={()=>{this.setLanguage(ln)}} key={ln} id={ln}>{ln}</button>
                      
                    }
                  )
                }
                {
                  item.tools.map(
                    (tool)=>{
                      return <button onClick={()=>{this.setTool(tool)}} key={tool} id={tool}>{tool}</button>
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
      )
  }
}
