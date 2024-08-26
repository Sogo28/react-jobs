import axios from "axios";
import axiosInstance from "./AxiosConfig";
import { JobsSchema, JobSchema, Jobtype } from "../../schemas/JobSchemas";
import { GetJobsfilters } from "../../state/JobStore";
import { JobFormFieldSchema, JobFormFieldType } from "../../schemas/JobFormFieldsSchemas";
import { CompanyType } from "../../schemas/CompanySchema";
import { CompanyFormFieldsType } from "../../schemas/CompanyFormFieldsSchema";

export const fetchJobs = async (query?: GetJobsfilters): Promise<Jobtype[]> => {

  const response = await axios.get("/api/jobs");
  const jobs: Jobtype[] = response.data;

  const validateJobs = JobsSchema.safeParse(jobs);
  if (!validateJobs.success) {
    console.error("Zod validation error:", validateJobs.error.errors);
  }

  return jobs;

}

export const fetchCompanyByEmployer = async (employerId: string): Promise<CompanyType> => {

  const response = await axiosInstance.get(`/api/employers/${employerId}/company`);
  const company = response.data;


  // // Simulate network delay
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  return company
}

export const fetchJobsByEmployer = async (employerId: string): Promise<Jobtype[]> => {

  const response = await axiosInstance.get(`/api/employers/${employerId}/job-offers`);
  const jobs: Jobtype[] = response.data;

  return jobs;
}

export const fetchJobById = async (id: string): Promise<Jobtype> => {

  const response = await axios.get(`/api/jobs/${id}`);
  const job = response.data;

  const validateJob = JobSchema.safeParse(job);
  if (!validateJob.success) {
    console.log("Zod validation error: ", validateJob.error.errors);
  }

  return job;

}

export const createJob = async (job: JobFormFieldType) => {

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  }
  try {
    const response = await axios.post(`/api/jobs`, job, config);
    const newJob = response.data;

    return newJob;

  }
  catch (error) {
    console.error("Internal server Error ! ", error)
  }

}

export const createCompany = async (company: CompanyFormFieldsType) => {

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  }
  try {
    const response = await axios.post(`/api/companies`, company, config);
    const newCompany = response.data;

    return newCompany;

  }
  catch (error) {
    console.error("Internal server Error ! ", error)
  }

}

export const editJob = async ({ job, id }: { job: JobFormFieldType, id: string }) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  }
  try {
    await axios.put(`/api/jobs/${id}`, job, config);
    // Simulate network delay
    // await new Promise((resolve) => setTimeout(resolve, 2000));
  }
  catch (error) {
    console.error("Internal server Error ! ", error);
  }
}

export const deleteJob = async (id: Jobtype["id"]) => {
  try {
    await axios.delete(`/api/jobs/${id}`)
  } catch (error) {
    console.error("Internal server Error ! ", error);
  }
}