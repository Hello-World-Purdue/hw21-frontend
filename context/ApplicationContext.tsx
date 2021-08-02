import React, { useState } from "react";
import { Gender, ethnicities,  } from '../util/enums';

const initialState = {
    id: String,
    userId: String,
    gender: Gender,
    ethnicity: String,
    classYear: String,
    major: String,
    referral: String,
    hackathons: Number,
    shirtSize: String,
    dietaryRestriction: String,
    website: String,
    answer1: String,
    answer2: String,
    resume: String,
    statusPublic: String,
    statusInternal: String,
}

const ApplicationContext = React.createContext({
    ...initialState
})