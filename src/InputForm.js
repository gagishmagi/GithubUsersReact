

const InputForm = (props) => {
    return (
        <div>
            <input onChange={props.handleUpdateState} value={props.inputUser} />
            <button onClick={props.addUser}>Enter</button>
        </div>
    )
}

export default InputForm