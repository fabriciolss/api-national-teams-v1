import {teamModel} from "../models/TeamModel.js";

export class TeamController {
    static Teams = teamModel();

    static createTeam = async (req, res) => {
        const team = new TeamController.Teams(req.body);
        team.save()
            .then(suc => res.status(201).json({message: "Successfully created."}))
            .catch(err => res.status(500).json({message: `Bad Request: ${err.message}`}));
    }

    static createTeams = async(req, res) => {
        TeamController.Teams.insertMany(req.body)
            .then(suc => res.status(201).json({message: "Successfully created."}))
            .catch(err => res.status(500).json({message: `Bad Request: ${err.message}`}));
    }

    static readTeam = async (req, res) => {
        TeamController.Teams.findById(req.params.id)
            .populate('stadium', 'name')
            .exec()
            .then(suc => res.status(200).json(suc))
            .catch(err => res.status(500).json({message: `Bad Request: ${err.message}}`}))
    }

    static readTeams = async(req,res) => {
        TeamController.Teams.find()
            .populate('stadium', 'name')
            .exec()
            .then(suc => res.status(200).json(suc))
            .catch(err => res.status(500).json({message: `Bad Request: ${err.message}}`}))
    }

    static updateTeam = async(req, res) => {
        TeamController.Teams.findByIdAndUpdate(req.params.id, req.body)
            .then(suc => res.status(204).json({message: "Successfully updated."}))
            .catch(err => res.status(500).json({message: `Bad Request: ${err.message}}`}))
    }

    static deleteTeam = async(req, res) => {
        TeamController.Teams.findByIdAndDelete(req.params.id)
            .then(suc => res.status(204).json({message: "Successfully deleted."}) )
            .catch(err => res.status(500).json({message: `Bad Request: ${err.message}`}))
    }
}