import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// using ES6 modules
import { Link } from "react-router-dom";

import FormInput from "./FormInput";
import Button from "./Button";

import { auth } from "../../firebase/utils";

const initialState = {
    email: "",
    errors: [],
};

class PasswordReset extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { email } = this.state;

            const config = {
                url: "http://localhost:3000/LogInScreen",
            };

            await auth
                .sendPasswordResetEmail(email, config)
                .then(() => {
                    this.props.history.push("/LogInScreen");
                })
                .catch(() => {
                    const err = ["Email not found. Please try again."];
                    this.setState({
                        errors: err,
                    });
                });
        } catch (err) {
            // console.log(err);
        }
    };

    render() {
        const { email, errors } = this.state;

        // const configAuthWrapper = {
        //   headline: "Email Password",
        // };

        return (
            // <AuthWrapper {...configAuthWrapper}>
            <>
                <div className="user-auth-form__holder p-5">
                    <h2 className="user-auth__heading">Forgot Email/Password</h2>
                    <p>
                    How would you like to reset your password?
                    </p>
                    <p>We will send you an email with instructions on how to reset your password.</p>

                    {errors.length > 0 && (
                        <ul>
                            {errors.map((e, index) => {
                                return (
                                    <li className="error-message" key={index}>
                                        {e}
                                    </li>
                                );
                            })}
                        </ul>
                    )}

                    <form className="user-auth__form" onSubmit={this.handleSubmit}>
                        <FormInput
                            type="email"
                            name="email"
                            value={email}
                            placeholder="name@example.com"
                            onChange={this.handleChange}
                        />

                        <Button className="btn btn--signIn-email mt-4 py-3" type="submit">
                            Email Me 
                        </Button>
                        <p className="mt-4">
                            <Link to="/PasswordResetScreen">I can't remember my email address or phone number.</Link>

                        </p>
                    </form>
                </div>
            </>
        );
    }
}

export default withRouter(PasswordReset);
