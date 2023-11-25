import companylogo from "../../icons/company-logo.svg";
import mapsIcon from "../../icons/map.svg";
import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import { Validator } from "../../validators";
import { useFormInputValidation } from "react-form-input-validation";
import AutofillCheckoutDemo from "../Autocomplete";

import "react-datepicker/dist/react-datepicker.css";

import "./magnabox.css";


function MagnaBox() {
    const [startDate, setStartDate] = useState(new Date());
    const [formData, setFormData] = useState({});
    const [fields, errors, form] = useFormInputValidation({
        leadName: "",
        email: "",
        phone: '',
        address: ''
    }, {
        leadName: "required",
        email: "required|email",
        phone: "required|numeric|digits_between:10,12",
        address: "required"
        // password: "required"
    });
    const [error, setError] = useState({});

    useEffect(() => {
        if (form.isValidForm) {
            // console.log(fields, errors, form);
            // Perform api call here
        }
    }, [])

    const handleSubmit = (data) => {

        console.log('@@@', data);
    }
    return (
        <div className="magnato_container py-2">
            <div className="container my-4">
                <div className="row mb-4">
                    <div className="d-flex justify-content-between">
                        <h3 className=""> MagnaBox Private Limited</h3>
                        <img src={companylogo} className="" alt="logo" />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="d-flex justify-content-between">
                        <h6 className=""> Add new lead form</h6>
                        <button className="cancel-button btn btn-outline-danger">Cancel</button>
                    </div>
                </div>
                <div className="row mt-4 p-5">
                    <form className="" onSubmit={handleSubmit} noValidate
                        autoComplete="off">
                        <div className="my-4">
                            <label htmlFor="exampleInputEmail1" className="form-label">Lead Name <span className="text-danger">*</span></label>
                            <div className="d-flex">
                                <i className="icon border-right-0 border-0" id="icon-1"></i>
                                <input name={'leadName'} type="text" className="form-control  border-0 py-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Lead Name" value={fields?.leadName} onChange={form.handleChangeEvent} onBlur={form.handleBlurEvent} data-async />
                            </div>

                            <div className="sq-input-field--error text-danger">
                                {errors.leadName
                                    ? "This field is required"
                                    : ""}
                            </div>

                        </div>
                        <div className="my-4 ">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email ID <span className="text-danger">*</span>

                            </label>
                            <div className="d-flex">
                                <i className="icon border-right-0 border-0" id="icon-2"></i>
                                <input type="email" className="form-control  border-0 py-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@anyemail.com" name={"email"} value={fields?.email} onChange={form.handleChangeEvent} onBlur={form.handleBlurEvent} data-async />
                            </div>
                            <div className="sq-input-field--error text-danger">
                                {errors.email
                                    ? errors.email
                                    : ""}
                            </div>
                        </div>
                        <div className="my-4">
                            <label htmlFor="exampleInputPassword1" className="form-label" >Phone Number <span className="text-danger">*</span></label>
                            <div className="d-flex">
                                <i className="icon border-right-0 border-0" id="icon-3"></i>
                                <input type="phone" className="form-control  border-0 py-3" placeholder="+918000000000" name="phone" value={fields?.phone} onChange={form.handleChangeEvent} onBlur={form.handleBlurEvent}/>
                            </div>
                            <div className="sq-input-field--error text-danger">
                                {errors.phone
                                    ? errors.phone
                                    : ""}
                            </div>
                        </div>
                        <div className="my-4 ">
                            <label htmlFor="exampleInputPassword1" className="form-label" >Address <span className="text-danger">*</span></label>
                            <div className="d-flex ">
                            <i className="icon border-right-0 border-0" id="icon-4"></i>
                                <input type="text" className="form-control py-3 border-0 " placeholder="Gurugram, India" value={fields?.address} name={'address'} onChange={form?.handleChangeEvent} onBlur={form.handleBlurEvent}/>
                                </div>
                            <div className="sq-input-field--error text-danger">
                                {errors.address
                                    ? errors.address
                                    : ""}
                            </div>
                        </div>
                        <img src={mapsIcon} className="w-100"/>
                            {/* //Address with auto-search , Uncomment this next div code to see it below original address*/ }

                        {/* <div className="my-4">
                        <AutofillCheckoutDemo className="form-control" handleChangeAddress={form?.handleChangeEvent} handleBlurEventAddress={fields.handleBlurEvent} />
                            </div>             */}

                        <div className="my-4 ">
                            <label htmlFor="exampleInputPassword1" className="form-label" >Sale value </label>
                            <div className="d-flex">
                                <i className="icon border-right-0 border-0" id="icon-5"></i>
                                <input type="text" className="form-control  border-0 py-3" placeholder="50,000,000" />
                            </div>
                        </div>
                        <div className="my-4">
                            <label htmlFor="exampleInputPassword1" className="form-label" >Date</label>

                            <div className="d-flex">
                                <i className="icon border-right-0 border-0" id="icon-6"></i>
                                {/* <input type="text" className="form-control  border-0 py-3" placeholder="29 Aug 2023" /> */}
                                <DatePicker className="form-control border-0 py-3" selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                        </div>
                        <div className="my-4 ">

                            <label htmlFor="exampleInputPassword1" className="form-label" >Time</label>
                            <div className="d-flex">
                                <i className="icon border-right-0 border-0" id="icon-7"></i>
                                <input type="text" className="form-control  border-0 py-3" placeholder="10:00 AM" />
                            </div>
                        </div>
                        <div className="my-3">
                            <label className="form-label">Options</label>
                            <div className="d-flex">
                                <i className="icon border-right-0 border-0" id="icon-8"></i>

                                <select id="disabledSelect" className="form-select border-0  py-3">
                                    <option>Options</option>
                                </select>
                                <i className=" border-right-0 border-0" id="icon-10"></i>
                            </div>
                        </div>
                        <div className="my-3">
                            <label className="form-label">Products</label>
                            <div className="d-flex">
                                <i className="icon border-right-0 border-0" id="icon-8"></i>

                                <select id="disabledSelect" className="form-select border-0  py-3">
                                    <option>Options</option>
                                </select>
                            </div>
                        </div>

                        <div className="my-3">
                            <label className="form-label">Note</label>
                            <textarea className="form-control" placeholder="Enter notes" rows={5} />
                        </div>
                        <button type="submit" className="mt-4 submit-button btn w-100 text-white">Add lead</button>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default MagnaBox;