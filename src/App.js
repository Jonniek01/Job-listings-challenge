import './App.css';
import Data from './data.json'
import Tags from './Tags'
import React, { Component } from 'react'

export default class App extends Component {
    state={
      tags:Tags,
      data:Data,
      filters:{},
      

  }
  componentDidUpdate(){
    this.collect()
    this.multiFilter(this.state.data, this.state.filters)
  }

  setRole=(role)=>{
    let Obj=this.state.tags;
    Obj.Role[`${role}`]=true
    this.setState(
      this.state.tags=Obj
    )

 
  }
  setLevel=(level)=>{
    let Obj=this.state.tags;
    Obj.Level[`${level}`]=true
    this.setState(
      this.state.tags=Obj
    )


  }

  setLanguage=(lang)=>{
    let Obj=this.state.tags;
    Obj.Languages[`${lang}`]=true
    this.setState(
      this.state.tags=Obj
    )

  } 
   setTool=(tool)=>{
    let Obj=this.state.tags;
    Obj.Tools[`${tool}`]=true
    this.setState(
      this.state.tags=Obj
    )
  }
    
    
  collect = () => {
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
      this.state.filters=collectedTrueKeys
    
  };



  /*Filter function*/ 
  multiFilter=(data, filters)=>{
    console.log("Data0:",data)
      /*  Role*/
        const data1=()=>{
          if(filters.Role.length>0){
            console.log("roles:", filters.Role)

          return data.filter(item=>filters.Role.includes(item.role))
         }
         return data
   }
   this.state.data=data1()

  
      console.log("Data1", data1())
    /*Level*/
        const data2=()=>{
          if(filters.Level.length>0){
            console.log("level:", filters.Level)
          return data1().filter(item=>filters.Level.includes(item.level))
        }
        return data1()
    }
    this.state.data=data2()

      console.log("Data2", data2())

/*Languages*/
      const data3=()=>{
        if(filters.Languages.length>0){
  
          console.log("languages:",filters.Languages)
        return data2().filter((item)=>{ return item.languages.some(lang=>{ return filters.Languages.includes(lang)})})
      }
      return data2()
      }

      this.state.data=data3()
  /*Tools*/
  const data4=()=>{
    if(filters.Tools.length>0){

      console.log("Tools:",filters.Tools)
    return data3().filter((item)=>{ return item.tools.some(tool=>{ return filters.Tools.includes(tool)})})
  }
  return data3()
  }
  console.log("Data final", data4())

  this.state.data=data4()


}
  render() {
    return (
      <div className="App">
      <div className='head'>
  
      </div>
      <div className="filter-container">
        <div className="filter-div">
          <div className="filters">
        
            <span className='filter'><span className='name'>Javascript</span><span className='delete'>X</span></span>
            <span className='filter'><span className='name'>CSS</span><span className='delete'>X</span></span>
            <span className='filter'><span className='name'>Ruby</span><span className='delete'>X</span></span>
  
          </div>
          <div className="clear"> 
          <p className='clear-button'>Clear</p>
  
  
          </div>
  
        </div>
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
