import { getShoppingCart } from "./fakedb";

const appliedJobLoader = async () => {
    const loadedJobs = await fetch('/featuredJobDaba.json');
    const jobDatas = await loadedJobs.json();
    const storedJob = getShoppingCart();
    const savedJob = [];

    for (const id in storedJob) {
        const addedJob = jobDatas.find(job => job.id === id);
        savedJob.push(addedJob);
    }
    return savedJob;
}

export default appliedJobLoader;