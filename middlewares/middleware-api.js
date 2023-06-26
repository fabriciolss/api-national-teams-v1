import mongoose from "mongoose";
import {errorInternal, errorNotFounded, errorRequest, errorValidation} from "../errors/error-api.js";

export class Middlewares {
    static erroHandling = (error, req, res, next) => {
        if (error instanceof mongoose.Error.CastError) {
            new errorRequest().sendResponse(res);
        } else if (error instanceof mongoose.Error.ValidationError) {
            new errorValidation(error).sendResponse(res);
        } else {
            new errorInternal().sendResponse(res);
        }
    }

    static notFounded = (req, res, next) => {
        new errorNotFounded().sendResponse(res);
    }
}