import PropTypes from "prop-types";
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";
const RepoItem = ({ repo }) => {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;

  return (
    <div className="mb-2 rounded-md card bg-base-200 hover:bg-base-300">
      <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold">
          <a href={html_url} >
            <FaLink className="inline mr-1"/> {name}
          </a>
        </h3>
        <p className="mb-3">{description}</p>
        <div>
            <div className="mr-2 badge badge-info badge-lg">
                <FaEye className="mr-2"/> {watchers_count}
            </div>
            <div className="mr-2 badge badge-success badge-lg">
                <FaStar className="mr-2"/> {stargazers_count}
            </div>
            <div className="mr-2 badge badge-error badge-lg">
                <FaInfo className="mr-2"/> {open_issues}
            </div>
            <div className="mr-2 badge badge-warning badge-lg">
                <FaUtensils className="mr-2"/> {forks}
            </div>
        </div>

        {/* <div>
            <a href={html_url} target="_blank" rel="noreferrer">
              <FaEye className="inline mr-1"/> {watchers_count}
            </a>
            <a href={html_url} target="_blank" rel="noreferrer">
              <FaStar className="inline mr-1"/> {stargazers_count}
            </a>
            <a href={html_url} target="_blank" rel="noreferrer">
              <FaUtensils className="inline mr-1"/> {forks}
            </a>
            <a href={html_url} target="_blank" rel="noreferrer">
              <FaInfo className="inline mr-1"/> {open_issues}
            </a>
        </div> */}
      </div>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
