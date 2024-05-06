const Sidebar = ({ actionSidebar }) => {
    return (
        <div>
            <button onClick={actionSidebar}>X</button>
            <p>Home</p>
            <p>Contact</p>
            <p>Profile</p>
        </div>
    )
}

export default Sidebar;