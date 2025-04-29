
const ToggleSwitch = ({isOn, handleToggle}) => {
    return (
        <div className="toggle-switch">
            <input
                checked={isOn}
                onChange={handleToggle}
                className="toggle-switch-checkbox"
                id="darkModeToggle"
                type="checkbox"
            />
            <label className="toggle-switch-label" htmlFor="darkModeToggle">
                <span className="toggle-switch-inner" />
                <span className="toggle-switch-switch" />
            </label>
        </div>
    )
}

export default ToggleSwitch
