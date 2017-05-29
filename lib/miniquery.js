class SweetSelector{
  static select(selector){
    let query = document.querySelectorAll(selector)
    // let result = [].map.call(query, res=>res)
    // if(result.length > 1){
    //   return result[0]
    // }
    // else{
    //   return result
    // }
    return query
  }
}

class DOM {
  static hide(cls){
    let dom = SweetSelector.select(cls)
    dom.forEach(el=>{
      el.style.display = "none";
    })  
  }
  
  static  show(cls){
    let dom = SweetSelector.select(cls)
    dom.forEach(el=>{
      el.style.display = '';
    })
  }
  
  static addClass(cls,name){
    let dom = SweetSelector.select(cls)
    dom.forEach(el=>{
      if (el.classList){
        return el.classList.add(name)
      }
      else{
        return el.name += ' ' + name
      }
    })  
  }
  
  static removeClass(cls,className){
    let dom = SweetSelector.select(cls)
    dom.forEach(el=>{
      if(el.classList){
        el.classList.remove(className)
        console.log(el.classList);
      }
      else{
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
    })
  }
}

class EventDispatcher{
  static on(eventName,eventHandler,callback){
    let dom = SweetSelector.select(eventName)
    dom.forEach(el=>{
      el.addEventListener(eventName,eventHandler)
    })    
    return callback
  }
  
  static trigger(eventName,eventHandler){
    let dom = SweetSelector.select(eventName)
    dom.forEach(el=>{
      var event = document.createEvent('HTMLEvents')
      event.initEvent(eventHandler,true,false);
      el.dispatchEvent(event)
      console.log(el);
    })
  }
}

/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */


/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */


/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */


/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
