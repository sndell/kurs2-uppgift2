fetch('../files/resume.json')
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    generateEducations(data.educations);
    generateJobs(data.jobs);
  });

const generateEducations = (educations) => {
  const educationsDiv = document.querySelector('.resume-educations');
  educations.forEach((education) => {
    const mainDiv = document.createElement('div');
    mainDiv.className = 'resume-education';

    const school = document.createElement('h5');
    school.className = 'resume-education__school';
    school.innerHTML = education.name;

    const date = document.createElement('p');
    date.innerHTML = education.from + ' - ' + education.to;
    date.className = 'resume__date';

    const location = document.createElement('h5');
    location.className = 'resume__location';
    location.innerHTML = education.location;

    mainDiv.appendChild(school);
    mainDiv.appendChild(date);
    mainDiv.appendChild(location);

    educationsDiv.appendChild(mainDiv);
  });
};

const generateJobs = (jobs) => {
  const jobsDiv = document.querySelector('.resume-jobs');
  console.log(jobs[0]);
  jobs.forEach((job) => {
    const mainDiv = document.createElement('div');
    mainDiv.className = 'resume-job';

    const name = document.createElement('h5');
    name.className = 'resume-job__name';
    name.innerHTML = job.name;

    const title = document.createElement('h5');
    title.className = 'resume-job__title';
    title.innerHTML = job.title;

    const date = document.createElement('p');
    date.innerHTML = job.from + ' - ' + job.to;
    date.className = 'resume__date';

    const location = document.createElement('h5');
    location.className = 'resume__location';
    location.innerHTML = job.location;

    mainDiv.appendChild(name);
    mainDiv.appendChild(title);
    mainDiv.appendChild(date);
    mainDiv.appendChild(location);

    jobsDiv.appendChild(mainDiv);
  });
};
