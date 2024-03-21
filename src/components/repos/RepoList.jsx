import PropTypes from "prop-types";

const RepoList = ({ repos }) => {
  return <div className="rounded-lg shadow-lg card bg-base-100">
    <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
            Latest Repositories
        </h2>
        {repos.map((repo) => (
            <div key={repo.id} className="flex justify-between">
                <div className="flex-grow-0">
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        {repo.name}
                    </a>
                </div>
               {/*  <div className="flex-grow-0">
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        {repo.stargazers_count}
                    </a>
                </div> */}
            </div>
        ))}
    </div>
    </div>;
};

RepoList.propTypes = {
    repos: PropTypes.array.isRequired,
};

export default RepoList;
