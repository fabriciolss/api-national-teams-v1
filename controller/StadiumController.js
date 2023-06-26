import {stadiumModel} from "../models/StadiumModel.js";

export class StadiumController {
    static Stadiums = stadiumModel();

    static createStadium = async (req, res, next) => {
        const stadium = new StadiumController.Stadiums(req.body);
        stadium.save()
            .then(suc => res.status(201).json({message: "Successfully created."}))
            .catch(err => next(err));
    }

    static createStadiums = async (req, res, next) => {
        StadiumController.Stadiums.insertMany(req.body)
            .then(suc => res.status(201).json({message: "Successfully created."}))
            .catch(err => next(err));
    }

    static readStadium = async (req, res, next) => {
        StadiumController.Stadiums.findById(req.params.id)
            .then(suc => res.status(200).json(suc))
            .catch(err => next(err));
    }

    static readStadiums = async (req, res) => {
        StadiumController.Stadiums.find()
            .then(suc => res.status(200).json(suc))
    }

    static updateStadium = async (req, res, next) => {
        StadiumController.Stadiums.findByIdAndUpdate(req.params.id, req.body)
            .then(suc => res.status(204).json({message: "Successfully updated."}))
            .catch(err => next(err));
    }

    static deleteStadium = async (req, res, next) => {
        StadiumController.Stadiums.findByIdAndDelete(req.params.id)
            .then(suc => res.status(204).json({message: "Successfully deleted."}))
            .catch(err => next(err));
    }

    static searchStadium = async (req, res, next) => {
        StadiumController.Stadiums.find({name: req.query.stadium})
            .then(suc => res.status(200).json(suc))
            .catch(err => next(err));
    }
}