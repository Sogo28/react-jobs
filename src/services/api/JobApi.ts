import axios from "axios";
import { JobsSchema, JobSchema, Jobtype } from "../../schemas/JobSchemas";
import { GetJobsfilters } from "../../state/JobStore";
import { JobFormFieldSchema, JobFormFieldType } from "../../schemas/JobFormFieldsSchemas";

export const fetchJobs = async (query?: GetJobsfilters): Promise<Jobtype[]> => {

  const response = await axios.get("/api/jobs");
  const jobs: Jobtype[] = response.data;

  const validateJobs = JobsSchema.safeParse(jobs);
  if (!validateJobs.success) {
    console.error("Zod validation error:", validateJobs.error.errors);
  }

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return jobs;

}

export const fetchJobById = async (id: string): Promise<Jobtype> => {

  const response = await axios.get(`/api/jobs/${id}`);
  const job = response.data;

  const validateJob = JobSchema.safeParse(job);
  if (!validateJob.success) {
    console.log("Zod validation error: ", validateJob.error.errors);
  }

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

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

    const validateJob = JobFormFieldSchema.safeParse(newJob);
    if (!validateJob.success) {
      console.error("Zod Validation Error ", validateJob.error.errors)
      return
    }

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return newJob;

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
    await new Promise((resolve) => setTimeout(resolve, 2000));
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