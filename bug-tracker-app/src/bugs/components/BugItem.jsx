const BugItem = ({bug, toggle, remove}) => {
    return (
         <li>
            <span 
                className={ "bugname " + (bug.isClosed ? "closed" : "")}
                onClick={() => toggle(bug)}
            >
                {bug.name}
            </span>
            <small> [ {bug.projectName} ] </small>
            <div className="datetime">{bug.createdAt}</div>
            <button onClick={() => remove(bug)}>Remove</button>
        </li>
    )
}

export default BugItem;