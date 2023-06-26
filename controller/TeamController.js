import {teamModel} from "../models/TeamModel.js";

export class TeamController {
    static Teams = teamModel();

    static createTeam = async (req, res, next) => {
        const team = new TeamController.Teams(req.body);
        team.save()
            .then(suc => res.status(201).json({message: "Successfully created."}))
            .catch(err => next(err));
    }

    static createTeams = async(req, res, next) => {
        TeamController.Teams.insertMany(req.body)
            .then(suc => res.status(201).json({message: "Successfully created."}))
            .catch(err => next(err));
    }

    static readTeam = async (req, res, next) => {
        TeamController.Teams.findById(req.params.id)
            .populate('stadium', 'name')
            .exec()
            .then(suc => res.status(200).json(suc))
            .catch(err => next(err));
    }

    static readTeams = async(req,res, next) => {
        TeamController.Teams.find()
            .populate('stadium', 'name')
            .exec()
            .then(suc => res.status(200).json(suc))
            .catch(err => next(err));
    }

    static updateTeam = async(req, res, next) => {
        TeamController.Teams.findByIdAndUpdate(req.params.id, req.body)
            .then(suc => res.status(204).json({message: "Successfully updated."}))
            .catch(err => next(err));
    }

    static deleteTeam = async(req, res, next) => {
        TeamController.Teams.findByIdAndDelete(req.params.id)
            .then(suc => res.status(204).json({message: "Successfully deleted."}) )
            .catch(err => next(err));
    }

    static searchTeam = async(req, res, next) => {
        TeamController.Teams.find({club: req.query.team})
            .then(suc => res.status(200).json(suc))
            .catch(err => next(err));
    }
}