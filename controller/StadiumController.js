import {stadiumModel} from "../models/StadiumModel.js";

export class StadiumController {
    static Stadiums = stadiumModel();

    static createStadium = async (req, res) => {
        const stadium = new StadiumController.Stadiums(req.body);
        stadium.save()
            .then(suc => res.status(201).json({message: "Successfully created."}))
            .catch(err => res.status(500).json({message: `Bad Request: ${err.message}`}));
    }

    static createStadiums = async (req, res) => {
        StadiumController.Stadiums.insertMany(req.body)
            .then(suc => res.status(201).json({message: "Successfully created."}))
            .catch(err => res.status(500).json({message: `Bad Request: ${err.message}`}));
    }

    static readStadium = async (req, res) => {
        StadiumController.Stadiums.findById(req.params.id)
            .then(suc => res.status(200).json(suc))
            .catch(err => res.status(500).json({message: `Bad Request: ${err.message}`}))
    }

    static readStadiums = async (req, res) => {
        StadiumController.Stadiums.find()
            .then(suc => res.status(200).json(suc))
    }

    static updateStadium = async(req, res) => {
        StadiumController.Stadiums.findByIdAndUpdate(req.params.id, req.body)
            .then(suc => res.status(204).json({message: "Successfully updated."}))
            .catch(err => res.status(500).json({message: `Bad Request: ${err.message}`}))
    }

    static deleteStadium = async(req, res) => {
        StadiumController.Stadiums.findByIdAndDelete(req.params.id)
            .then(suc => res.status(204).json({message: "Successfully deleted."}) )
            .catch(err => res.status(500).json({message: `Bad Request: ${err.message}`}))
    }
}