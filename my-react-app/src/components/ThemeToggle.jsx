import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeContext/ThemeContext';

const ThemeToggle = () => {

    const {theme, setTheme} = useContext(ThemeContext)

            const changeTheme = (e) => {
                let themeStatus = e.currentTarget.checked;

                if(themeStatus){
                    setTheme("dark")
                }
                else{
                    setTheme("light")
                }

                // console.log(theme)
            }


            const switchTheme  = (e) => {
                let val = e.target.value;

                setTheme(val)
            }




  return (
    <div>
        {/* <input type="radio" name="theme" onChange={changeTheme}  checked={theme == "dark"} /> */}




        <input type="radio" name="theme" onChange={switchTheme} value={"dark"} className=' bg-blue-800' checked={theme == "dark"} />
        <input type="radio" name="theme" onChange={switchTheme} value={"light"} className='' checked={theme == "light"} />
        <input type="radio" name="theme" onChange={switchTheme} value={"forest"} className='' checked={theme == "forest"} />

    </div>
  )
}

export default ThemeToggle