import React from 'react';
import ProgressProfile from './ProgressProfile';
import '../styles/ProgressData.css';
import RepoList from './RepoList';

const ProgressData = ({apiData}) => {
    return (
        <React.Fragment>
            <ProgressProfile apiData={apiData}/>
            <div id="repoListDiv">
                <RepoList apiData={apiData} />
            </div>
        </React.Fragment>
    )
}

export default ProgressData
