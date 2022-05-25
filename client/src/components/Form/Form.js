function Form() {
    return (
        <div className="formulaire">
            <form action="#">
                <br/>
                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="email" required />
                <br/>
                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" id="psw" required />
                <br/>
                <button type="submit" className="registerbtn">Login</button>
            </form>
        </div>

);
}

export default Form;