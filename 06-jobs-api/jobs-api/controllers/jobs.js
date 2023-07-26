const Job = require('../models/Job');
const { StatusCodes } = require('http-status-codes');

const getAllJobs = async (req, res) => {
    const jobs = await Job.find({ createdBy: req.user.userId }).sort('createdAt');

    res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
};

const getJob = (req, res) => {
    res.send('Get job');
};

const createJob = async (req, res) => {
    req.body.createdBy = req.user.userId;

    const job = await Job.create(req.body);

    res.status(StatusCodes.CREATED).json({ job });
};

const updateJob = (req, res) => {
    res.send('Update job');
};

const deleteJob = (req, res) => {
    res.send('Delete job');
};

module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
};