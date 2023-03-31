import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const formValue = [
    {

    }
  ]



  const formData = {
    "components": [
      {
        "label": "Name",
        "type": "textfield",
        "input": true,
        "key": "name",
        "classes": "border-2 border-red-900",
        "parentClasses": "flex gap-8 pb-4"
      },

      {
        "label": "Email",
        "type": "email",
        "input": true,
        "key": "email",
        "placeholder": "Enter Email",
        "classes": "border-2 border-red-900",
        "parentClasses": "flex gap-8 pb-4"
      },

      {
        "label": "Age",
        "type": "number",
        "input": true,
        "key": "age",
        "classes": "border-2 border-red-900",
        "parentClasses": "flex gap-8 pb-4"
      },

      {
        "type": "button",
        "label": "Submit",
        "key": "submit",
        "disableOnInvalid": true,
        "input": true
      }
    ],
    "display": "form"
  }


  const handleTextArea = (e) => {
        const textData = e.target.value
        console.log(textData, 53)
        // console.log([...data.components, JSON.parse(textData)], 3824)
        setData(JSON.parse(textData))
  }


  const [data, setData] = useState(formData)

  console.log(data, 59)

  return (
    <div className="flex flex-row px-12 pt-12 gap-8">


      <div className='h-full w-1/2'>

        {
          data.components.map((data)=>{
            return (

              // (data.type == "textfield") &&
              <div className={data.parentClasses}>
    
                <label htmlFor={data.key}>{data.label}</label>
                <input className={data.classes} type={data.type} />
    
              </div>

            )
          })
        }

        {/* {
          (data.components[0].type == "textfield") &&
          <div className={data.components[0].parentClasses}>

            <label htmlFor={data.components[0].key}>{data.components[0].label}</label>
            <input className={data.components[0].classes} type="text" />

          </div>
        }

        {
          (data.components[1].type == "email") &&
          <div className={data.components[1].parentClasses}>

            <label htmlFor={data.components[1].key}>{data.components[1].label}</label>
            <input placeholder={data.components[1].placeholder} className={data.components[1].classes} type="text" />

          </div>
        }

        {
          (data.components[2].type == "number") &&
          <div className={data.components[2].parentClasses}>

            <label htmlFor={data.components[2].key}>{data.components[2].label}</label>
            <input className={data.components[2].classes} type="text" />

          </div>
        } */}



      </div>

      <div className='w-1/2 h-full'>
        <textarea onChange={handleTextArea} defaultValue={JSON.stringify(data, null, 2)} rows="40" className='w-96 h-full'></textarea>
      </div>
    </div>
  )
}

export default App
