import React, { use } from 'react'

const ThemeButton = () => {
    const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") == "true" ? true : false);
    const handleBtnThemeClick = (e) => {
        if (e.target.checked == true)
            document.querySelector("html").setAttribute("data-bs-theme", "dark")
        else
            document.querySelector("html").setAttribute("data-bs-theme", "light")
        setDarkMode(darkMode);
        localStorage.setItem("darkMode", e.target.checked);
    }
}
    useEffect() => {
    if (darkMode == true)

        document.querySelector("html").setAttribute("data-bs-theme", "dark")
    else
        document.querySelector("html").setAttribute("data-bs-theme", "light")
}, []);





        return (
            <div className="form-check form-switch">
                <input class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="switchCheckDefault"
                    checked={darkMode}
                    onClick={handleBtnThemeClick}
                />
            </div>
        )
}


export default ThemeButton