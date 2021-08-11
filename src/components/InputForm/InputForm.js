

const InputForm = ({handleUpdateState,inputUser,addUser}) => {
    return (
        <div>
            <input onChange={handleUpdateState} value={inputUser} />
            <button onClick={addUser}>Enter</button>
        </div>
    )
}

export default InputForm