

const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-applications');
    // console.log(storedJobApplication);
    if(storedJobApplication !== 'undefined'){
        console.log(storedJobApplication);
        return JSON.parse(storedJobApplication);
    }
    return [];
}

const savejobApplication = id => {
    const storedJobApplications = getStoredJobApplication();
    const exists = storedJobApplications.find(jobId => jobId === id);
    if(!exists){
        storedJobApplications.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplications))
    }
}

export {getStoredJobApplication, savejobApplication};