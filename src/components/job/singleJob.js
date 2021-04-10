import JobDetail from './job';

const data = [
    {id: 0, company_name: "Microsoft", Profile: "Software Developer", category: "Full Time", CTC: "150k", branch: ["CSE", "ECE", "EE"], cgpa: 8, description: "qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd. qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd. qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd. qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd."},
    {id: 1, company_name: "Microsoft", Profile: "Software Developer", category: "Full Time", CTC: "150k", branch: ["CSE", "ECE", "EE"], cgpa: 8, description: "qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd. qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd. qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd. qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd."},
    {id: 2, company_name: "Microsoft", Profile: "Software Developer", category: "Full Time", CTC: "150k", branch: ["CSE", "ECE", "EE"], cgpa: 8, description: "qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd."},
    {id: 3, company_name: "Microsoft", Profile: "Software Developer", category: "Full Time", CTC: "150k", branch: ["CSE", "ECE", "EE"], cgpa: 8, description: "qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd. qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd. qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd. qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd."},
    {id: 4, company_name: "Microsoft", Profile: "Software Developer", category: "Full Time", CTC: "150k", branch: ["CSE", "ECE", "EE"], cgpa: 8, description: "qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd."},
    {id: 5, company_name: "Microsoft", Profile: "Software Developer", category: "Full Time", CTC: "150k", branch: ["CSE", "ECE", "EE"], cgpa: 8, description: "qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd."},
    {id: 6, company_name: "Microsoft", Profile: "Software Developer", category: "Full Time", CTC: "150k", branch: ["CSE", "ECE", "EE"], cgpa: 8, description: "qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd."},
    {id: 7, company_name: "Microsoft", Profile: "Software Developer", category: "Full Time", CTC: "150k", branch: ["CSE", "ECE", "EE"], cgpa: 8, description: "qwretrry tutu ff irjifj .eru , kjejrf nvb eko mf j  owoeioi wej ekd ojd."},

]

export const JobWithId = ({ match }) => {
    return (
        <JobDetail
            job={data.filter((j) => j.id === match.params.jobId)}
        />
    );
};