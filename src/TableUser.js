import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const TableUser = () => {
    const { type } = useParams();
    const [formType, setFormType] = useState(type === "register" ? type : "login");

    // console.log(data);

    const toggleFormType = params => {
        setFormType(prevState => (prevState === "register" ? "login" : "register"));
    };

    return (
    
    <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    {formType === "register" ? (
                        <>
                            <h3 className="mb-4">Register</h3>{" "}
                            <p>
                                Already have account?{" "}
                                <button role="button" onClick={toggleFormType}>
                                    Sign In
                                </button>{" "}
                            </p>{" "}
                        </>
                    ) : (
                        <>
                            <h3 className="mb-4">Login</h3>{" "}
                            <p>
                                Dont have acccount?{" "}
                                <button role="button" onClick={toggleFormType}>
                                    Sign Up
                                </button>
                            </p>
                        </>
                    )}
                </div>
            </div>

            

        </div>



    );
}
 
export default TableUser;